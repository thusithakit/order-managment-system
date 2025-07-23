"use client";
import { Ingredients } from "@/app/data";
import { Ingredient, Item } from "@/app/utils/type";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ItemWithIngredients = {
  id: string;
  name: string;
  ingredients: Ingredient[];
};

const page = () => {
  const [items, setItems] = useState<Item[]>([
    { id: "", name: "", ingredients: [] },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "", name: "", quantity: 0 },
  ]);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3001/items");
      setItems(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchIngredients = async () => {
    try {
      const response = await axios.get("http://localhost:3001/ingredients");
      setIngredients(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const ingredientMap = Object.fromEntries(
    ingredients.map((ing) => [ing.id, ing])
  );
  const mappedItems = items.map((item) => ({
    ...items,
    ingredients: item.ingredients.map((id) => ingredientMap[id]),
  }));
  console.log("Mappeddddd", mappedItems);
  useEffect(() => {
    fetchItems();
    fetchIngredients;
  }, []);
  const remove = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:3001/items/${id}`);
      fetchItems();
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
        <h2 className="text-xl font-semibold mb-5">Manage Items</h2>
        <Button asChild>
          <Link href="/items/add">Add Item</Link>
        </Button>
      </div>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <div key={item.id} className="mb-2">
            <p>{item.name}</p>
            <div>
              <p>Ingredients</p>
              {item.ingredients.map((ingredient, index) => (
                <span key={index}>
                  {/* {fetchIngredients(ingredient)} */}
                  {ingredient}
                </span>
              ))}
            </div>
            <div className="flex gap-5">
              <Button variant="outline" asChild>
                <Link href={`/ingredients/update/${item.id}`}>Update Item</Link>
              </Button>
              <Button onClick={() => remove(item.id)}>Remove Item</Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
