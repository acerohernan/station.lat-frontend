import React from "react";
import { GetServerSideProps } from "next";
import SignInView from "@/views/auth/signin";
import { getServerAuthSession } from "@/server/auth";

export default function SignIn() {
  return <SignInView />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      props: {},
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
