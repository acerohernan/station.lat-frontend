import React from "react";
import { GetServerSideProps } from "next";
import SignUpView from "@/views/auth/signup";
import { getServerAuthSession } from "@/server/auth";

function Signup() {
  return <SignUpView />;
}

export default Signup;

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
