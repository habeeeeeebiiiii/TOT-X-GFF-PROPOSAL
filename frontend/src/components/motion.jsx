import { motion } from "framer-motion";

export const EASE = [0.76, 0, 0.24, 1];

export const FadeUp = ({ children, delay = 0, className = "", as = "div" }) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
};

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const ChapterHeading = ({ number, label, title, className = "" }) => (
  <div className={className}>
    <FadeUp className="flex items-baseline gap-5">
      <span className="font-headline text-[#c9a24b] text-lg italic">{number}</span>
      <span className="overline">{label}</span>
      <span className="hairline flex-1 translate-y-[-4px]" />
    </FadeUp>
    <FadeUp delay={0.12}>
      <h2 className="font-headline font-light tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl mt-8 max-w-2xl">
        {title}
      </h2>
    </FadeUp>
  </div>
);
