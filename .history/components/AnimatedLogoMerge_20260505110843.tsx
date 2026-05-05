'use client';

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type Transition,
  type Variants,
} from 'framer-motion';
import Image from 'next/image';
import { useRef, type CSSProperties } from 'react';
import styles from './AnimatedLogoMerge.module.css';

type AnimatedLogoMergeProps = {
  topImageSrc?: string;
  bottomImageSrc?: string;
  className?: string;
  size?: number | string;
  backgroundColor?: string;
  ariaLabel?: string;
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
  scrollLinked?: boolean;
  title?: string;
  eyebrow?: string;
  pieceGap?: number;
  useImagePieces?: boolean;
  imageAspectRatio?: string;
  showStageHeader?: boolean;
  scrollSceneHeight?: string;
};

const topVariants: Variants = {
  hidden: { opacity: 0, y: '-70%' },
  visible: { opacity: 1, y: 0 },
};

const bottomVariants: Variants = {
  hidden: { opacity: 0, y: '70%' },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedLogoMerge({
  topImageSrc,
  bottomImageSrc,
  className = '',
  size = 220,
  backgroundColor = '#c80909',
  ariaLabel = 'Animated logo',
  duration = 0.75,
  delay = 0,
  triggerOnScroll = true,
  scrollLinked = false,
  title = 'The logo assembles here',
  eyebrow = 'Scroll reveal test',
  pieceGap = 8,
  useImagePieces = false,
  imageAspectRatio = '128 / 263',
  showStageHeader = false,
  scrollSceneHeight = '230vh',
}: AnimatedLogoMergeProps) {
  const logoStyle = {
    '--logo-size': typeof size === 'number' ? `${size}px` : size,
    '--logo-background': backgroundColor,
    '--logo-piece-gap': `${pieceGap}px`,
    '--logo-image-aspect-ratio': imageAspectRatio,
  } as CSSProperties;

  const topStyle = {
    backgroundImage: topImageSrc ? `url("${topImageSrc}")` : undefined,
  } as CSSProperties;

  const bottomStyle = {
    backgroundImage: bottomImageSrc ? `url("${bottomImageSrc}")` : undefined,
  } as CSSProperties;

  const transition: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  };

  if (scrollLinked) {
    return (
      <ScrollLinkedLogo
        className={className}
        logoStyle={logoStyle}
        ariaLabel={ariaLabel}
        eyebrow={eyebrow}
        title={title}
        showStageHeader={showStageHeader}
        scrollSceneHeight={scrollSceneHeight}
        useImagePieces={useImagePieces}
        topImageSrc={topImageSrc}
        bottomImageSrc={bottomImageSrc}
        topStyle={topStyle}
        bottomStyle={bottomStyle}
      />
    );
  }

  return (
    <div
      className={`${styles.logo} ${className}`}
      style={logoStyle}
      role="img"
      aria-label={ariaLabel}
    >
      <motion.div
        className={`${styles.logoPiece} ${styles.topPiece}`}
        style={topStyle}
        variants={topVariants}
        initial="hidden"
        animate={triggerOnScroll ? undefined : 'visible'}
        whileInView={triggerOnScroll ? 'visible' : undefined}
        viewport={{ once: false, amount: 0.75 }}
        transition={transition}
      />
      <motion.div
        className={`${styles.logoPiece} ${styles.bottomPiece}`}
        style={bottomStyle}
        variants={bottomVariants}
        initial="hidden"
        animate={triggerOnScroll ? undefined : 'visible'}
        whileInView={triggerOnScroll ? 'visible' : undefined}
        viewport={{ once: false, amount: 0.75 }}
        transition={{ ...transition, delay: delay + 0.08 }}
      />
    </div>
  );
}

function ScrollLinkedLogo({
  className,
  logoStyle,
  ariaLabel,
  eyebrow,
  title,
  showStageHeader,
  scrollSceneHeight,
  useImagePieces,
  topImageSrc,
  bottomImageSrc,
  topStyle,
  bottomStyle,
}: {
  className: string;
  logoStyle: CSSProperties;
  ariaLabel: string;
  eyebrow: string;
  title: string;
  showStageHeader: boolean;
  scrollSceneHeight: string;
  useImagePieces: boolean;
  topImageSrc?: string;
  bottomImageSrc?: string;
  topStyle: CSSProperties;
  bottomStyle: CSSProperties;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end'],
  });
  const topScrollY = useTransform(scrollYProgress, [0, 0.48], ['-72vh', '0vh']);
  const bottomScrollY = useTransform(scrollYProgress, [0.32, 0.86], ['72vh', '0vh']);
  const topOpacity = useTransform(scrollYProgress, [0, 0.08], [0.25, 1]);
  const bottomOpacity = useTransform(scrollYProgress, [0.28, 0.38], [0.25, 1]);
  const doneScale = useTransform(scrollYProgress, [0.86, 1], [1, 1.03]);

  return (
    <section
      ref={sceneRef}
      className={`${styles.scene} ${className}`}
      style={{ minHeight: scrollSceneHeight }}
    >
      <div className={styles.stickyStage}>
        {showStageHeader && (
          <div className={styles.stageHeader}>
            <p>{eyebrow}</p>
            <h2>{title}</h2>
          </div>
        )}
        <motion.div
          className={`${styles.logo} ${useImagePieces ? styles.imageLogo : ''}`}
          style={{ ...logoStyle, scale: doneScale }}
          role="img"
          aria-label={ariaLabel}
        >
          {useImagePieces ? (
            <>
              <ScrollImagePiece
                className={`${styles.imagePiece} ${styles.topImagePiece}`}
                src={topImageSrc}
                alt=""
                y={topScrollY}
                opacity={topOpacity}
              />
              <ScrollImagePiece
                className={`${styles.imagePiece} ${styles.bottomImagePiece}`}
                src={bottomImageSrc}
                alt=""
                y={bottomScrollY}
                opacity={bottomOpacity}
              />
            </>
          ) : (
            <>
              <ScrollPiece
                className={`${styles.logoPiece} ${styles.topPiece}`}
                imageStyle={topStyle}
                y={topScrollY}
                opacity={topOpacity}
              />
              <ScrollPiece
                className={`${styles.logoPiece} ${styles.bottomPiece}`}
                imageStyle={bottomStyle}
                y={bottomScrollY}
                opacity={bottomOpacity}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ScrollPiece({
  className,
  imageStyle,
  y,
  opacity,
}: {
  className: string;
  imageStyle: CSSProperties;
  y: MotionValue<string>;
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      className={className}
      style={{
        ...imageStyle,
        y,
        opacity,
      }}
    />
  );
}

function ScrollImagePiece({
  className,
  src,
  alt,
  y,
  opacity,
}: {
  className: string;
  src?: string;
  alt: string;
  y: MotionValue<string>;
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div className={className} style={{ y, opacity }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="300px" priority />
      ) : (
        <div className={styles.missingImagePiece} />
      )}
    </motion.div>
  );
}
