/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from "react";
import ArrowIcon from "../../../../components/ArrowIcon";

const steps = ["Strategy", "Branding", "Marketing", "Planning"] as const;
type StepKey = (typeof steps)[number];

const stepContent: Record<StepKey, { title: string; description: string; image: string }> = {
  Strategy: {
    title: "Vision & direction",
    description:
      "Define goals, target audience, and the roadmap. Turn ideas into a clear strategy that guides every decision.",
    image: "/images/business-acordion-img1.jpg",
  },
  Branding: {
    title: "Visual design",
    description:
      "Craft identity—logo, colors, tone, and messaging—so your brand stays consistent and memorable everywhere.",
    image: "/images/business-acordion-img2.jpg",
  },
  Marketing: {
    title: "Growth & campaigns",
    description:
      "Plan campaigns, channels, and content. Drive leads and engagement with measurable marketing execution.",
    image: "/images/business-acordion-img3.jpg",
  },
  Planning: {
    title: "Execution planning",
    description:
      "Convert strategy into delivery—milestones, timelines, and ownership—so the team ships on time.",
    image: "/images/business-acordion-img4.jpg",
  },
};

function useViewport() {
  const [w, setW] = useState<number>(typeof window === "undefined" ? 1200 : window.innerWidth);

  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    w,
    isMobile: w < 768,
    isTablet: w >= 768 && w < 1024,
    isDesktop: w >= 1024,
  };
}

