import React from "react";

import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
    return <React.Fragment>
        <MealsSummary />
        <MealsAvailable />
    </React.Fragment>
}

export default Meals;