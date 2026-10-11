import styles from "./nepal-section.module.css";

// Fixed positions render the same night sky on every visit with no scripts or animation.
const stars = Array.from({ length: 80 }, (_, index) => ({
  left: `${(index * 43.718 + (index % 7) * 11.39) % 100}%`,
  top: `${(index * 17.371 + (index % 9) * 5.813) % 55}%`,
}));

export function NepalSection() {
  return (
    <section className={styles["nepal-scene"]} id="nepal-scene" aria-label="Mount Everest night sky">
      <div className={styles["nepal-stars"]} aria-hidden="true">
        {stars.map((position, index) => (
          <i key={index} style={position} />
        ))}
      </div>

      <div className={styles["nepal-quote"]}>
        <blockquote>“Shoot for the moon. Even if you miss, you’ll land among the stars.”</blockquote>
        <cite>Norman Vincent Peale</cite>
      </div>

      <svg
        className={styles["nepal-range"]}
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        aria-label="Illustration of Mount Everest at night"
      >
        <defs>
          <linearGradient id="np-snow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#bcd8f5" />
          </linearGradient>
          <linearGradient id="np-rock" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2c4a6e" />
            <stop offset="1" stopColor="#0d1c31" />
          </linearGradient>
          <linearGradient id="np-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1d3556" />
            <stop offset="1" stopColor="#0a1626" />
          </linearGradient>
        </defs>
        <path d="M-40 360 L120 300 L200 330 L300 250 L400 320 L520 270 L640 330 L760 260 L900 320 L1020 280 L1240 340 L1240 520 L-40 520Z" fill="url(#np-far)" opacity=".8" />
        <path d="M300 520 L420 360 L500 300 L545 215 L585 245 L630 180 L672 130 L700 98 L728 128 L760 118 L810 190 L860 230 L930 300 L1010 360 L1100 420 L1240 450 L1240 520Z" fill="url(#np-rock)" />
        <path d="M700 98 L728 128 L760 118 L810 190 L860 230 L930 300 L1010 360 L900 385 L800 300 L740 250 L715 170Z" fill="#000" opacity=".28" />
        <path d="M630 180 L672 130 L700 98 L728 128 L760 118 L792 158 L765 172 L745 150 L725 182 L700 152 L675 187 L650 170Z" fill="url(#np-snow)" />
        <path d="M545 215 L575 236 L560 250 L538 240Z" fill="url(#np-snow)" opacity=".85" />
        <path d="M-40 440 L100 410 L200 430 L320 390 L430 440 L560 410 L700 452 L860 415 L1000 445 L1120 420 L1240 440 L1240 520 L-40 520Z" fill="#030710" />
      </svg>
    </section>
  );
}
