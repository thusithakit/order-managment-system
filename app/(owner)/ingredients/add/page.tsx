"use client";

import { Ingredient } from "@/app/utils/type";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const page = () => {
  const router = useRouter();
  const [ingredientData, setIngredientData] = useState<Ingredient>({
    id: uuidv4(),
    name: "",
    quantity: 0,
  });
  const editIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredientData({ ...ingredientData, [name]: value });
    console.log(e.target.value);
  };
  const addIngredient = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/ingredients",
        ingredientData
      );
      console.log(response.data);
      router.push("/ingredients");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Add Ingredient to inventory</h1>
      <div>
        <div className="flex gap-10">
          <label htmlFor="name">Ingredient Name</label>
          <input
            type="text"
            value={ingredientData?.name}
            name="name"
            onChange={editIngredient}
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="name">Ingredient Quantity</label>
          <input
            type="number"
            min={1}
            value={ingredientData?.quantity}
            name="quantity"
            onChange={editIngredient}
          />
        </div>
        <Button onClick={addIngredient}>Add Ingredient</Button>
      </div>
    </div>
  );
};

export default page;
