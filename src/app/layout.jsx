import "@/app/styles/globals.css";

export const metadata = {
  title: "The Quad Cleaners",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}