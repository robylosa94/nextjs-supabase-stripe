"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export type FormState = {
  message: string;
  error?: string;
};

export const registerAction = async (
  prevState: FormState,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("password-confirm") as string;

  if (!password || password !== passwordConfirm) {
    return {
      message: "",
      error: "Passwords do not match",
    };
  }

  const supabaseClient = await createClient();
  const { error } = await supabaseClient.auth.signUp({ email, password });

  if (error) {
    return { message: "", error: error.message };
  }

  return {
    message: "Success, check your email.",
  };
};

export const loginAction = async (prevState: FormState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabaseClient = await createClient();
  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { message: "", error: error.message };
  }

  redirect("/");
};
