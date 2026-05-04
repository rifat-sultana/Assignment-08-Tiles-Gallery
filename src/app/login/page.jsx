"use client";

import { authClient } from "../../lib/auth-client"; 
import { IoLogoGoogle } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await authClient.signIn.email(
        {
          email: email,
          password: password,
        },
        {
          onSuccess: () => {
            toast.success("Logged in successfully!");
            router.push("/");
          },
          onError: (ctx) => {
            setError(ctx.error.message || "Invalid credentials ❌");
          },
        },
      );
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false)
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-87.5">
        <h2 className="text-2xl font-bold text-center mb-6"> Login </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border px-3 py-2 rounded focus:outline-blue-500"
             value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 w-full rounded mt-2 transition-all disabled:bg-gray-400"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="divider my-6 text-gray-400">OR</div>

        <button
          onClick={handleGoogleSignin}
          type="button"
          className="w-full cursor-pointer hover:bg-gray-100 font-bold text-center flex flex-row justify-center border shadow py-2 px-4 rounded items-center gap-3 transition-all"
        >
          <IoLogoGoogle className="text-lg text-red-500" />
          <span>Sign in with Google</span>
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <span
            className="text-blue-600 font-bold cursor-pointer hover:underline"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
