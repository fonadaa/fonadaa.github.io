'use client'

import { useSession } from "next-auth/react";

export default function DashboardPage() {
 const { data: session, status } = useSession();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white	">Welcome to your Dashboard</h1>
      <p className=" text-white">Welcome, {session?.user?.name}!</p>
    </div>
  )
}

