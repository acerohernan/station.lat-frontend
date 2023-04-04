import Head from "next/head";
import { GetServerSideProps } from "next";
import HomeView from "@/views/home";
import { Layout } from "@/components/Layout";
import { getServerAuthSession } from "@/server/auth";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  console.log(session);

  return {
    props: {},
  };
};
