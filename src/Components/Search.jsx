import React, { useState, useEffect } from "react";
import styles from "./search.module.css";

const API_KEY = "1b7ba981b3e04e9b84eb26c26f48b6cb";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pasta");
  const [error, setError] = useState("");

  const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    query
  )}&number=12&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchFood() {
      try {
        setError("");

        const res = await fetch(URL);
        const data = await res.json();

        if (!res.ok) {
          setFoodData([]);
          setError(data?.message || "Request failed.");
          return;
        }

        setFoodData(data?.results || []);
      } catch (e) {
        setFoodData([]);
        setError("Network error. Check your internet connection.");
      }
    }

    fetchFood();
  }, [URL, setFoodData]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
      />

      <button className={styles.searchButton} type="button">
        Search
      </button>

      <div className={styles.searchInfo}>
        Try searching for something like "pasta" or "salad"
      </div>

      {error && (
        <div style={{ marginTop: 10, color: "crimson", fontWeight: 600 }}>
          {error}
        </div>
      )}
    </div>
  );
}
