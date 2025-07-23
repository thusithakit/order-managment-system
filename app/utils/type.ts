export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
};

export type DeleteButtonProps = {
  id: number;
};

export type Item = {
  id: string;
  name: string;
  ingredients: string[];
};
