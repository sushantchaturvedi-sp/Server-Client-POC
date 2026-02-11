import { Suspense } from "react";
import ServerUsers from "./components/ServerUsers";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";

async function getMessage() {
  return "Hola from Server Page!";
}

export default async function Home() {
  const message = await getMessage();

  return (
    <main style={{ padding: 20 }}>
      <h1>Next.js Complete POC</h1>

      <h2>Login (Server Action)</h2>
      <LoginForm />

      <hr />

      <Suspense fallback={<p>Loading Users...</p>}>
        <ServerUsers />
      </Suspense>

      <hr />

      <Counter message={message} />
    </main>
  );
}
