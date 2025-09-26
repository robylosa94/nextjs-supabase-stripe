"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { FormState, registerAction } from "../action";
import { useActionState } from "react";
import FormButton from "@/components/ui/form-button";

const initialState: FormState = {
  message: "",
};

export default function RegisterPage() {
  const [state, formAction] = useActionState(registerAction, initialState);

  return (
    <form
      action={formAction}
      className="w-full sm:w-[350px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-zinc-900"
    >
      <h1 className="text-zinc-900 dark:text-white text-3xl mt-10 font-medium">
        Register
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
        Please sign up to continue
      </p>

      <div className="flex items-center w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <Mail size={16} color="#52525c" />
        <input
          type="email"
          placeholder="Email address"
          className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
          name="email"
          required
        />
      </div>

      <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <Lock size={16} color="#52525c" />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
          name="password"
          required
        />
      </div>

      <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <Lock size={16} color="#52525c" />
        <input
          type="password"
          placeholder="Password confirm"
          className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
          name="password-confirm"
          required
        />
      </div>

      <FormButton text="Register" className="mt-4 w-full" />

      <div className="my-4">
        <p className="text-xs text-green-700">{state.message}</p>
        <p className="text-xs text-red-500">{state.error}</p>
      </div>

      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-11">
        Already have an account?{" "}
        <Link href="/login" className="text-zinc-900 font-semibold underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
