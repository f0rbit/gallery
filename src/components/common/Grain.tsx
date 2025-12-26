import { Component } from "solid-js";

/**
 * Grain overlay component using inline SVG filter.
 * 
 * This creates an organic film grain texture overlaying the entire page.
 * The SVG filter is defined inline for maximum browser compatibility.
 * 
 * Technique: 
 * 1. Define SVG with feTurbulence filter (creates procedural noise)
 * 2. Apply filter to a rect that fills the viewport
 * 3. Use CSS to position fixed and blend with content
 */
const Grain: Component = () => (
  <>
    {/* SVG Filter Definition - hidden, only provides the filter */}
    <svg 
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        "pointer-events": "none",
        "z-index": 9999,
        opacity: 0.5,
        "mix-blend-mode": "lighten",
      }}
    >
      <defs>
        <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%">
          {/* fractalNoise creates organic, film-like grain */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.7"
            numOctaves="4"
            seed="1"
            stitchTiles="stitch"
            result="noise"
          />
          {/* Convert to grayscale */}
          <feColorMatrix 
            type="saturate" 
            values="0" 
            in="noise"
            result="mono"
          />
          {/* Increase contrast for more visible grain */}
          <feComponentTransfer in="mono" result="grain">
            <feFuncR type="linear" slope="1.5" intercept="-0.25" />
            <feFuncG type="linear" slope="1.5" intercept="-0.25" />
            <feFuncB type="linear" slope="1.5" intercept="-0.25" />
          </feComponentTransfer>
        </filter>
      </defs>
      {/* Apply the filter to a full-viewport rect */}
      <rect 
        width="100%" 
        height="100%" 
        filter="url(#grain-filter)"
        fill="transparent"
      />
    </svg>
  </>
);

export default Grain;
