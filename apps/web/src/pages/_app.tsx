import "@latinstation/ui/dist/styles.css";
import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
);

export default App;
