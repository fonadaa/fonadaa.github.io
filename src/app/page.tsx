"use client";

import LoginButton from "./auth/LoginButton";
import { signIn } from "next-auth/react";
import { Orbitron } from "next/font/google";
import styles from './typing.module.css';

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="max-w-2xl w-full space-y-8 p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <h1 className={`${orbitron.className} text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600`}>
            Welcome to GenAI
          </h1>
          <h2 className="text-2xl text-gray-300">Fonada</h2>
          <p className={`${styles.typingAnimation} text-gray-400 max-w-md mx-auto`}>
         Experience the next generation of AI-powered voice solutions 
          </p>
        </div>

        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <LoginButton />
          
          <button
            onClick={() => signIn("facebook")}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            <FacebookIcon className="w-5 h-5" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </main>
  );
}

// Facebook icon component
const FacebookIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    />
  </svg>
);
