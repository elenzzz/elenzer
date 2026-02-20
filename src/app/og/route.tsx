import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Elenzer";
  const subtitle = searchParams.get("subtitle") ?? "Creative video editing";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#f3edf7",
        backgroundImage:
          "linear-gradient(135deg, rgba(212, 179, 231, 0.95) 0%, rgba(232, 203, 236, 0.9) 45%, rgba(243, 237, 247, 0.98) 100%)",
        color: "#2b1437",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "26px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(67, 35, 92, 0.65)",
        }}
      >
        <span>Portfolio</span>
        <span style={{ width: "48px", height: "1px", background: "#8a3bc1" }} />
        <span>2026</span>
      </div>

      <div
        style={{
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: "84px",
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            color: "rgba(67, 35, 92, 0.78)",
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "22px",
          color: "rgba(67, 35, 92, 0.62)",
        }}
      >
        <span>elenzer.com</span>
        <span>Video editor & storyteller</span>
      </div>
    </div>,
    size,
  );
}

