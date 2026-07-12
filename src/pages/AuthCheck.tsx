import { useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/utils/auth";

interface AuthCheckProps {
  children: React.ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isAuthenticated()) {
      router.push("/");
    }
  }, [router]);

  return <>{props.children}</>;
};

export default AuthCheck;