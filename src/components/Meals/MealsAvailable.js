import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./MealsAvailable.module.css";
import MealItem from "./MealItem/MealItem";

const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-917f1-default-rtdb.firebaseio.com/meals.json"
      );

        if (!response.ok) {
          throw new Error("Something went wrong !");
        }

      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };
      fetchMeals().catch (error => {
      setLoading(false);
      setHttpError(error.message);} )   
  }, []);
 

  const MeatList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));



  // if (loading) {
  //   return (
  //     <section className={classes.MealsLoading}>
  //       <p>loading ...</p>
  //     </section>
  //   );
  // }


  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MeatList}</ul>
        {loading && <section className={classes.MealsLoading}><p>loading ...</p></section>}
        {httpError && <section className={classes.error}><p>{httpError}</p></section>}
      </Card>
    </section>
  );
};

export default MealsAvailable;
