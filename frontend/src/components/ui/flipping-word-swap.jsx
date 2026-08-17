"use client";;
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

const graphemeSegmenter =
  typeof Intl.Segmenter === "function"
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

function segmentCharacters(text) {
  if (!graphemeSegmenter) return Array.from(text);
  return Array.from(graphemeSegmenter.segment(text), ({ segment }) => segment);
}

export function FlippingWordSwap({
  word1,
  word2,
  duration = 400,
  stagger = 44,
  className,
  toClassName,
  style,
  toStyle
}) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const swappedRef = useRef(false);
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resolvedDuration = prefersReducedMotion
      ? 0
      : Math.max(180, duration) / 1000;
    const resolvedStagger = prefersReducedMotion
      ? 0
      : Math.max(0, stagger) / 1000;

    const context = gsap.context(() => {
      const firstWord = gsap.utils.toArray('[data-flip-word="first"]');
      const secondWord = gsap.utils.toArray('[data-flip-word="second"]');

      gsap.set(firstWord, {
        rotationX: 0,
        opacity: 1,
        transformOrigin: "center top",
      });
      gsap.set(secondWord, {
        rotationX: -82,
        opacity: 0,
        transformOrigin: "center bottom",
      });

      const timeline = gsap.timeline({ paused: true });
      timeline
        .to(firstWord, {
          rotationX: 82,
          opacity: 0,
          duration: resolvedDuration,
          stagger: resolvedStagger,
          ease: "power2.in",
        })
        .to(secondWord, {
        rotationX: 0,
        opacity: 1,
        duration: resolvedDuration,
        stagger: resolvedStagger,
        ease: "power2.out",
      }, `<${resolvedDuration * 0.62}`);

      if (swappedRef.current) timeline.progress(1);
      timelineRef.current = timeline;
    }, containerRef);

    return () => {
      timelineRef.current = null;
      context.revert();
    };
  }, [duration, stagger, word1, word2]);

  const updateSwap = useCallback((next) => {
    swappedRef.current = next;
    setIsSwapped(next);

    if (next) {
      timelineRef.current?.play();
    } else {
      timelineRef.current?.reverse();
    }
  }, []);

  const renderCharacters = (text, layer) =>
    segmentCharacters(text).map((character, index) => (
      <span
        key={`${layer}-${index}-${character}`}
        data-flip-word={layer}
        className="inline-block whitespace-pre [backface-visibility:hidden] [will-change:transform,opacity]">
        {character === " " ? "\u00a0" : character}
      </span>
    ));

  return (
    <button
      ref={containerRef}
      type="button"
      className={cn(
        "relative inline-grid cursor-pointer select-none border-0 bg-transparent p-0 align-baseline font-[inherit] leading-[inherit] tracking-[inherit] text-[inherit]",
        "rounded-[0.08em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 focus-visible:ring-offset-2",
        className
      )}
      aria-label={isSwapped ? word2 : word1}
      aria-pressed={isSwapped}
      style={style}
      onMouseEnter={() => updateSwap(true)}
      onMouseLeave={() => updateSwap(false)}
      onPointerUp={(event) => {
        if (event.pointerType !== "mouse") updateSwap(!swappedRef.current);
      }}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) updateSwap(true);
      }}
      onBlur={() => updateSwap(false)}>
      <span
        className="col-start-1 row-start-1 inline-grid overflow-hidden [perspective:800px]">
        <span
          className="col-start-1 row-start-1 inline-flex items-baseline justify-center gap-[0.012em] whitespace-pre"
          aria-hidden="true">
          {renderCharacters(word1, "first")}
        </span>
        <span
          className={cn(
            "col-start-1 row-start-1 inline-flex items-baseline justify-center gap-[0.012em] whitespace-pre",
            toClassName
          )}
          aria-hidden="true"
          style={toStyle}>
          {renderCharacters(word2, "second")}
        </span>
      </span>
    </button>
  );
}
