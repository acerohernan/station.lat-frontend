import { Button, Heading, Input, Text } from "@latinstation/ui";
import { GetServerSideProps } from "next";
import React from "react";
import { getServerAuthSession } from "@/server/auth";

const Welcome = () => (
  <div className="w-full h-screen bg-white">
    <div className="px-6 py-14 max-w-[600px] mx-auto w-full h-screen">
      <Heading as="h3">Welcome to Latin Station!</Heading>
      <Text>To get started we need some extra information</Text>
      <div className="mt-8 grid gap-5">
        <Input id="username" label="Fullname" />
        <Input id="username" label="Company Name" />
        <Input id="username" label="Time Zone" />
      </div>

      <div className="mt-6 flex justify-end">
        <Button>Get started</Button>
      </div>
    </div>
  </div>
);

export default Welcome;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: true,
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //  @ts-ignore
  if (session.user.welcomeFlowFinished) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
