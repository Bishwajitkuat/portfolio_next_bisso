import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import HomePage from "@/components/home-page/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bisso | Full-Stuck Developer</title>
        <meta
          name="description"
          content="portfolio of Bishwajit Das, app creaded with next js, typescript react "
        />
        <link rel="icon" href="" />
      </Head>
      <main className="grid">
        <Navbar />

        <HomePage />
      </main>
    </>
  );
}
