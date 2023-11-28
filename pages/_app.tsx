import Layout from "@/components/layout";
import ToasterProvider from "@/lib/toaster-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToasterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToasterProvider>
  );
}
