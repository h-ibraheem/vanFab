import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Hello from Dashboard !</h1>
      <Outlet />
    </>
  );
}
