const SW = 1.4;

export const AwardFrame = ({ stage = 0, className = "" }) => (
  <svg
    viewBox="0 0 300 380"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid={`award-frame-stage-${stage}`}
  >
    <rect x="14" y="14" width="272" height="352" />
    <rect x="30" y="30" width="240" height="320" />
    <path d="M14 46 V14 H46" strokeWidth="2" />
    <path d="M254 14 H286 V46" strokeWidth="2" />
    <path d="M286 334 V366 H254" strokeWidth="2" />
    <path d="M46 366 H14 V334" strokeWidth="2" />

    {stage >= 1 && (
      <g>
        <path d="M96 108 C 76 130, 76 160, 96 182" />
        <path d="M204 108 C 224 130, 224 160, 204 182" />
        <rect x="92" y="196" width="116" height="72" />
        <rect x="100" y="204" width="100" height="56" />
      </g>
    )}

    {stage >= 2 && (
      <g>
        <text
          x="150"
          y="86"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="14"
          letterSpacing="2.5"
        >
          TRIUMPHS OF TALENT
        </text>
        <text
          x="150"
          y="104"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontFamily="'Outfit', sans-serif"
          fontSize="9"
          letterSpacing="7"
        >
          PRESENTS
        </text>
        <path d="M110 220 H190" />
        <path d="M122 236 H178" />
        <path d="M134 250 H166" />
        <path d="M150 286 l3.5 9 9 3.5 -9 3.5 -3.5 9 -3.5 -9 -9 -3.5 9 -3.5 z" />
        <path d="M120 322 H180" strokeDasharray="1 6" />
      </g>
    )}
  </svg>
);

export const SpotlightPodium = ({ className = "" }) => (
  <svg
    viewBox="0 0 420 300"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="spotlight-podium-illustration"
  >
    <circle cx="330" cy="26" r="7" />
    <path d="M330 33 V 12" strokeDasharray="2 5" />
    <path d="M323 32 L 168 258" opacity="0.8" />
    <path d="M337 32 L 372 258" opacity="0.8" />
    <ellipse cx="270" cy="260" rx="102" ry="11" opacity="0.65" />
    <path d="M20 271 H 400" />
    <rect x="66" y="188" width="72" height="83" />
    <rect x="56" y="176" width="92" height="12" />
    <path d="M66 216 H 138" opacity="0.6" />
    <path d="M66 244 H 138" opacity="0.6" />
    <path d="M96 176 V 152 c 0 -10 8 -16 16 -16 s 16 6 16 16 v 24" />
    <circle cx="112" cy="126" r="9" />
  </svg>
);

export const Storefront = ({ className = "" }) => (
  <svg
    viewBox="0 0 420 320"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="storefront-illustration"
  >
    <path d="M24 292 H 396" />
    <rect x="66" y="112" width="288" height="180" />
    <path d="M66 112 H 354 v 20" />
    <path d="M66 132 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0 q 14.4 18 28.8 0" />
    <path d="M144 92 H 276 V 60 H 144 Z" />
    <path d="M160 76 H 260" strokeDasharray="1 7" />
    <path d="M168 60 V 40 M 252 60 V 40" opacity="0.7" />
    <rect x="92" y="168" width="80" height="66" />
    <path d="M132 168 V 234 M 92 201 H 172" opacity="0.7" />
    <rect x="212" y="168" width="52" height="124" />
    <circle cx="254" cy="232" r="2.5" />
    <rect x="296" y="168" width="40" height="32" />
    <rect x="301" y="173" width="30" height="22" />
    <path d="M316 179 l2.2 5.4 5.4 2.2 -5.4 2.2 -2.2 5.4 -2.2 -5.4 -5.4 -2.2 5.4 -2.2 z" />
    <path d="M296 224 H 336" opacity="0.5" />
    <path d="M296 240 H 328" opacity="0.5" />
  </svg>
);

