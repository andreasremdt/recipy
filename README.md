# Recipy

> Food and recipe management

## TODO / Ideas / Scope

**Other pages**

- leckerschmecker.me
- tasty.co
- foodboom.de

**Menu**

- My Recipes (list)
- Create a new recipe
- Grocery bag
- Food and grocery index
  - List of all food types with info about nutritions and other
- Settings
  - Household items (salt, pepper, etc.)
  - Measurement system
  - Language / localization switch

**Search**

- Search for recipes by:
  - Dish style (one pot, meal prep, etc.)
  - Cuisine (American, European, etc.)
  - Diet (vegan, vegetarian, etc.)
  - Meal type (dessert, lunch, etc.)
  - Favorited recipes, stars?
  - Difficulty
  - Ingredient

**Pages**

- My Recipes
  - List of all recipes in my list, with thumbnails and title
  - Can be filtered through the search
  - Can be ordered by name, date added and number of stars
  - The most recent are on top
- View a single recipe
  - See the whole recipe with ingredients etc.
  - If available, play a video or show an image
  - Add groceries / items to grocery bag
  - Like / rate recipe
  - See a step-by-step guide or all steps as a list
  - Buttons to delete / edit the recipe
  - Links to individual ingredients with further information
  - If imported, links to original website
- Create a new recipe
  - A form to fill out all the data and upload images / videos
  - An "Import from..." button to import data from Tasty and others
  - Ingredients could be imported from a database
  - Media manager for image and video upload
- Grocery bag
  - Acts as a shopping list and holds items from a recipe
  - Ingredients can be entered manually, with suggestions (links to food index)
  - A button to manage the household, opens settings page
  - Items can be marked as checked or removed or edited
  - Items are grouped, e.g. 100g chicken and 50g chicken are grouped to 150g chicken
  - Items can be dragged around to change their order
  - Ideally persisted in localStorage
- Food index
  - A list of as many foods (fruits, vegetables, etc.) as possible
  - Can be searched and filtered
  - Links to a detailled page with more information (source?)
- Settings
  - Manages the available household items
  - Manages the measurement system, such as cups or litres

**Recipe data**

- Title
- Description
- Ingredients (including sub-categories)
- Cooking steps
- Image (also thumbnail)
- Video
- Serving size (8 servings)
- Cuisine
- Meal type
- Tags (diet, dish style, etc.)
- Nutrition info
- Difficulty
- Prep time (preparation + cooking + baking)
