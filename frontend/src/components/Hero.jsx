import { motion, useScroll, useTransform } from "framer-motion";
import { AwardFrame } from "./illustrations";
import { MaskedLine, EASE } from "./motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const frameY = useTransform(scrollY, [0, 700], [0, 110]);
  const textY = useTransform(scrollY, [0, 700], [0, -50]);

  const scrollDown = () => {
    if (window.__lenis) window.__lenis.scrollTo("#the-gap", { offset: -40, duration: 1.6 });
  };

  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center pt-36 pb-24">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            className="overline mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A proposal from Grand Food Fest to Triumphs of Talent
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-headline font-light tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-6xl"
          >
            <MaskedLine delay={0.65}>Every award you've given</MaskedLine>
            <MaskedLine delay={0.8}>lasted one night.</MaskedLine>
            <MaskedLine delay={0.95} className="italic text-[#c9a24b]">
              This one won't come down.
            </MaskedLine>
          </h1>

          <motion.p
            data-testid="hero-subtext"
            className="font-body font-light text-base lg:text-lg leading-relaxed text-[#f7f4ee]/75 max-w-xl mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.35, ease: EASE }}
          >
            We'd like to propose a new award show, hosted inside Grand Food Fest and presented under the Triumphs of
            Talent name: The Food, Culinary &amp; Influencer Awards. Restaurants that win take home a plaque for their
            wall. Influencers that win take home a badge for their bio. Both stay long after the night ends.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.55, ease: EASE }}
          >
            <button
              data-testid="hero-proposal-button"
              onClick={scrollDown}
              className="gold-btn group border border-[#c9a24b]/60 text-[#c9a24b] px-8 py-4 text-sm tracking-[0.16em] uppercase hover:bg-[#c9a24b] hover:text-[#0d0d0d]"
            >
              See the full proposal
              <span className="inline-block ml-3 transition-transform duration-500 group-hover:translate-y-1">↓</span>
            </button>
            <p data-testid="hero-meta" className="text-xs tracking-[0.2em] uppercase text-[#f7f4ee]/55 leading-relaxed">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b90505] mr-2 align-middle" />
              9, 10 &amp; 11 October 2026
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>Gachibowli Stadium, Hyderabad
            </p>
          </motion.div>

          <motion.div
            data-testid="hero-logos"
            className="mt-14 flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8 }}
          >
            <img src="/assets/tot-logo.png" alt="Triumphs of Talent" className="h-14 w-14 rounded-full object-cover" />
            <span className="font-headline italic text-[#c9a24b] text-2xl">×</span>
            <img src="/assets/gff-logo.webp" alt="Grand Food Fest" className="h-14 w-14 rounded-full object-cover" />
            <span className="hairline w-16 hidden sm:block" />
            <span className="hidden sm:block text-[11px] tracking-[0.24em] uppercase text-[#f7f4ee]/45">
              Two names,
              <br />
              one ceremony
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          style={{ y: frameY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.9 }}
        >
          <motion.div
            className="float-slow text-[#c9a24b] w-[240px] sm:w-[300px] lg:w-[340px]"
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.9, ease: EASE }}
          >
            <AwardFrame stage={0} className="w-full drop-shadow-[0_0_40px_rgba(201,162,75,0.12)]" />
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#f7f4ee]/35 mt-6">
              The frame, for now, is empty
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
