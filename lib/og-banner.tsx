import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const bannerSize = { width: 1200, height: 630 };

const read = (...segments: string[]) =>
  fs.readFileSync(path.join(process.cwd(), ...segments));

const truncate = (text: string, max: number) =>
  text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;

const titleSize = (title: string) => {
  if (title.length <= 32) return 84;
  if (title.length <= 56) return 70;
  return 58;
};

export function renderBanner({
  title,
  description,
  label,
}: {
  title: string;
  description: string;
  label: string;
}) {
  const fonts = "node_modules/geist/dist/fonts";
  const avatar = `data:image/jpeg;base64,${read("public", "avatar.jpg").toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 100% 0%, #262626 0%, #000 55%)",
          color: "#e8e8e8",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 24,
            color: "#a1a1a1",
            letterSpacing: 2,
          }}
        >
          {label}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: titleSize(title),
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {truncate(title, 90)}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#a1a1a1",
            }}
          >
            {truncate(description, 150)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 32,
            borderTop: "1px solid #2a2a2a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatar}
              alt=""
              width={56}
              height={56}
              style={{ borderRadius: 28 }}
            />
            <div style={{ display: "flex", marginLeft: 20, fontSize: 28 }}>
              Musharaf Parwej
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 24,
              color: "#a1a1a1",
            }}
          >
            musharraf.codes
          </div>
        </div>
      </div>
    ),
    {
      ...bannerSize,
      fonts: [
        {
          name: "Geist",
          data: read(fonts, "geist-sans", "Geist-Regular.ttf"),
          weight: 400,
          style: "normal",
        },
        {
          name: "Geist",
          data: read(fonts, "geist-sans", "Geist-Bold.ttf"),
          weight: 700,
          style: "normal",
        },
        {
          name: "Geist Mono",
          data: read(fonts, "geist-mono", "GeistMono-Regular.ttf"),
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
