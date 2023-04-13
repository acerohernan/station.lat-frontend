import { Button, Card, Heading, Input, Text } from "@latinstation/ui";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { getServerAuthSession } from "@/server/auth";

interface FormValues {
  fullname: string;
  company_name: string;
  time_zone_id: string;
}

const Welcome = () => {
  const {
    register,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm<FormValues>();

  useEffect(() => {
    setFocus("fullname");
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen p-4 max-w-[600px] mx-auto">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Heading as="h3">Welcome to Latin Station!</Heading>
            <Text>To get started we need some extra information</Text>
            <div className="mt-8 grid gap-5">
              <Input
                id="fullname"
                label="Full name"
                {...register("fullname", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Please enter at least 8 characteres",
                  },
                })}
                bottomMessage={errors.fullname?.message}
                variant={errors.fullname?.message ? "error" : "default"}
              />
              <Input
                id="company_name"
                label="Company name"
                {...register("company_name", {
                  required: "This field is required",
                  min: {
                    value: 8,
                    message: "Please enter at least 8 characteres",
                  },
                })}
                bottomMessage={errors.company_name?.message}
                variant={errors.company_name?.message ? "error" : "default"}
              />
              <Input
                id="time_zone_id"
                label="Time zone"
                {...register("time_zone_id", {
                  required: "This field is required",
                })}
                bottomMessage={errors.time_zone_id?.message}
                variant={errors.time_zone_id?.message ? "error" : "default"}
              />
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <Button type="submit">Get started</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

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
