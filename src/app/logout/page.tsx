// app/logout/page.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Clear cookie
    router.push("/home"); // Redirect after logout
  }, [router]);

  return <p>Logging out...</p>;
}