export default function HowWeWork() {
  const { isMobile, isTablet, isDesktop } = useViewport();

  const [active, setActive] = useState<StepKey>("Strategy");
  const [shown, setShown] = useState(stepContent["Strategy"]);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const [dir, setDir] = useState<"next" | "prev">("next");

  const currentIndex = useMemo(() => steps.indexOf(active), [active]);

  const handleStepClick = (step: StepKey) => {
    if (step === active) return;

    const nextIndex = steps.indexOf(step);
    setDir(nextIndex > currentIndex ? "next" : "prev");

    setPhase("out");
    window.setTimeout(() => {
      setActive(step);
      setShown(stepContent[step]);
      setPhase("in");
    }, 220);
  };

  useEffect(() => {
    if (phase !== "in") return;
    const t = window.setTimeout(() => setPhase("idle"), 280);
    return () => window.clearTimeout(t);
  }, [phase]);

  // animation distances reduce on mobile
  const textSlide = isMobile ? 10 : 16;
  const imgSlide = isMobile ? 12 : 18;

  const textTransform =
    phase === "out"
      ? dir === "next"
        ? `translateX(-${textSlide}px)`
        : `translateX(${textSlide}px)`
      : phase === "in"
      ? dir === "next"
        ? `translateX(${textSlide}px)`
        : `translateX(-${textSlide}px)`
      : "translateX(0px)";

  const imageTransform =
    phase === "out"
      ? dir === "next"
        ? `translateX(${imgSlide}px)`
        : `translateX(-${imgSlide}px)`
      : phase === "in"
      ? dir === "next"
        ? `translateX(-${imgSlide}px)`
        : `translateX(${imgSlide}px)`
      : "translateX(0px)";

  const opacity = phase === "out" ? 0 : 1;

  // responsive paddings + sizes
  const sectionPadding = isMobile ? "60px 0" : isTablet ? "80px 0" : "90px 0";
  const containerPadding = isMobile ? "0 18px" : isTablet ? "0 28px" : "0 40px";

  const imageW = isMobile ? "100%" : isTablet ? 520 : 460;
  const imageH = isMobile ? 320 : 520;

  // grid layout per breakpoint
  const layoutStyle: React.CSSProperties = isDesktop
    ? {
        display: "grid",
        gridTemplateColumns: "320px 460px 1fr",
        gap: 60,
        alignItems: "center",
      }
    : isTablet
    ? {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 36,
        alignItems: "start",
      }
    : {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 26,
        alignItems: "start",
      };

  // steps: mobile 2x2, tablet/desktop 4 columns
  const stepsCols = isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)";

  // steps container height: fixed on desktop, auto below
  const stepsHeight = isDesktop ? 520 : "auto";

  return (
    <section style={{ background: "#1c2b2f", padding: sectionPadding, width: "100%" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: containerPadding }}>
        <div style={layoutStyle}>
          {/* LEFT TEXT */}
          <div style={{ paddingTop: isDesktop ? 30 : 0 }}>
            <div
              style={{
                transition: "opacity 220ms ease, transform 220ms ease",
                opacity,
                transform: textTransform,
                willChange: "opacity, transform",
              }}
            >
              <h3
                style={{
                  color: "rgba(255,255,255,0.80)",
                  fontSize: isMobile ? 18 : 20,
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                {shown.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 14,
                  lineHeight: "24px",
                  maxWidth: isMobile ? "100%" : 280,
                }}
              >
                {shown.description}
              </p>

              <button
                style={{
                  marginTop: 22,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 22px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.82)",
                  fontSize: 14,
                  fontWeight: 500,
                  border: "0px",
                  cursor: "pointer",
                  transition: "background 180ms ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)")}
              >
                View more{" "}
                <span style={{ color: "rgba(255,255,255,0.65)" }}>
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: imageW as any, height: imageH, overflow: "hidden" }}>
              <img
                key={shown.image + shown.title}
                src={shown.image}
                alt={shown.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "opacity 220ms ease, transform 220ms ease",
                  opacity,
                  transform: imageTransform,
                  willChange: "opacity, transform",
                }}
              />
            </div>
          </div>

          {/* RIGHT PANELS */}
          <div
            style={{
              // on tablet/mobile we want it below (full width)
              gridColumn: isDesktop ? "auto" : "1 / -1",
              height: stepsHeight as any,
              display: "grid",
              gridTemplateColumns: stepsCols,
              borderLeft: isDesktop ? "1px solid rgba(255,255,255,0.18)" : "0",
              borderTop: isDesktop ? "0" : "1px solid rgba(255,255,255,0.18)",
            }}
          >
            {steps.map((step, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isActive = active === step;

              return (
                <div
                  key={step}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleStepClick(step)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleStepClick(step);
                  }}
                  style={{
                    position: "relative",
                    borderRight: "1px solid rgba(255,255,255,0.18)",
                    borderBottom: isDesktop ? "0" : "1px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    cursor: "pointer",
                    minHeight: isMobile ? 180 : isDesktop ? 520 : 260,
                    transition: "background 200ms ease, box-shadow 200ms ease, transform 200ms ease",
                    background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                    boxShadow: isActive ? "inset 0 0 0 1px rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {/* ACTIVE BAR */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 4,
                      height: "100%",
                      background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
                      transition: "background 200ms ease",
                    }}
                  />

                  {/* arrow */}
                  <div
                    style={{
                      position: "absolute",
                      top: isMobile ? 16 : 26,
                      left: isMobile ? 16 : 26,
                      color: isActive ? "rgba(255,255,255,0.40)" : "rgba(255,255,255,0.22)",
                      transform: i === 0 ? "rotate(180deg)" : "none",
                      transition: "color 200ms ease",
                      scale: isMobile ? "0.9" : "1",
                    } as any}
                  >
                    <ArrowIcon />
                  </div>

                  {/* big number */}
                  <div
                    style={{
                      position: "absolute",
                      transform: isMobile ? `scale(${isActive ? 1.02 : 1})` : `rotate(-90deg) scale(${isActive ? 1.03 : 1})`,
                      bottom: isMobile ? -22 : isActive ? -34 : -40,
                      left: isMobile ? 5 : 8,
                      fontSize: isMobile ? 70 : 110,
                      lineHeight: 2,
                      fontWeight: 200,
                      color: isActive ? "rgba(200, 200, 200, 1)" : "rgba(255,255,255,0.06)",
                      userSelect: "none",
                      transition: "all 200ms ease",
                    }}
                  >
                    {num}
                  </div>

                  {/* label */}
                  <div
                    style={{
                      transform: isMobile ? `scale(${isActive ? 1.02 : 1})` : `rotate(-90deg) scale(${isActive ? 1.03 : 1})`,
                      color: isActive ? "rgba(200,200,200,1)" : "rgba(255,255,255,0.55)",
                      fontSize: isMobile ? 14 : 30,
                      fontWeight: 500,
                      letterSpacing: isMobile ? "0.10em" : "0.18em",
                      whiteSpace: "nowrap",
                      transition: "all 200ms ease",
                    }}
                  >
                    {step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
