import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/config";
import { redirect } from "next/navigation";
import PredictUI from "./ui";

export default async function Predict() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <PredictUI />;
  }

  redirect("/");
}
