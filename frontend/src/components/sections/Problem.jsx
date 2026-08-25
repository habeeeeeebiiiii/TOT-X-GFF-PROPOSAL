import { SpotlightPodium } from "../illustrations";
import { ChapterHeading, FadeUp } from "../motion";

const Problem = () => (
  <section id="the-gap" data-testid="problem-section" className="bg-[#1c1a17] py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <ChapterHeading number="01" label="The problem with a single night" title="Recognition That Doesn't Outlast The Room" />
        <FadeUp delay={0.2}>
          <p className="font-body font-light text-base lg:text-lg leading-relaxed text-[#f7f4ee]/75 mt-10 max-w-2xl">
            Heroes of Hyderabad and Women of Impact are genuinely respected properties, built with real credibility and
            a real jury process. But like every awards ceremony, their impact is concentrated into a single evening. The
            room, the stage, the press coverage, the photographs. Once the night ends, the recognition lives on in
            memory and in coverage, but not in a place people actually walk past and see, day after day, for years.
          </p>
        </FadeUp>
        <FadeUp delay={0.32}>
          <p className="font-headline italic text-[#c9a24b] text-xl lg:text-2xl mt-10 border-l border-[#c9a24b]/50 pl-6">
            That gap is the entire idea behind this proposal.
          </p>
        </FadeUp>
      </div>
      <FadeUp delay={0.25} className="lg:col-span-5 flex justify-center">
        <SpotlightPodium className="w-full max-w-[380px] text-[#c9a24b]/85" />
      </FadeUp>
    </div>
  </section>
);

export default Problem;
