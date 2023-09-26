import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const delay = 0.1;

export default function FadeInText({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: number;
}): React.JSX.Element {
  const container = useRef(null);
  const isInView = useInView(container, {
    amount: 'all',
    once: true,
  });

  return (
    <motion.div
      style={{
        opacity: isInView ? 1 : 0,
        transition: `opacity ${index ? 1.1 + index * delay : 1.1}s ease-in-out`,
      }}
      ref={container}
    >
      {children}
    </motion.div>
  );
}
