const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#0d0d0d] border-t border-[#c9a24b]/15 py-14">
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <img src="/assets/tot-logo.png" alt="Triumphs of Talent" className="h-9 w-9 rounded-full object-cover" />
        <span className="font-headline italic text-[#c9a24b] text-lg">×</span>
        <img src="/assets/gff-logo.webp" alt="Grand Food Fest" className="h-9 w-9 rounded-full object-cover" />
      </div>
      <p className="text-xs tracking-[0.18em] uppercase text-[#f7f4ee]/45 text-center">
        The Food, Culinary &amp; Influencer Awards · A proposal · 2026
      </p>
      <a
        data-testid="footer-email-link"
        href="mailto:habeeb@grandfoodfest.com"
        className="text-xs tracking-[0.18em] uppercase text-[#c9a24b] hover:text-[#f7f4ee] transition-colors duration-500"
      >
        habeeb@grandfoodfest.com
      </a>
    </div>
  </footer>
);

export default Footer;
