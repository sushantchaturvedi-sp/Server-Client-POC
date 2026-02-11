"use client";

import { useState } from "react";

export default function Counter({ message }: { message: string }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "2px solid blue", padding: 10 }}>
      <h3>Client Component</h3>
      <p>{message}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
