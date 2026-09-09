from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session
from app.core.roles import UserRole

from app.database.database import get_db
from app.models.user import User
from app.services.token_service import (
    JWT_ALGORITHM,
    JWT_SECRET_KEY,
)
import jwt


security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
) -> User:

    token = credentials.credentials

    try:
        payload = jwt.decode(
            token,
            JWT_SECRET_KEY,
            algorithms=[JWT_ALGORITHM],
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication token",
            )

        user = db.query(User).filter(
            User.id == int(user_id)
        ).first()

    except (jwt.InvalidTokenError, ValueError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token",
        )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is inactive",
        )

    return user

def require_role(required_role: UserRole):
    def role_checker(
        current_user: User = Depends(get_current_user),
    ) -> User:
        
        if current_user.role != required_role.value:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You do not have permission to perform this action.",
            )

        return current_user

    return role_checker


def require_student(
    current_user: User = Depends(get_current_user),
) -> User:
    return require_role(UserRole.STUDENT)(current_user)


def require_teacher(
    current_user: User = Depends(get_current_user),
) -> User:
    return require_role(UserRole.TEACHER)(current_user)


def require_admin(
    current_user: User = Depends(get_current_user),
) -> User:
    return require_role(UserRole.ADMIN)(current_user)