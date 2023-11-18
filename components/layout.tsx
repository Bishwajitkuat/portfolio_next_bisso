import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import HomePage from "@/components/home-page/home-page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Bisso | Full-Stuck Developer</title>
        <meta
          name="description"
          content="portfolio of Bishwajit Das, app creaded with next js, typescript and react "
        />
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <main className="grid-1 py-20">{children}</main>
    </>
  );
}
