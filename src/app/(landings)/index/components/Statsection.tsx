import CountUp from "@/components/CountUp";

/* ICON COMPONENT */
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 48 48"
    width={80}
    height={80}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

/* DATA */
const stats = [
  {
    value: 19362,
    suffix: "+",
    label: "Companies analyzed",
    icon: (
      <Icon>
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="10" ry="16" />
        <ellipse cx="24" cy="24" rx="16" ry="10" />
      </Icon>
    ),
  },
  {
    value: 21921,
    suffix: "+",
    label: "Strategies planned",
    icon: (
      <Icon>
        <path d="M24 6L40 14L24 22L8 14L24 6Z" />
        <path d="M40 14V30L24 38V22" />
        <path d="M8 14V30L24 38" />
      </Icon>
    ),
  },
  {
    value: 19201,
    suffix: "+",
    label: "Projects released",
    icon: (
      <Icon>
        <circle cx="24" cy="24" r="16" />
        <path d="M24 24L32 20" />
        <circle cx="24" cy="24" r="2" />
      </Icon>
    ),
  },
  {
    value: 320,
    suffix: "+",
    label: "Satisfied clients",
    icon: (
      <Icon>
        <rect x="6" y="10" width="14" height="14" />
        <rect x="18" y="18" width="14" height="14" />
        <rect x="30" y="26" width="14" height="14" />
      </Icon>
    ),
  },
];

/* COMPONENT */
export default function StatsSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "72px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: 32,
            marginBottom: 56,
          }}
        >
          Built Through Experience. Shaped by Practice.
        </h2>

        {/* STATS GRID */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 40,
            textAlign: "center",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 220px",
                maxWidth: 260,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* ICON */}
              <div style={{ color: "#b8c7cc" }}>{item.icon}</div>

              {/* NUMBER */}
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  color: "#9fb6be",
                  lineHeight: 1,
                }}
              >
                <CountUp end={item.value} suffix={item.suffix} />
              </div>

              {/* LABEL */}
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#9fb6be",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
