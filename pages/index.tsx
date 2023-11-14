import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Bisso | Full-Stuck Developer</title>
        <meta
          name="description"
          content="portfolio of Bishwajit Das, app creaded with next js, typescript react "
        />
        <link rel="icon" href="" />
      </Head>
      <Navbar />
    </main>
  );
}
