import { ChapterHeading, FadeUp } from "../motion";

const STATS = [
  { value: "Thousands", label: "of visitors (projected)" },
  { value: "150+", label: "food & lifestyle brands" },
  { value: "3", label: "nights, until 1 AM" },
  { value: "Gachibowli", label: "Stadium, Hyderabad" },
];

const About = () => (
  <section data-testid="about-section" className="bg-[#1c1a17] py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6">
      <ChapterHeading number="03" label="About Grand Food Fest" title="The Stage This Proposal Sits Inside" />
      <div className="grid lg:grid-cols-12 gap-16 mt-12">
        <FadeUp delay={0.15} className="lg:col-span-7">
          <p className="font-body font-light text-base lg:text-lg leading-relaxed text-[#f7f4ee]/75 max-w-2xl">
            Grand Food Fest is South India's largest food, lifestyle, culture and entertainment festival, held across
            three nights at Gachibowli Stadium, Hyderabad. The festival brings together thousands of visitors, 150+ food
            and lifestyle brands, cuisines from across every state in India, and live entertainment running through to 1
            AM each night. It is designed as a complete cultural moment for the city, not just a food event.
          </p>
        </FadeUp>
        <div data-testid="festival-stats" className="lg:col-span-5 grid grid-cols-2 gap-px bg-[#c9a24b]/15 border border-[#c9a24b]/15 self-start">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={0.1 + i * 0.08} className="bg-[#1c1a17] p-6 lg:p-8">
              <p className="font-headline font-light text-3xl lg:text-4xl text-[#c9a24b]">{s.value}</p>
              <p className="text-xs tracking-[0.14em] uppercase text-[#f7f4ee]/55 mt-3">{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
