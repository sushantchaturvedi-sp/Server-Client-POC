import { loginAction } from "../actions";

export default function LoginForm() {
  return (
    <form action={loginAction}>
      <input name="username" placeholder="Enter username" />
      <button type="submit">Login</button>
    </form>
  );
}
