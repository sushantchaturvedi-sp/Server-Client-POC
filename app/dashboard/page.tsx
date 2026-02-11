import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (!token) {
    redirect("/");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard (Protected)</h1>
      <p>Yay! You are logged in!</p>
    </div>
  );
}
