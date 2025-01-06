"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function MainPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}!</h1>
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={session?.user?.image || '/default-avatar.svg'}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex justify-end mb-6">
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center justify-center gap-3 px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
            >
              <LogoutIcon className="w-5 h-5" />
              Sign Out
            </button>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-700/30 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              <p className="text-gray-300">Name: {session?.user?.name}</p>
              <p className="text-gray-300">Email: {session?.user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Logout icon component
const LogoutIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
); 