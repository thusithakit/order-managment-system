"use client";
import { Ingredient } from "@/app/utils/type";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchIngredients = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3001/ingredients");
      setIngredients(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchIngredients();
  }, []);
  const remove = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/ingredients/${id}`
      );
      fetchIngredients();
      console.log("response", response.data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-5">Manage Ingredients</h2>
        <Button asChild>
          <Link href="/ingredients/add">Add Ingredient</Link>
        </Button>
      </div>
      {ingredients &&
        ingredients.length > 0 &&
        ingredients.map((ingredient) => (
          <div key={ingredient.id} className="mb-2">
            <p>{ingredient.name}</p>
            <p>Available Quantity: {ingredient.quantity}</p>
            <div className="flex gap-5">
              <Button variant="outline" asChild>
                <Link href={`/ingredients/update/${ingredient.id}`}>
                  Update
                </Link>
              </Button>
              <Button onClick={() => remove(ingredient.id)}>
                Remove Ingredient
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
