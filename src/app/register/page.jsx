"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client"; // পাথ ঠিক আছে তো?
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import defaultValue from './../../../postcss.config';

export default function RegisterPage() {

  const [name, setName] = useState("Rifat");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  const [photoUrl, setPhotoUrl] = useState("https://pixabay.com/photo.jpg");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

 
  const handleRegister = async () => {
    setLoading(true);
    
    try {
      await authClient.signUp.email({
        email: email,       
        password: password, 
        name: name,         
        image: photoUrl,  
      }, {
        onSuccess: () => {
          toast.success("Success! Redirecting to login...");
       
          router.push("/login"); 
        },
        onError: (ctx) => {
          alert(ctx.error.message || "Registration failed!");
        }
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px] text-black">
        <h2 className="text-2xl font-bold text-center mb-6">Register Now</h2>
        
        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input 
              type="text" 
              className="w-full border px-3 py-2 rounded"
              defaultValue={"Rifat"}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border px-3 py-2 rounded"
             defaultValue={"test@gmail.com"}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label className="block text-sm font-semibold mb-1">Photo URL</label>
            <input 
              type="text" 
              className="w-full border px-3 py-2 rounded"
              defaultValue={"https://pixabay.com/photo.jpg"}
              onChange={(e) => setPhotoUrl(e.target.value)} 
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border px-3 py-2 rounded"
              defaultValue={"123456789"}
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