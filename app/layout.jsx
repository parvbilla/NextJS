import "./globals.css";
import Provider from "./toggle/ThemeProvider";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}