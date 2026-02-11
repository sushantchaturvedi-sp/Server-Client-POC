"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username");

  if (!username) {
    throw new Error("Username is required");
  }

  const cookieStore = await cookies();

  cookieStore.set("auth-token", "logged-in", {
    httpOnly: true,
    path: "/",
  });

  redirect("/dashboard");
}
