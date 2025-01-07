"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function LoginButton() {
  const { data: session } = useSession();
  return (
    <div className="w-full max-w-md mx-auto">
      {session ? (
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            Welcome, <span className="font-semibold">{session.user?.name}</span>!
          </p>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
          >
            <LogoutIcon className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
        >
          <GoogleIcon className="w-5 h-5" />
          Sign in with Google
        </button>
      )}
    </div>
  );
}
// Google icon component
const GoogleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
    />
  </svg>
);
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
