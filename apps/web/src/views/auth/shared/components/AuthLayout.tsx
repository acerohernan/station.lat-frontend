import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="w-full h-screen flex justify-center items-center">{children}</main>
);

export default AuthLayout;
