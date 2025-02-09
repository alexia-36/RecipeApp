import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import List from "./List";
import Recipe from "./Recipe";
import getRecipefromAi from "../api";

export default function Content() {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  const liIngredients = ingredients.map((el) => <li key={el}>{el}</li>);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevValue) => [...prevValue, newIngredient]);
  }

  async function getRecipe() {
    const recipeText = await getRecipefromAi(ingredients);
    setRecipe(recipeText);
  }

  const recipeRef = useRef(null);

  useEffect(() => {
    if (recipe && recipeRef.current) {
      recipeRef.current.scrollIntoView({ behavior: "smooth" });
      console.log("refu");
    }
  }, [recipe]);

  return (
    <main className="containerComp">
      <Header />

      <List
        ingredients={ingredients}
        liIngredients={liIngredients}
        addIngredient={addIngredient}
        getRecipe={getRecipe}
        recipeRef={recipeRef}
      />
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
