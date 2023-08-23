"use client";
import Header from "@/components/Home/Header";
import Content from "@/components/Home/content/Content";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className=" max-w-[1500px] m-auto ">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
