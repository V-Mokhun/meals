import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById, fetchSimilarMealsById } from "../api/meal";
import MealsItem from "../components/Meals/MealsItem";
import OneMeal from "../components/OneMeal/OneMeal";

const Meal = () => {
  const [meal, setMeal] = useState({});
  const [similarMeals, setSimilarMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const setMealData = async () => {
      setLoading(true);
      try {
        // const result = await fetchMealById(id);
        const mealResult = {
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: true,
          sustainable: false,
          weightWatcherSmartPoints: 23,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 17134,
          spoonacularScore: 88,
          healthScore: 18,
          creditsText: "Jen West",
          sourceName: "Pink When",
          pricePerServing: 205.53,
          extendedIngredients: [
            {
              id: 1002030,
              aisle: "Spices and Seasonings",
              image: "pepper.jpg",
              consistency: "solid",
              name: "black pepper",
              nameClean: "black pepper",
              original: "1 tsp black pepper",
              originalString: "1 tsp black pepper",
              originalName: "black pepper",
              amount: 1,
              unit: "tsp",
              meta: ["black"],
              metaInformation: ["black"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
            {
              id: 1001,
              aisle: "Milk, Eggs, Other Dairy",
              image: "butter-sliced.jpg",
              consistency: "solid",
              name: "butter",
              nameClean: "butter",
              original: "2/3 cup butter",
              originalString: "2/3 cup butter",
              originalName: "butter",
              amount: 0.6666666666666666,
              unit: "cup",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.667,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 157.725,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 11143,
              aisle: "Produce",
              image: "celery.jpg",
              consistency: "solid",
              name: "celery",
              nameClean: "celery",
              original: "1 cup chopped celery",
              originalString: "1 cup chopped celery",
              originalName: "chopped celery",
              amount: 1,
              unit: "cup",
              meta: ["chopped"],
              metaInformation: ["chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "cup",
                  unitLong: "cup",
                },
                metric: {
                  amount: 236.588,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 2007,
              aisle: "Spices and Seasonings",
              image: "celery-seed.jpg",
              consistency: "solid",
              name: "celery seed",
              nameClean: "celery seed",
              original: "1/2 tsp celery seed",
              originalString: "1/2 tsp celery seed",
              originalName: "celery seed",
              amount: 0.5,
              unit: "tsp",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 6194,
              aisle: "Canned and Jarred",
              image: "chicken-broth.png",
              consistency: "liquid",
              name: "chicken broth",
              nameClean: "chicken broth",
              original: "1 3/4 cups chicken broth",
              originalString: "1 3/4 cups chicken broth",
              originalName: "chicken broth",
              amount: 1.75,
              unit: "cups",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.75,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 414.029,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 20081,
              aisle: "Baking",
              image: "flour.png",
              consistency: "solid",
              name: "flour",
              nameClean: "wheat flour",
              original: "2/3 cups all-purpose flour",
              originalString: "2/3 cups all-purpose flour",
              originalName: "all-purpose flour",
              amount: 0.6666666666666666,
              unit: "cups",
              meta: ["all-purpose"],
              metaInformation: ["all-purpose"],
              measures: {
                us: {
                  amount: 0.667,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 157.725,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 1022020,
              aisle: "Spices and Seasonings",
              image: "garlic-powder.png",
              consistency: "solid",
              name: "garlic powder",
              nameClean: "garlic powder",
              original: "1/2 tsp garlic powder",
              originalString: "1/2 tsp garlic powder",
              originalName: "garlic powder",
              amount: 0.5,
              unit: "tsp",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 11052,
              aisle: "Produce",
              image: "green-beans-or-string-beans.jpg",
              consistency: "solid",
              name: "green beans",
              nameClean: "green beans",
              original: "2 (10oz) cans green beans",
              originalString: "2 (10oz) cans green beans",
              originalName: "green beans",
              amount: 20,
              unit: "oz",
              meta: ["canned"],
              metaInformation: ["canned"],
              measures: {
                us: {
                  amount: 20,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 566.99,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 1022027,
              aisle: "Spices and Seasonings",
              image: "dried-herbs.png",
              consistency: "solid",
              name: "italian seasoning",
              nameClean: "italian seasoning",
              original: "1/2 tsp Italian seasoning",
              originalString: "1/2 tsp Italian seasoning",
              originalName: "Italian seasoning",
              amount: 0.5,
              unit: "tsp",
              meta: ["italian"],
              metaInformation: ["italian"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 1077,
              aisle: "Milk, Eggs, Other Dairy",
              image: "milk.png",
              consistency: "liquid",
              name: "milk",
              nameClean: "milk",
              original: "1 1/3 cups milk",
              originalString: "1 1/3 cups milk",
              originalName: "milk",
              amount: 1.3333333333333333,
              unit: "cups",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1.333,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 315.451,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 11282,
              aisle: "Produce",
              image: "brown-onion.png",
              consistency: "solid",
              name: "onion",
              nameClean: "onion",
              original: "1/2 cup chopped onion",
              originalString: "1/2 cup chopped onion",
              originalName: "chopped onion",
              amount: 0.5,
              unit: "cup",
              meta: ["chopped"],
              metaInformation: ["chopped"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 2026,
              aisle: "Spices and Seasonings",
              image: "onion-powder.jpg",
              consistency: "solid",
              name: "onion powder",
              nameClean: "onion powder",
              original: "1/2 tsp onion powder",
              originalString: "1/2 tsp onion powder",
              originalName: "onion powder",
              amount: 0.5,
              unit: "tsp",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 11322,
              aisle: "Canned and Jarred;Frozen",
              image: "peas-and-carrots.jpg",
              consistency: "solid",
              name: "peas and carrots",
              nameClean: "peas and carrots",
              original: "2 (10oz) cans of mixed peas and carrots",
              originalString: "2 (10oz) cans of mixed peas and carrots",
              originalName: "mixed peas and carrots",
              amount: 20,
              unit: "oz",
              meta: ["mixed", "canned"],
              metaInformation: ["mixed", "canned"],
              measures: {
                us: {
                  amount: 20,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 566.99,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 18334,
              aisle: "Refrigerated;Frozen;Baking",
              image: "pie-crust.jpg",
              consistency: "solid",
              name: "pie crusts",
              nameClean: "pie dough rounds",
              original: "4 9″ pie crusts (not frozen)",
              originalString: "4 9″ pie crusts (not frozen)",
              originalName: "9″ pie crusts (not frozen)",
              amount: 4,
              unit: "",
              meta: ["frozen", "(not )"],
              metaInformation: ["frozen", "(not )"],
              measures: {
                us: {
                  amount: 4,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 4,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 2047,
              aisle: "Spices and Seasonings",
              image: "salt.jpg",
              consistency: "solid",
              name: "salt",
              nameClean: "salt",
              original: "1 tsp salt",
              originalString: "1 tsp salt",
              originalName: "salt",
              amount: 1,
              unit: "tsp",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
            {
              id: 5165,
              aisle: "Meat",
              image: "turkey-raw-whole.jpg",
              consistency: "solid",
              name: "turkey",
              nameClean: "whole turkey",
              original: "4 cups cooked Turkey",
              originalString: "4 cups cooked Turkey",
              originalName: "cooked Turkey",
              amount: 4,
              unit: "cups",
              meta: ["cooked"],
              metaInformation: ["cooked"],
              measures: {
                us: {
                  amount: 4,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 946.352,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 2032,
              aisle: "Spices and Seasonings",
              image: "white-pepper.png",
              consistency: "solid",
              name: "white pepper",
              nameClean: "white pepper",
              original: "1/2 tsp white pepper",
              originalString: "1/2 tsp white pepper",
              originalName: "white pepper",
              amount: 0.5,
              unit: "tsp",
              meta: ["white"],
              metaInformation: ["white"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
          ],
          id: 715467,
          title: "Turkey Pot Pie",
          readyInMinutes: 45,
          servings: 8,
          sourceUrl: "http://www.pinkwhen.com/turkey-pot-pie-recipe/",
          image: "https://spoonacular.com/recipeImages/715467-556x370.jpg",
          imageType: "jpg",
          summary:
            'Turkey Pot Pie might be just the main course you are searching for. This recipe makes 8 servings with <b>728 calories</b>, <b>23g of protein</b>, and <b>42g of fat</b> each. For <b>$2.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 17134 foodies and cooks. If you have celery seed, butter, flour, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is tremendous. Try <a href="https://spoonacular.com/recipes/instant-pot-chicken-pot-pie-soup-916463">Instant Pot Chicken Pot Pie Soup</a>, <a href="https://spoonacular.com/recipes/chicken-pot-pie-pockets-908274">Chicken Pot Pie Pockets</a>, and <a href="https://spoonacular.com/recipes/homemade-chicken-pot-pie-soup-922614">Homemade Chicken Pot Pie Soup</a> for similar recipes.',
          cuisines: [],
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          diets: [],
          occasions: [],
          winePairing: {},
          instructions:
            "Step 1: Preheat oven to 425 degrees. Melt the butter and add the celeryand onion to a medium pot and saute over medium heat for about 8 minutes.Step 2: Stir in 2/3 cup flour, salt and pepper, celery seed, onion powder, garlic powder, and Italian seasoning. Slowly whisk in the chicken broth and milk, stirring constantly until the the mixture begins to thicken and then simmer lightly until thickened. Remove from heat and mix with the drained vegetables and turkey.Step 3: Fill two pie crusts with your turkey and vegetable mixture. Carefully top each pie with another pie crust, pinching the sides together. Cut several small slits into the top of the pie crust to allow the pies to vent while cooking.Step 4: Bake uncovered in the preheated oven until the pies are golden brown, about 30 minutes. If the tops of the pies are browning too quickly, place a sheet of foil over the pie crusts and continue to bake. Cool for about 10 minutes before serving.This has to be one of the most delicious pot pie recipes I have ever tasted! What a great way to use up that leftover turkey. Another great substitution for turkey would also be to use a Rotisserie chicken. MMmmmm. I will be trying that soon.Have you ever tried a pot pie recipe? What about a Turkey Pot Pie Recipe? Make sure to save this one for those cold and snowy days ahead!JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow PinkWhen on Social Media, the PinkWhen blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First NameEmail AddressSubscribePowered by ConvertKit",
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Preheat oven to 425 degrees. Melt the butter and add the celeryand onion to a medium pot and saute over medium heat for about 8 minutes.Step 2: Stir in 2/3 cup flour, salt and pepper, celery seed, onion powder, garlic powder, and Italian seasoning. Slowly whisk in the chicken broth and milk, stirring constantly until the the mixture begins to thicken and then simmer lightly until thickened.",
                  ingredients: [
                    {
                      id: 1022027,
                      name: "italian seasoning",
                      localizedName: "italian seasoning",
                      image: "dried-herbs.png",
                    },
                    {
                      id: 1102047,
                      name: "salt and pepper",
                      localizedName: "salt and pepper",
                      image: "salt-and-pepper.jpg",
                    },
                    {
                      id: 6194,
                      name: "chicken broth",
                      localizedName: "chicken broth",
                      image: "chicken-broth.png",
                    },
                    {
                      id: 1022020,
                      name: "garlic powder",
                      localizedName: "garlic powder",
                      image: "garlic-powder.png",
                    },
                    {
                      id: 2026,
                      name: "onion powder",
                      localizedName: "onion powder",
                      image: "onion-powder.jpg",
                    },
                    {
                      id: 2007,
                      name: "celery seed",
                      localizedName: "celery seed",
                      image: "celery-seed.jpg",
                    },
                    {
                      id: 1001,
                      name: "butter",
                      localizedName: "butter",
                      image: "butter-sliced.jpg",
                    },
                    {
                      id: 20081,
                      name: "all purpose flour",
                      localizedName: "all purpose flour",
                      image: "flour.png",
                    },
                    {
                      id: 11282,
                      name: "onion",
                      localizedName: "onion",
                      image: "brown-onion.png",
                    },
                    {
                      id: 1077,
                      name: "milk",
                      localizedName: "milk",
                      image: "milk.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404661,
                      name: "whisk",
                      localizedName: "whisk",
                      image: "whisk.png",
                    },
                    {
                      id: 404784,
                      name: "oven",
                      localizedName: "oven",
                      image: "oven.jpg",
                    },
                    {
                      id: 404752,
                      name: "pot",
                      localizedName: "pot",
                      image: "stock-pot.jpg",
                    },
                  ],
                  length: {
                    number: 8,
                    unit: "minutes",
                  },
                },
                {
                  number: 2,
                  step: "Remove from heat and mix with the drained vegetables and turkey.Step 3: Fill two pie crusts with your turkey and vegetable mixture. Carefully top each pie with another pie crust, pinching the sides together.",
                  ingredients: [
                    {
                      id: 18334,
                      name: "pie crust",
                      localizedName: "pie crust",
                      image: "pie-crust.jpg",
                    },
                    {
                      id: 11583,
                      name: "vegetable",
                      localizedName: "vegetable",
                      image: "mixed-vegetables.png",
                    },
                    {
                      id: 5165,
                      name: "whole turkey",
                      localizedName: "whole turkey",
                      image: "turkey-raw-whole.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
            {
              name: "Cut several small slits into the top of the pie crust to allow the pies to vent while cooking.Step 4",
              steps: [
                {
                  number: 1,
                  step: "Bake uncovered in the preheated oven until the pies are golden brown, about 30 minutes. If the tops of the pies are browning too quickly, place a sheet of foil over the pie crusts and continue to bake. Cool for about 10 minutes before serving.This has to be one of the most delicious pot pie recipes I have ever tasted! What a great way to use up that leftover turkey. Another great substitution for turkey would also be to use a Rotisserie chicken. MMmmmm. I will be trying that soon.Have you ever tried a pot pie recipe? What about a Turkey Pot Pie Recipe? Make sure to save this one for those cold and snowy days ahead!JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow Pink",
                  ingredients: [
                    {
                      id: 99246,
                      name: "rotisserie chicken",
                      localizedName: "rotisserie chicken",
                      image: "rotisserie-chicken.png",
                    },
                    {
                      id: 5166,
                      name: "leftover turkey",
                      localizedName: "leftover turkey",
                      image: "cooked-turkey-meat.png",
                    },
                    {
                      id: 18334,
                      name: "pie crust",
                      localizedName: "pie crust",
                      image: "pie-crust.jpg",
                    },
                    {
                      id: 5165,
                      name: "whole turkey",
                      localizedName: "whole turkey",
                      image: "turkey-raw-whole.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404784,
                      name: "oven",
                      localizedName: "oven",
                      image: "oven.jpg",
                    },
                    {
                      id: 404765,
                      name: "aluminum foil",
                      localizedName: "aluminum foil",
                      image: "aluminum-foil.png",
                    },
                    {
                      id: 404752,
                      name: "pot",
                      localizedName: "pot",
                      image: "stock-pot.jpg",
                    },
                  ],
                  length: {
                    number: 40,
                    unit: "minutes",
                  },
                },
                {
                  number: 2,
                  step: "When on Social Media, the Pink",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 3,
                  step: "When blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First Name",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 4,
                  step: "Email",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 5,
                  step: "Address",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 6,
                  step: "Subscribe",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 7,
                  step: "Powered by Convert",
                  ingredients: [],
                  equipment: [],
                },
                {
                  number: 8,
                  step: "Kit",
                  ingredients: [],
                  equipment: [],
                },
              ],
            },
          ],
          originalId: null,
          spoonacularSourceUrl: "https://spoonacular.com/turkey-pot-pie-715467",
        };
        // const similarMealsResult = await fetchSimilarMealsById(id);

        // setSimilarMeals(similarMealsResult);
        setMeal(mealResult);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    if (id) {
      setMealData();
    }
  }, [id]);

  // eslint-disable-next-line no-nested-ternary
  return loading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CircularProgress
        style={{ width: "100%", height: "auto" }}
        sx={{ maxWidth: 400, maxHeight: 400 }}
      />
    </Box>
  ) : error ? (
    <Typography variant="h2" component="h2">
      {error}
    </Typography>
  ) : (
    <Container maxWidth="lg">
      <OneMeal meal={meal} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        {similarMeals.length > 0 &&
          similarMeals.map((similarMeal) => <MealsItem key={similarMeal.id} meal={similarMeal} />)}
      </Box>
    </Container>
  );
};

export default Meal;
