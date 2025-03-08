# Recipe Contest Page

## Objective
Develop a responsive Recipes Page for an online recipe contest application, implementing key functionalities such as search, sorting, and filtering.

## Requirements

### 1. UI Development
- The page should closely match the provided UI design.
- Implement a responsive layout adaptable to various screen sizes (Laptop, Tablet, and Mobile).
- Tablet and Mobile screen designs are not provided, so create them based on UI best practices.

### 2. Functionalities
- **Search Recipes** based on:
  - Recipe Name
  - Chef Name
  - Description
- **Sorting Options:**
  - Upload Date (Newest & Oldest)
  - Average Rating (Highest & Lowest)
- **Filtering based on:**
  - **Attributes:** Contest Winner, Featured, Test Kitchen-Approved
  - **Meal Type:** Dinner, Lunch, Dessert, Breakfast
  - **Dish Type:** Curry, Pizza, Seafood, Soup, Mexican, Smoothie
- Users should be able to:
  - Clear all filters at once
  - Remove individual filters separately

## Data
Use hardcoded data to display the recipes. Example recipe object:

```json
{
  "name": "Spaghetti Carbonara",
  "chef": "Chef Mario",
  "totalRatings": 500,
  "avgRating": 4.8,
  "uploadedOn": "2024-01-15",
  "mealType": "Dinner",
  "dishType": "Pasta",
  "testKitchenApproved": true,
  "contestWinner": false,
  "featured": false,
  "description": "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
  "imgUrl": "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
}
```

Create at least 15–20 sample recipes for testing.

## Technical Expectations
- Use **React.js** for implementation.
- Follow a proper **folder structure** and component-based architecture (e.g., Recipe Card, Filter Sidebar, SearchBar).
- Use **React's useState/useEffect** for state management (Redux is not required).
- Use **Tailwind CSS** or standard CSS modules for styling.
- Ensure efficient handling of sorting & filtering using JavaScript.

## Evaluation Criteria
- **UI Accuracy:** How closely the UI matches the design.
- **Responsiveness:** Proper adaptation to different screen sizes.
- **Code Structure:** Clean, modular, and reusable components.
- **Functionality:** Correct implementation of search, sorting, and filtering.
- **User Experience:** Smooth interactions and intuitive filtering.

## Setup Instructions
### Prerequisites
- Node.js & npm/yarn installed
- Git installed

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/DevloperAkash007/recipe-contest-page.git
   ```
2. Navigate to the project folder:
   ```sh
   cd recipe-contest-page
   ```
3. Install dependencies:
   ```sh
   npm install   
   ```
4. Start the development server:
   ```sh
   npm start  
   ```
5. Open `http://localhost:3000` in the browser.

## Deployment
- Host the project on **Vercel** or **Netlify** (optional but recommended).

## Bonus Features
- **Lazy Loading** for images.
- **Smooth animations** for filtering, sorting, and search interactions.
- **Animated recipe cards** (e.g., fade-in or slide-up effect on appearance).

---

### License
This project is for assessment purposes only.

### Author
Akash