export const PhoneBadge = ({ className = "" }) => (
  <svg
    viewBox="0 0 300 320"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="phone-badge-illustration"
  >
    <rect x="92" y="24" width="116" height="272" rx="20" />
    <path d="M132 40 H 168" />
    <rect x="106" y="56" width="88" height="206" rx="4" />
    <circle cx="150" cy="124" r="30" />
    <path d="M150 106 l4.6 11.4 11.4 4.6 -11.4 4.6 -4.6 11.4 -4.6 -11.4 -11.4 -4.6 11.4 -4.6 z" />
    <path d="M136 148 L 128 184 L 150 172 L 172 184 L 164 148" />
    <path d="M122 214 H 178" strokeDasharray="1 7" />
    <path d="M132 232 H 168" strokeDasharray="1 7" />
    <circle cx="150" cy="280" r="5" />
  </svg>
);

export const Handshake = ({ className = "" }) => (
  <svg
    viewBox="0 0 420 260"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="handshake-illustration"
  >
    <path d="M18 84 L 140 124 L 140 164 L 18 124 Z" />
    <path d="M402 84 L 280 124 L 280 164 L 402 124 Z" />
    <path d="M30 96 L 128 128" opacity="0.5" />
    <path d="M390 96 L 292 128" opacity="0.5" />
    <path d="M140 124 C 176 128 206 140 232 158 C 252 172 262 186 262 198" />
    <path d="M140 164 C 168 168 194 178 214 192" />
    <path d="M280 124 C 252 130 232 138 218 148 C 206 156 200 164 198 172" />
    <path d="M280 164 C 258 168 242 174 230 182" />
    <path d="M232 158 q 12 12 6 24" />
    <path d="M216 170 q 12 12 6 24" />
    <path d="M200 178 q 11 12 5 23" />
    <path d="M262 198 q -6 10 -18 12" />
    <path d="M150 210 H 270" strokeDasharray="1 7" opacity="0.6" />
    <path d="M210 222 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" />
  </svg>
);

export const PlaqueMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 40"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="40" height="32" />
    <rect x="9" y="9" width="30" height="22" />
    <path d="M24 13 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
  </svg>
);


export const PlaqueDesign = ({ className = "" }) => (
  <svg
    viewBox="0 0 520 340"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={SW}
    strokeLinecap="round"
    strokeLinejoin="round"
    data-testid="plaque-design-illustration"
  >
    <rect x="14" y="14" width="492" height="312" />
    <rect x="30" y="30" width="460" height="280" />
    <path d="M14 44 V14 H44" strokeWidth="2" />
    <path d="M476 14 H506 V44" strokeWidth="2" />
    <path d="M506 296 V326 H476" strokeWidth="2" />
    <path d="M44 326 H14 V296" strokeWidth="2" />

    <text
      x="260"
      y="78"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="'Cormorant Garamond', serif"
      fontSize="21"
      letterSpacing="5"
    >
      TRIUMPHS OF TALENT
    </text>
    <text
      x="260"
      y="100"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="'Outfit', sans-serif"
      fontSize="9"
      letterSpacing="6"
    >
      × GRAND FOOD FEST ×
    </text>

    <path d="M120 128 H 400" />
    <path d="M260 118 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" />

    <path d="M148 152 C 116 178, 116 214, 148 246" />
    <path d="M372 152 C 404 178, 404 214, 372 246" />
    <path d="M148 152 q -10 -6 -16 -2" opacity="0.7" />
    <path d="M372 152 q 10 -6 16 -2" opacity="0.7" />

    <text
      x="260"
      y="176"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="'Cormorant Garamond', serif"
      fontSize="15"
      letterSpacing="3"
    >
      FOOD, CULINARY &amp;
    </text>
    <text
      x="260"
      y="198"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="'Cormorant Garamond', serif"
      fontSize="15"
      letterSpacing="3"
    >
      INFLUENCER AWARDS
    </text>
    <text
      x="260"
      y="226"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="'Outfit', sans-serif"
      fontSize="9"
      letterSpacing="4"
    >
      HONOURED FOR CULINARY EXCELLENCE
    </text>

    <path d="M180 262 H 340" strokeDasharray="1 6" />
    <text
      x="260"
      y="288"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="'Outfit', sans-serif"
      fontSize="9"
      letterSpacing="5"
    >
      GACHIBOWLI STADIUM · HYDERABAD · 2026
    </text>
  </svg>
);
