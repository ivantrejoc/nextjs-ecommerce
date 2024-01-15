"use client";

import { SessionProvider } from "next-auth/react";

type authContextProps = {
  children: React.ReactNode;
};

const SessionAuthProvider = ({ children }: authContextProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionAuthProvider;
