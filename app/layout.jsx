import "./global.css";

export const metadata = {
  title: "SpinalSense",
  description: "AI Powered Cobb Angle Detection"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
