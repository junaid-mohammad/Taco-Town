// Importing required modules
import express from "express"; // Web framework for creating the server
import bodyParser from "body-parser"; // Middleware for parsing request bodies

// Initializing an Express application
const app = express();
const port = process.env.PORT || 3000; // Port for the server to listen on

// Set the view engine to EJS
app.set('view engine', 'ejs');

// JSON data representing recipes
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse URL-encoded data in POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Parse the recipe JSON data into a JavaScript object
const recipeData = JSON.parse(recipeJSON);
let taco; // Variable to store the selected taco recipe

// Define the route for the root URL
app.get("/", (req, res) => {
  res.render("index.ejs"); // Render the index.ejs view
});

// Define the POST route for selecting a recipe based on protein choice
app.post("/recipe", (req, res) => {
  const protein = req.body["choice"]; // Get the protein choice from the request body

  // Find the appropriate recipe based on the protein choice
  if (protein === "chicken") {
    taco = recipeData.find(recipe => recipe.id === "0001");
  } else if (protein === "beef") {
    taco = recipeData.find(recipe => recipe.id === "0002");
  } else if (protein === "fish") {
    taco = recipeData.find(recipe => recipe.id === "0003");
  } else {
    console.log("No protein chosen."); // Log a message if no valid protein choice is made
  }

  // Extract relevant details from the selected recipe
  const recipeName = taco.name; // Recipe name
  const proteinName = taco.ingredients.protein.name; // Protein name
  const proteinPreparation = taco.ingredients.protein.preparation; // How the protein is prepared
  const salsaName = taco.ingredients.salsa.name; // Salsa name

  // Create an array of topping names and quantities
  const toppings = taco.ingredients.toppings.map(topping => ({
    name: topping.name,
    quantity: topping.quantity,
  }));

  // Render the index.ejs view, passing recipe details as variables
  res.render("index.ejs", {
    recipe: true, // Flag to indicate a recipe is selected
    recipeName: recipeName,
    proteinName: proteinName,
    proteinPreparation: proteinPreparation,
    salsaName: salsaName,
    toppings: toppings,
  });
});
 
// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
