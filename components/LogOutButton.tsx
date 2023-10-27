import { useRouter } from "next/router";
import { isUserLoggedIn, logOut } from "../lib/auth";

export function LogOutButton() {
  const router = useRouter();

  function logOutUX() {
    logOut();
    router.push("/");
  }
  if (typeof window !== "undefined" && !isUserLoggedIn()) return <></>;
  return (
    <button className="bg-green-500" onClick={logOutUX}>
      Log Out
    </button>
  );
}
