import LoginButton from "./auth/LoginButton";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to Next.js</h1>
      <LoginButton />
    </main>
  );
}
