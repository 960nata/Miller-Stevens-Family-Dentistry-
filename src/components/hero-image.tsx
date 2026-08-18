"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroImage() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="hero-parallax absolute inset-0 -z-10 will-change-transform"
    >
      <Image
        src="/images/hero-1.avif"
        alt="A treatment in progress at our South Oklahoma City practice"
        fill
        priority
        sizes="100vw"
        unoptimized
        className="object-cover object-center"
      />
    </motion.div>
  );
}
