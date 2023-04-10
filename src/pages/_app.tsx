import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { UIProvider } from "@/context/ui";
import { darkTheme, lightTheme } from "@/themes";

import "@/styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}
