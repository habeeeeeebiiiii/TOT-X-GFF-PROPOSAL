import { ChapterHeading, FadeUp } from "../motion";

const WhyToT = () => (
  <section data-testid="why-tot-section" className="bg-[#0d0d0d] py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6">
      <ChapterHeading number="04" label="Why this fits Triumphs of Talent" title="You've Already Proven This Model Works" />
      <div className="grid lg:grid-cols-12 gap-16 mt-12">
        <FadeUp delay={0.15} className="lg:col-span-8">
          <p className="font-body font-light text-base lg:text-lg leading-relaxed text-[#f7f4ee]/75 max-w-3xl">
            Women of Impact launched in 2024 and successfully returned for a second edition in 2025. Heroes of Hyderabad
            launched in 2025, honouring 75 changemakers across 13 categories, with a jury panel that included leaders
            from T-Hub and the Telangana Innovation Cell, and was attended by senior figures including the Hyderabad
            Police Commissioner. Triumphs of Talent has already shown it can launch new award properties, build genuine
            credibility around them quickly, and attract respected names to validate them.
          </p>
          <p className="font-headline italic text-[#c9a24b] text-xl lg:text-2xl mt-10 border-l border-[#c9a24b]/50 pl-6 max-w-2xl">
            The Food, Culinary &amp; Influencer Awards is a natural next chapter in that pattern, on a stage considerably
            larger than any single venue could offer.
          </p>
        </FadeUp>
        <FadeUp delay={0.25} className="lg:col-span-4 flex flex-col gap-10 self-start">
          <div className="border-l border-[#c9a24b]/30 pl-6">
            <p className="font-headline text-2xl text-[#f7f4ee]">Women of Impact</p>
            <p className="text-xs tracking-[0.16em] uppercase text-[#f7f4ee]/50 mt-2">2024 · returned 2025</p>
          </div>
          <div className="border-l border-[#c9a24b]/30 pl-6">
            <p className="font-headline text-2xl text-[#f7f4ee]">Heroes of Hyderabad</p>
            <p className="text-xs tracking-[0.16em] uppercase text-[#f7f4ee]/50 mt-2">2025 · 75 changemakers · 13 categories</p>
          </div>
          <div className="border-l border-[#b90505]/60 pl-6">
            <p className="font-headline text-2xl text-[#c9a24b]">The Next Chapter</p>
            <p className="text-xs tracking-[0.16em] uppercase text-[#f7f4ee]/50 mt-2">2026 · this proposal</p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default WhyToT;
