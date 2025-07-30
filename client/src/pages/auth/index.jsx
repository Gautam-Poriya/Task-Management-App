import SignIn from "@/components/auth/sign-in";
import React from "react";
import { useState } from "react";
import SignUp from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  return (
    <>
      <div className="flex flex-auto flex-col min-h-screen h-full">
        <div className="flex h-ful flex-col justify-center items-center bg-white">
          <h3 className="text-3xl font-bold">Welcome</h3>
          <div className="mt-4"></div>
          {isLoginView ? <SignIn /> : <SignUp />}
          <div className="mt-5">
            <CommonButton
              onClick={() => setIsLoginView(!isLoginView)}
              buttonText={
                isLoginView ? "Switch to Sign Up" : "Switch to Sign In"
              }
              type={"button"}
              diabled={false}
              className="mt-6 bg-black text-white font-extralight px-4 py-3 border-none rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
