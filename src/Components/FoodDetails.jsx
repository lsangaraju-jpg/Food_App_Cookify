import React, { useState, useEffect } from "react";
import styles from "./foodDetails.module.css";

const API_KEY = "1b7ba981b3e04e9b84eb26c26f48b6cb";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFood() {
      try {
        setIsLoading(true);
        setError("");

        const url = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) {
          setFood(null);
          setError(data?.message || "Failed to load recipe details.");
          return;
        }

        setFood(data);
      } catch (e) {
        setFood(null);
        setError("Network error. Could not load recipe details.");
      } finally {
        setIsLoading(false);
      }
    }

    if (foodId) fetchFood();
  }, [foodId]);

  if (isLoading) {
    return <p className={styles.loadingText}>Loading...</p>;
  }

  if (error) {
    return (
      <div className={styles.foodDetailsContainer}>
        <h2 style={{ color: "crimson" }}>{error}</h2>
        <p>
          If this says “not authorized”, your API key is invalid or you hit your
          daily quota.
        </p>
      </div>
    );
  }

  if (!food) return null;

  return (
    <div className={styles.foodDetailsContainer}>
      <h1 className={styles.foodTitle}>{food.title}</h1>

      {food.image && (
        <img className={styles.foodImage} src={food.image} alt={food.title} />
      )}

      <div className={styles.foodDetails}>
        <span>
          <strong>{food.readyInMinutes ?? "?"} Minutes</strong>
        </span>

        <span className={food.vegetarian ? styles.veg : styles.nonVeg}>
          <strong>{food.vegetarian ? "Vegetarian" : " Non-Vegetarian "}</strong>
        </span>

        <span>
          <strong>Serves {food.servings ?? "?"}</strong>
        </span>

        <span>
          <strong>{food.vegan ? " Vegan " : " Non-Vegan "}</strong>
        </span>

        {typeof food.pricePerServing === "number" && (
        <span>
          <strong>$ {(food.pricePerServing / 100).toFixed(2)} per serving</strong>
        </span>
        )}
      </div>

      <div className={styles.ingredientContainer}>
        <h2>Ingredients</h2>
        {food.extendedIngredients?.map((ingredient) => (
          <div className={styles.ingredientItem} key={ingredient.id}>
            {ingredient.image && (
              <img
                className={styles.ingredientImage}
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.name}
              />
            )}
            <span className={styles.ingredientName}>{ingredient.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.instructionContainer}>
        <h2>Instructions</h2>
        <ol className={styles.instructionList}>
          {(food.analyzedInstructions?.[0]?.steps ?? []).map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ol>

        {!food.analyzedInstructions?.[0]?.steps?.length && (
          <p>No step-by-step instructions available for this recipe.</p>
        )}
      </div>
    </div>
  );
}
