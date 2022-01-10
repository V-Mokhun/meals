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
          glutenFree: true,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 5,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 0,
          spoonacularScore: 58,
          healthScore: 19,
          creditsText: "Bon Appetit",
          sourceName: "Bon Appetit",
          pricePerServing: 157.59,
          extendedIngredients: [
            {
              id: 10031015,
              aisle: "Produce",
              image: "chili-peppers-green.jpg",
              consistency: "solid",
              name: "anaheim chile",
              nameClean: "anaheim pepper",
              original: "1 fresh Anaheim chile, seeded, cut into thin strips",
              originalString: "1 fresh Anaheim chile, seeded, cut into thin strips",
              originalName: "fresh Anaheim chile, seeded, cut into thin strips",
              amount: 1,
              unit: "",
              meta: ["fresh", "seeded", "cut into thin strips"],
              metaInformation: ["fresh", "seeded", "cut into thin strips"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 11165,
              aisle: "Produce;Spices and Seasonings",
              image: "cilantro.png",
              consistency: "solid",
              name: "cilantro",
              nameClean: "cilantro",
              original: "Chopped cilantro (for garnish)",
              originalString: "Chopped cilantro (for garnish)",
              originalName: "Chopped cilantro (for garnish)",
              amount: 2,
              unit: "servings",
              meta: ["chopped", "(for garnish)"],
              metaInformation: ["chopped", "(for garnish)"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
                metric: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
              },
            },
            {
              id: 1002014,
              aisle: "Spices and Seasonings",
              image: "ground-cumin.jpg",
              consistency: "solid",
              name: "cumin",
              nameClean: "cumin",
              original: "½ teaspoon cumin",
              originalString: "½ teaspoon cumin",
              originalName: "cumin",
              amount: 0.5,
              unit: "teaspoon",
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
              id: 11215,
              aisle: "Produce",
              image: "garlic.png",
              consistency: "solid",
              name: "garlic clove",
              nameClean: "garlic",
              original: "1 garlic clove, minced",
              originalString: "1 garlic clove, minced",
              originalName: "garlic clove, minced",
              amount: 1,
              unit: "",
              meta: ["minced"],
              metaInformation: ["minced"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 11979,
              aisle: "Canned and Jarred;Produce;Ethnic Foods",
              image: "jalapeno-pepper.png",
              consistency: "solid",
              name: "jalapeno",
              nameClean: "jalapeno pepper",
              original: "1 jalapeño, cut lengthwise, seeded, cut into thin strips",
              originalString: "1 jalapeño, cut lengthwise, seeded, cut into thin strips",
              originalName: "jalapeño, cut lengthwise, seeded, cut into thin strips",
              amount: 1,
              unit: "",
              meta: ["seeded", "cut into thin strips"],
              metaInformation: ["seeded", "cut into thin strips"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 1082047,
              aisle: "Spices and Seasonings",
              image: "salt.jpg",
              consistency: "solid",
              name: "kosher salt",
              nameClean: "kosher salt",
              original: "Kosher salt, freshly ground pepper",
              originalString: "Kosher salt, freshly ground pepper",
              originalName: "Kosher salt, freshly ground pepper",
              amount: 2,
              unit: "servings",
              meta: ["freshly ground"],
              metaInformation: ["freshly ground"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
                metric: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
              },
            },
            {
              id: 4053,
              aisle: "Oil, Vinegar, Salad Dressing",
              image: "olive-oil.jpg",
              consistency: "liquid",
              name: "olive oil",
              nameClean: "olive oil",
              original: "2 tablespoons olive oil",
              originalString: "2 tablespoons olive oil",
              originalName: "olive oil",
              amount: 2,
              unit: "tablespoons",
              meta: [],
              metaInformation: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
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
              original: "½ small onion, cut into thin strips (about 1 cup)",
              originalString: "½ small onion, cut into thin strips (about 1 cup)",
              originalName: "onion, cut into thin strips (about 1 cup)",
              amount: 0.5,
              unit: "small",
              meta: ["cut into thin strips ( 1 cup)"],
              metaInformation: ["cut into thin strips ( 1 cup)"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "small",
                  unitLong: "smalls",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "small",
                  unitLong: "smalls",
                },
              },
            },
            {
              id: 11821,
              aisle: "Produce",
              image: "red-pepper.jpg",
              consistency: "solid",
              name: "red bell pepper",
              nameClean: "red pepper",
              original: "1 red bell pepper, seeded, cut into thin strips",
              originalString: "1 red bell pepper, seeded, cut into thin strips",
              originalName: "red bell pepper, seeded, cut into thin strips",
              amount: 1,
              unit: "",
              meta: ["red", "seeded", "cut into thin strips"],
              metaInformation: ["red", "seeded", "cut into thin strips"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 20444,
              aisle: "Pasta and Rice",
              image: "uncooked-white-rice.png",
              consistency: "solid",
              name: "rice",
              nameClean: "rice",
              original: "Lime-Scented Rice (for serving)",
              originalString: "Lime-Scented Rice (for serving)",
              originalName: "Lime-Scented Rice (for serving)",
              amount: 2,
              unit: "servings",
              meta: ["(for serving)"],
              metaInformation: ["(for serving)"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
                metric: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
              },
            },
            {
              id: 15270,
              aisle: "Seafood",
              image: "shrimp.png",
              consistency: "solid",
              name: "shrimp",
              nameClean: "shrimp",
              original: "12 large shrimp, peeled, deveined",
              originalString: "12 large shrimp, peeled, deveined",
              originalName: "shrimp, peeled, deveined",
              amount: 12,
              unit: "large",
              meta: ["deveined", "peeled"],
              metaInformation: ["deveined", "peeled"],
              measures: {
                us: {
                  amount: 12,
                  unitShort: "large",
                  unitLong: "larges",
                },
                metric: {
                  amount: 12,
                  unitShort: "large",
                  unitLong: "larges",
                },
              },
            },
          ],
          id: 5354,
          title: "Pan-Roasted Sizzling Shrimp",
          readyInMinutes: 45,
          servings: 2,
          sourceUrl: "http://www.bonappetit.com/recipes/2006/02/pan_roasted_sizzling_shrimp",
          image: "https://spoonacular.com/recipeImages/5354-556x370.jpg",
          imageType: "jpg",
          summary:
            'Pan-Roasted Sizzling Shrimp is a <b>gluten free, dairy free, and pescatarian</b> recipe with 2 servings. One serving contains <b>207 calories</b>, <b>9g of protein</b>, and <b>15g of fat</b>. For <b>$1.6 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. A mixture of kosher salt, lime-scented rice, jalapeño, and a handful of other ingredients are all it takes to make this recipe so flavorful. Only a few people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/pan-roasted-sizzling-shrimp-6054">Pan-roasted Sizzling Shrimp</a>, <a href="https://spoonacular.com/recipes/sizzling-shrimp-stir-fry-10159">Sizzling Shrimp Stir-Fry</a>, and <a href="https://spoonacular.com/recipes/sizzling-shrimp-scampi-5466">Sizzling Shrimp Scampi</a> for similar recipes.',
          cuisines: [],
          dishTypes: ["side dish"],
          diets: ["gluten free", "dairy free", "pescatarian"],
          occasions: [],
          winePairing: {
            pairedWines: ["pinot grigio", "riesling", "sauvignon blanc"],
            pairingText:
              "Shrimp can be paired with Pinot Grigio, Riesling, and Sauvignon Blanc. These crisp white wines work well with shrimp prepared in a variety of ways, whether grilled, fried, or in garlic sauce. You could try Esperto Pinot Grigio. Reviewers quite like it with a 4.5 out of 5 star rating and a price of about 10 dollars per bottle.",
            productMatches: [
              {
                id: 440803,
                title: "Esperto Pinot Grigio",
                description:
                  "Brilliant straw color with reflections of gold. Crisp and clean with delicate nose of orange flower and wild rose with apricot, white peach and orange peel. Crisp, dry and well structured with golden apple and citrus.Wonderfully versatile. Excellent as an apertif and the perfect complement to light appetizers, salads, grilled chicken and fresh seafood. Enjoy well chilled.",
                price: "$9.99",
                imageUrl: "https://spoonacular.com/productImages/440803-312x231.jpg",
                averageRating: 0.9,
                ratingCount: 5,
                score: 0.8375,
                link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fesperto-pinot-grigio-2015%2F162288",
              },
            ],
          },
          instructions:
            "Heat oil in a wok or large skillet over high until almost smoking.Add shrimp and cook, stirring constantly, 3 minutes. Add onion, bell pepper, chile, and jalapeo and cook until shrimp are cooked through and peppers are slightly charred, about 3 more minutes.Add garlic and cumin; season with salt and pepper. Stir to combine.Remove from heat and garnish with cilantro. Serve over rice.",
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Heat oil in a wok or large skillet over high until almost smoking.",
                  ingredients: [
                    {
                      id: 4582,
                      name: "cooking oil",
                      localizedName: "cooking oil",
                      image: "vegetable-oil.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                    {
                      id: 404666,
                      name: "wok",
                      localizedName: "wok",
                      image: "wok.png",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Add shrimp and cook, stirring constantly, 3 minutes.",
                  ingredients: [
                    {
                      id: 15270,
                      name: "shrimp",
                      localizedName: "shrimp",
                      image: "shrimp.png",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 3,
                    unit: "minutes",
                  },
                },
                {
                  number: 3,
                  step: "Add onion, bell pepper, chile, and jalapeo and cook until shrimp are cooked through and peppers are slightly charred, about 3 more minutes.",
                  ingredients: [
                    {
                      id: 10211821,
                      name: "bell pepper",
                      localizedName: "bell pepper",
                      image: "bell-pepper-orange.png",
                    },
                    {
                      id: 10111333,
                      name: "peppers",
                      localizedName: "peppers",
                      image: "green-pepper.jpg",
                    },
                    {
                      id: 15270,
                      name: "shrimp",
                      localizedName: "shrimp",
                      image: "shrimp.png",
                    },
                    {
                      id: 11819,
                      name: "chili pepper",
                      localizedName: "chili pepper",
                      image: "red-chili.jpg",
                    },
                    {
                      id: 11282,
                      name: "onion",
                      localizedName: "onion",
                      image: "brown-onion.png",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 3,
                    unit: "minutes",
                  },
                },
                {
                  number: 4,
                  step: "Add garlic and cumin; season with salt and pepper. Stir to combine.",
                  ingredients: [
                    {
                      id: 1102047,
                      name: "salt and pepper",
                      localizedName: "salt and pepper",
                      image: "salt-and-pepper.jpg",
                    },
                    {
                      id: 11215,
                      name: "garlic",
                      localizedName: "garlic",
                      image: "garlic.png",
                    },
                    {
                      id: 1002014,
                      name: "cumin",
                      localizedName: "cumin",
                      image: "ground-cumin.jpg",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 5,
                  step: "Remove from heat and garnish with cilantro.",
                  ingredients: [
                    {
                      id: 11165,
                      name: "cilantro",
                      localizedName: "cilantro",
                      image: "cilantro.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 6,
                  step: "Serve over rice.",
                  ingredients: [
                    {
                      id: 20444,
                      name: "rice",
                      localizedName: "rice",
                      image: "uncooked-white-rice.png",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          originalId: null,
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
