const ITEMS = [
  "The Food, Culinary & Influencer Awards",
  "Triumphs of Talent Presents",
  "Grand Food Fest 2026",
  "9 · 10 · 11 October",
  "Gachibowli Stadium, Hyderabad",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((t, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span className="font-headline font-light italic text-2xl sm:text-3xl lg:text-4xl text-[#f7f4ee]/85 whitespace-nowrap px-8">
          {t}
        </span>
        <span className="text-[#c9a24b] text-lg">✦</span>
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="bg-[#0d0d0d] border-y border-[#c9a24b]/15 py-8 overflow-hidden"
    aria-hidden="true"
  >
    <div className="marquee-track flex w-max">
      <Row />
      <Row />
    </div>
  </div>
);

export default Marquee;
