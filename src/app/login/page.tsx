import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/config";
import LoginUI from "./ui";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return <LoginUI />;
}
