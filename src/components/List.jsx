export default function List(props) {
  return (
    <div className="containerFormList">
      <form action={props.addIngredient}>
        <input type="text" placeholder="ex mango" name="ingredient" />
        <button>Add Ingredient</button>
      </form>
      <div className="containerList">
        {props.ingredients.length > 0 && (
          <h3>The list contains the following ingredients:</h3>
        )}
        <ul>{props.liIngredients}</ul>
        {props.ingredients.length >= 3 && (
          <button ref={props.recipeRef} onClick={props.getRecipe}>
            generate recipe
          </button>
        )}
      </div>
    </div>
  );
}
