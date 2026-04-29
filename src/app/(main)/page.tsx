"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

function HomePage() {
  useEffect(() => {
    redirect("/dashboard");
  }, []);
  return null;
}
export default HomePage;
