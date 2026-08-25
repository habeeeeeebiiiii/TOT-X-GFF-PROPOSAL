import { AwardFrame } from "../illustrations";
import { ChapterHeading, FadeUp } from "../motion";

const BENEFITS = [
  {
    lead: "Presenting credit.",
    body: '"Triumphs of Talent Presents" appears across every piece of branding connected to the Awards segment, including stage signage, digital promotion, press material and the plaques themselves.',
  },
  {
    lead: "The permanent wall placement.",
    body: "Every winning restaurant displays your name on their premises, indefinitely, generating ongoing visibility that a single-night event can never produce on its own.",
  },
  {
    lead: "The influencer badge programme.",
    body: "A recurring digital asset that keeps your name circulating across winning creators' content for a full year following the ceremony.",
  },
  {
    lead: "Zero operational burden.",
    body: "All production, logistics and marketing responsibility sits with Grand Food Fest, not with your team.",
  },
  {
    lead: "Your own sponsor network, welcomed in.",
    body: "The opportunity to bring your existing sponsor relationships into a new, high-visibility segment.",
  },
  {
    lead: "Press coverage.",
    body: "The media relationships and coverage that already surround Grand Food Fest extend naturally to this segment, adding to the press attention your own properties already attract.",
  },
];

const Receives = () => (
  <section data-testid="receives-section" className="bg-[#0d0d0d] py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-7">
        <ChapterHeading number="06" label="What Triumphs of Talent receives" title="The Full List Of What Comes With This" />
        <div className="mt-14 space-y-0">
          {BENEFITS.map((b, i) => (
            <FadeUp key={b.lead} delay={i * 0.05}>
              <div className="py-7 border-b border-[#c9a24b]/12">
                <p className="font-headline text-xl text-[#f7f4ee]">
                  <span className="text-[#c9a24b] italic mr-3 text-base">{String(i + 1).padStart(2, "0")}</span>
                  {b.lead}
                </p>
                <p className="font-body font-light text-base leading-relaxed text-[#f7f4ee]/70 mt-3 max-w-2xl">
                  {b.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 flex items-start justify-center lg:justify-end lg:sticky lg:top-32 self-start">
        <FadeUp delay={0.2} className="text-[#c9a24b] w-[240px] lg:w-[300px]">
          <AwardFrame stage={1} className="w-full float-slow" />
          <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#f7f4ee]/35 mt-6">
            The frame begins to fill
          </p>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default Receives;
