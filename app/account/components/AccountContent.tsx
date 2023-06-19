"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, user } = useUser();


  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);
  return (
    <div className="mb-7 px-6">

    <div className="flex flex-col gap-y-4">
      <p>You are currently Logged in</p>
    </div>
    </div>
  );
};

export default AccountContent;
