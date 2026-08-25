import { AwardFrame } from "../illustrations";
import { ChapterHeading, FadeUp } from "../motion";

const MAILTO =
  "mailto:habeeb@grandfoodfest.com?subject=Meeting%20Request%20%E2%80%94%20Food%2C%20Culinary%20%26%20Influencer%20Awards";

const FinalAsk = () => (
  <section data-testid="final-ask-section" className="bg-[#1c1a17] py-28 lg:py-40 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <ChapterHeading number="07" label="The ask, and the investment" title="Let's Build The Award That Doesn't Come Down" />

      <div className="grid lg:grid-cols-12 gap-16 mt-16 items-start">
        <FadeUp delay={0.15} className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="text-[#c9a24b] w-[260px] lg:w-[320px] float-slow">
            <AwardFrame stage={2} className="w-full drop-shadow-[0_0_50px_rgba(201,162,75,0.15)]" />
            <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#f7f4ee]/35 mt-6">
              The frame, complete
            </p>
          </div>
        </FadeUp>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <FadeUp delay={0.2}>
            <p className="font-body font-light text-base lg:text-lg leading-relaxed text-[#f7f4ee]/75 max-w-2xl">
              We would welcome a short meeting to walk your team through the categories, the judging format, the plaque
              and badge design, and exactly how this segment fits alongside everything Triumphs of Talent has already
              built.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div
              data-testid="pricing-card"
              className="mt-12 border border-[#c9a24b]/40 p-8 lg:p-12 relative"
            >
              <span className="absolute -top-3 left-8 bg-[#1c1a17] px-4 overline">The investment</span>
              <p className="text-xs tracking-[0.24em] uppercase text-[#f7f4ee]/55">Presenting Partner</p>
              <p data-testid="pricing-amount" className="font-headline font-light text-5xl lg:text-6xl text-[#c9a24b] mt-4">
                ₹12,00,000
              </p>
              <p className="font-body font-light text-base leading-relaxed text-[#f7f4ee]/70 mt-8 max-w-xl">
                This covers full presenting rights and branding across the Food, Culinary &amp; Influencer Awards
                segment, as described throughout this proposal. All production, execution and marketing costs beyond
                this are carried by Grand Food Fest. Triumphs of Talent is also welcome to bring additional sponsors
                into the segment independently, at no cost or obligation to Grand Food Fest.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <a
                data-testid="request-meeting-button"
                href={MAILTO}
                className="gold-btn bg-[#c9a24b] text-[#0d0d0d] px-10 py-5 text-sm tracking-[0.18em] uppercase font-medium hover:bg-[#f7f4ee]"
              >
                Request a meeting <span className="ml-2">→</span>
              </a>
              <div data-testid="contact-details" className="text-sm font-light text-[#f7f4ee]/65 leading-relaxed">
                <p className="text-[#f7f4ee]">Habeeb Ali</p>
                <p>Founder &amp; CEO, Hanfim Foods LLP</p>
                <p>
                  <a href="tel:+919353994283" className="hover:text-[#c9a24b] transition-colors duration-500" data-testid="contact-phone-link">
                    +91 93539 94283
                  </a>
                  {" · "}
                  <a href="mailto:habeeb@grandfoodfest.com" className="hover:text-[#c9a24b] transition-colors duration-500" data-testid="contact-email-link">
                    habeeb@grandfoodfest.com
                  </a>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);

export default FinalAsk;
