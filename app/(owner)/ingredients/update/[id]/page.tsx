"use client";
import { Ingredient } from "@/app/utils/type";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchIngredient(): Promise<Ingredient> {
      const response = await axios.get(
        `http://localhost:3001/ingredients/${id}`
      );
      setIngredientData(response.data);
      return response.data;
    }
    fetchIngredient();
  }, [id]);

  const [ingredientData, setIngredientData] = useState<Ingredient>({
    id: "",
    name: "",
    quantity: 0,
  });
  const editIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredientData({ ...ingredientData, [name]: value });
    console.log(e.target.value);
  };
  const update = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/ingredients/${id}`,
        ingredientData
      );
      console.log(response.data);
      router.push("..");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Update {ingredientData?.name}</h1>
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
            min={0}
            value={ingredientData?.quantity}
            name="quantity"
            onChange={editIngredient}
          />
        </div>
        <Button onClick={update}>Update Ingredient</Button>
      </div>
    </div>
  );
};

export default page;
