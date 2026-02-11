async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function ServerUsers() {
  const users = await getUsers();

  return (
    <div style={{ border: "2px solid green", padding: 10 }}>
      <h3>Server Component - Users (ISR 60s)</h3>
      <ul>
        {users.slice(0, 5).map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
