import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "S Tatheer Hussain — Full-Stack Software Engineer, SaaS Developer & Technical Educator";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          padding: "70px 80px",
          border: "2px solid #27272A",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#141416",
              border: "1px solid #C8A96E",
              color: "#C8A96E",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            TH
          </div>
          <div
            style={{
              color: "#C8A96E",
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            34.0151° N, 71.5249° E // System Architecture
          </div>
        </div>

        {/* Main Identity Statement */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#FAFAF9",
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            S Tatheer Hussain
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#A1A1AA",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            Full-Stack Software Engineer · SaaS Developer · Technical Educator
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #27272A",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              color: "#C8A96E",
              fontSize: "15px",
              letterSpacing: "3px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            ENGINEER · EDUCATOR · ENTREPRENEUR
          </div>
          <div
            style={{
              color: "#71717A",
              fontSize: "14px",
              fontFamily: "monospace",
            }}
          >
            tatheer.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
