import React from "react";
import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  function handleViewRecipe() {
    setFoodId(food.id);
  }

  return (
    <div className={styles.foodItem}>
      <img
        src={food.image}
        alt={food.title || "Recipe"}
        className={styles.image}
      />

      <h3 className={styles.title}>{food.title || "Untitled recipe"}</h3>

      <button className={styles.button} onClick={handleViewRecipe}>
        View Recipe
      </button>
    </div>
  );
}
