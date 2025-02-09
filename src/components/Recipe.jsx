import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <div className="containerRecipe">
      <h3 className="recipeTitle">Here is the recipe from Chef Loco</h3>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
}
