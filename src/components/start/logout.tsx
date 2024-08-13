// src/components/Logout.js

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/logoutfunction";

function Logout() {
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push("/"); // Redirect to the login page
  }, [router]);

  return null;
}

export default Logout;
