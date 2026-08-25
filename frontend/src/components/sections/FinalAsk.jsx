import { AwardFrame } from "../illustrations";
import { ChapterHeading, FadeUp } from "../motion";

const MAILTO =
  "mailto:habeeb@grandfoodfest.com?subject=Meeting%20Request%20%E2%80%94%20Food%2C%20Culinary%20%26%20Influencer%20Awards";

const FinalAsk = () => (
  <section data-testid="final-ask-section" className="bg-[#1c1a17] py-28 lg:py-40 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <ChapterHeading number="07" label="The ask" title="Let's Build The Award That Doesn't Come Down" />

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
            <p className="font-headline italic text-[#c9a24b] text-xl lg:text-2xl mt-10 border-l border-[#c9a24b]/50 pl-6 max-w-2xl">
              If this direction feels right, we'd simply love to talk further — the categories, the judging, and the
              shape of the partnership can all be shaped around a conversation.
            </p>
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
