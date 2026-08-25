import { Handshake } from "../illustrations";
import { ChapterHeading, FadeUp } from "../motion";

const ROLES = [
  {
    lead: "What Triumphs of Talent brings.",
    body: "Your name, your credibility as an established recognition platform, and your experience shaping a category structure and judging process that people trust.",
  },
  {
    lead: "What Grand Food Fest brings.",
    body: "Full ownership of production, logistics, marketing, category planning, judging coordination, on-ground execution, the physical plaques, and the digital badge system. Triumphs of Talent does not need to staff, plan, fund or manage any operational part of this.",
  },
  {
    lead: "What happens together.",
    body: "The Awards segment carries the Triumphs of Talent name as Presenting Partner throughout, on every piece of branding connected to it, on the ground and across all digital assets.",
  },
  {
    lead: "Where the collaboration goes further.",
    body: "Triumphs of Talent is welcome, and encouraged, to bring in sponsors from their own existing network specifically for this segment. This is intended as a genuine joint production, not a single one-way sponsorship arrangement.",
  },
];

const Roles = () => (
  <section data-testid="roles-section" className="bg-[#1c1a17] py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <ChapterHeading number="05" label="How this would actually work" title="The Roles, Clearly Divided" />
        <FadeUp delay={0.2}>
          <Handshake className="w-[220px] lg:w-[280px] text-[#c9a24b]/85" />
        </FadeUp>
      </div>
      <div className="mt-16 border-t border-[#c9a24b]/15">
        {ROLES.map((r, i) => (
          <FadeUp key={r.lead} delay={i * 0.06}>
            <div className="grid lg:grid-cols-12 gap-4 lg:gap-10 py-10 border-b border-[#c9a24b]/15">
              <p className="lg:col-span-4 font-headline text-xl lg:text-2xl text-[#f7f4ee]">
                <span className="text-[#c9a24b] italic mr-3 text-lg">{String(i + 1).padStart(2, "0")}</span>
                {r.lead}
              </p>
              <p className="lg:col-span-8 font-body font-light text-base leading-relaxed text-[#f7f4ee]/70 max-w-3xl">
                {r.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Roles;
