import React from "react";
import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setFoodId }) {
  const list = Array.isArray(foodData) ? foodData : [];

  if (list.length === 0) return <p style={{ padding: 12 }}>No recipes found.</p>;

  return (
    <div className={styles.foodList}>
      {list.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
