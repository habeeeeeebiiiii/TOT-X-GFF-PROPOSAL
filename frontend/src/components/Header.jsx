import { motion } from "framer-motion";
import { EASE } from "./motion";

const Header = () => (
  <motion.header
    data-testid="site-header"
    className="fixed top-0 left-0 right-0 z-50 border-b border-[#c9a24b]/10 bg-[#0d0d0d]/70 backdrop-blur-md"
    initial={{ y: -70, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.4, ease: EASE }}
  >
    <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
      <a href="#top" data-testid="header-home-link" className="flex items-center gap-3">
        <img src="/assets/tot-logo.png" alt="Triumphs of Talent" className="h-10 w-10 rounded-full object-cover" />
        <span className="text-[#c9a24b] font-headline italic text-xl leading-none px-1">×</span>
        <img src="/assets/gff-logo.webp" alt="Grand Food Fest" className="h-10 w-10 rounded-full object-cover" />
        <span className="hidden md:block ml-3 overline !tracking-[0.22em]">The Awards Proposal</span>
      </a>
      <div className="flex items-center gap-8">
        <span className="hidden lg:block text-xs tracking-[0.18em] uppercase text-[#f7f4ee]/50">
          9–11 October 2026 · Hyderabad
        </span>
        <a
          data-testid="header-meeting-button"
          href="mailto:habeeb@grandfoodfest.com?subject=Meeting%20Request%20%E2%80%94%20Food%2C%20Culinary%20%26%20Influencer%20Awards"
          className="gold-btn border border-[#c9a24b]/60 text-[#c9a24b] text-xs tracking-[0.18em] uppercase px-5 py-2.5 hover:bg-[#c9a24b] hover:text-[#0d0d0d]"
        >
          Request a meeting
        </a>
      </div>
    </div>
  </motion.header>
);

export default Header;
