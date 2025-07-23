"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [orderNum, setOrderNum] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderNum(parseInt(e.target.value));
  };
  const searchOrder = () => {
    router.push(`/search-order/${orderNum}`);
  };
  return (
    <div>
      <h1>Track Your Order</h1>
      <div>
        <label htmlFor="orderNum">Enter Your Order Number</label>
        <input
          type="number"
          id="orderNum"
          min={0}
          value={orderNum}
          onChange={handleChange}
        />
        <Button disabled={orderNum === 0} onClick={searchOrder}>
          Search
        </Button>
      </div>
      <p className="text-red-500">
        Please input 1 as the order number for demo
      </p>
    </div>
  );
};

export default page;
