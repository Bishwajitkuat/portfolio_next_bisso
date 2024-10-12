import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import HomePage from "@/components/home-page/home-page";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Bisso | Full-Stuck Developer</title>
        <meta
          name="description"
          content="portfolio of Bishwajit Das, app created with next js, typescript and react "
        />
        <link rel="icon" href="" />
      </Head>
      <div className="h-[100vh] flex flex-col">
        <Navbar />
        <div className="flex-grow ">
          <main className="grid py-20">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
