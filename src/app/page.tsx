"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">

      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome to Anonymous Messaging
        </h1>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-semibold shadow-lg transition-all"
          onClick={() => router.push("/auth")}
        >
          Get Started 🚀
        </button>
      </div>
    </div>
  );
}