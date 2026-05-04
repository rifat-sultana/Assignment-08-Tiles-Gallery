"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client"; 
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("Rifat");
  const [email, setEmail] = useState("test@gmail.com");
  
  // 1. MARK: Password default state obosshoi 8 character-er beshi rakhen
  const [password, setPassword] = useState("12345678"); 
  
  const [photoUrl, setPhotoUrl] = useState("https://www.vecteezy.com/free-photos/cute-girl-face");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);

    const { data, error } = await authClient.signUp.email(
      {
        email, 
        password, 
        name, 
        photoUrl, 
        callbackURL: "/", 
      },
      {
        onSuccess: (ctx) => {
          toast.success("Registration Successful! Redirecting to login...");
          router.push("/login");
        },
        onError: (ctx) => {
          // 2. MARK: Console log-ti thakuk jate error details dekha jay
          console.log("Error details:", ctx.error);
          
          // 3. MARK: Optional Chaining (?.) bebohar korun jate error undefined na hoy
          alert(ctx.error?.message || "Registration failed. Check your connection.");
          
          // 4. MARK: window.location.reload() bad diyechi jate error pora jay
          setLoading(false); 
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px] text-black">
        <h2 className="text-2xl font-bold text-center mb-6">Register Now</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={name} // 5. MARK: defaultValue-er poriborte value bebohar kora safe
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Photo URL</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="bg-blue-600 text-white font-bold py-2 w-full rounded mt-4 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Processing..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}