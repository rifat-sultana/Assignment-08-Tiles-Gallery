"use client";

import { authClient } from "../../lib/auth-client";
import { IoLogoGoogle } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@gmail.com" && password === "123456") {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  const handleGoogleSignin = async () => {
    // await authClient.signIn.social({
    //   provider: "google",
    // });

    await authClient.signIn.social({
    provider: "google",
    callbackURL: "/", // Where to go after success
    }, {
      onSuccess: () => {
        // Better Auth manages the session! 
        // No need for localStorage.setItem
        router.push("/");
      },
      onError: (ctx) => {
        setError(ctx.error.message);
      }
    });
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      {/* Box */}
      <div className="bg-white p-8 rounded-lg shadow-md w-350px">

        <h2 className="text-2xl font-bold text-center mb-6"> Login </h2>

        <form onClick={handleLogin}>

          {/* Email */}

          <div className="relative">

            <label className="absolute left-3 top-1 text-xs text-gray-500">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email "
              className="w-full border px-3 pt-5 pb-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="bg-white cursor-pointer hover:bg-gray-300  text-black font-bold py-2 w-full border rounded mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center font-semibold text-2xl mt-3" > OR </p>

        <button onClick={handleGoogleSignin} className="w-full cursor-pointer hover:bg-gray-300 font-bold mt-4 text-center flex flex-row justify-center border shadow py-2 px-4 rounded items-center gap-3">
          <IoLogoGoogle className="text-lg" /> <span className="text-center ">Sign in with Google</span>
        </button>



        {/* Google Login
        <button
          className="w-full font-bold mt-4 border shadow py-2 rounded"
          onClick={() => {
            const userData = { email: "google_user@gmail.com" };
            localStorage.setItem("user", JSON.stringify(userData));
            router.push("/");
          }}
        >
          Login with Google
        </button> */}

        {/* Register
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p> */}

      </div>
    </div>
  );
}