import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import localFont from "next/font/local";

export const nougat = localFont({
  src: "nougat.ttf",
  variable: "--font-nougat",
});

export const lilita = localFont({
  src: "LilitaOne-Regular.ttf",
  variable: "--font-lilita",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: process.env.NEXT_PUSH_APP_KEY,
          });
          console.log("scope is: ", registration.scope);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Metas da Semana</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <style>{`
          :root {
            --font-nougat: ${nougat.style.fontFamily};
            --font-lilita: ${lilita.style.fontFamily};
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
