import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[70dvh]">
      <h1 className="mb-5 font-extrabold text-2xl">Dashboard</h1>
      <div className="flex gap-10 flex-wrap">
        <Button variant="outline" asChild>
          <Link href={"/ingredients"}>Manage Ingredients</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={"/items"}>Manage Items</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
