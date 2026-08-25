import { Storefront, PhoneBadge } from "../illustrations";
import { ChapterHeading, FadeUp } from "../motion";

const Idea = () => (
  <section data-testid="idea-section" className="bg-[#0d0d0d] py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6">
      <ChapterHeading number="02" label="The idea" title="Recognition That Stays Where People Already Are" />
      <FadeUp delay={0.2}>
        <p className="font-body font-light text-base lg:text-lg leading-relaxed text-[#f7f4ee]/75 mt-10 max-w-2xl">
          We propose two award tracks running under the same ceremony, each solving the "one night only" problem in its
          own way.
        </p>
      </FadeUp>

      <div className="mt-20 grid lg:grid-cols-2 gap-px bg-[#c9a24b]/15 border border-[#c9a24b]/15">
        <div className="bg-[#0d0d0d] p-8 sm:p-12 lg:p-14">
          <FadeUp>
            <span className="overline">Track one · Culinary Awards</span>
            <Storefront className="w-full max-w-[340px] text-[#c9a24b]/90 mt-10 mx-auto lg:mx-0" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <h3 className="font-headline font-light text-2xl lg:text-3xl mt-10">
              Restaurants Get A Wall, Not Just A Night
            </h3>
            <p className="font-body font-light text-base leading-relaxed text-[#f7f4ee]/75 mt-6">
              Leading Hyderabad restaurants and food brands are honoured on stage at the festival, in front of thousands
              of attendees. Winners then receive a physical award plaque, co-branded with Triumphs of Talent and Grand
              Food Fest, which is installed permanently on the wall of their restaurant. From that point forward, every
              customer who eats there, on any ordinary day, for years, sees the plaque and both names on it. Examples of
              the kind of establishment we would love to see honoured in this category include Pista House, Shah Ghouse,
              Paradise, Cream Stone and other well-known Hyderabad food brands.
            </p>
            <p data-testid="culinary-disclaimer" className="text-xs tracking-wide text-[#f7f4ee]/45 mt-6 italic">
              These are illustrative examples of category fit, not confirmed participants.
            </p>
          </FadeUp>
        </div>

        <div className="bg-[#0d0d0d] p-8 sm:p-12 lg:p-14">
          <FadeUp>
            <span className="overline">Track two · Influencer Awards</span>
            <PhoneBadge className="w-full max-w-[240px] text-[#c9a24b]/90 mt-10 mx-auto lg:mx-0" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <h3 className="font-headline font-light text-2xl lg:text-3xl mt-10">
              Creators Get A Badge That Keeps Working
            </h3>
            <p className="font-body font-light text-base leading-relaxed text-[#f7f4ee]/75 mt-6">
              Alongside the restaurants, we recognise Hyderabad's leading food and lifestyle content creators for their
              reach and influence. Winners receive a certified digital badge, "Triumphs of Talent &amp; Grand Food Fest
              Awarded Creator," which they display in their Instagram bio and carry into their content across the
              following year. Every post they make keeps both brand names in front of their audience, long after the
              award ceremony itself is over.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);

export default Idea;
