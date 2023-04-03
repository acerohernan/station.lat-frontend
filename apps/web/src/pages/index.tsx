import Head from "next/head";
import HomeView from "@/views/home";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Latin Station</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </Layout>
  );
}
