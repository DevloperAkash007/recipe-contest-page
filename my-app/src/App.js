import { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';


const data = [{
  id: 1,
  name: "Spaghetti Carbonara",
  chef: "Chef Mario", 
  totalRatings: 500, 
  avgRating: 4.8, 
  uploadedOn: "2024-01-15", 
  mealType: "Dinner", 
  dishType: "Pasta", 
  testKitchenApproved: true, 
  contestWinner: false, 
  featured: false, 
  description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
  imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
  },
  {
  id: 2,
  name: "Spaghetti Carbonara",
  chef: "Chef Mario", 
  totalRatings: 500, 
  avgRating: 4.8, 
  uploadedOn: "2024-01-15", 
  mealType: "Dinner", 
  dishType: "Pasta", 
  testKitchenApproved: true, 
  contestWinner: false, 
  featured: false, 
  description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
  imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    chef: "Chef Mario", 
    totalRatings: 500, 
    avgRating: 4.8, 
    uploadedOn: "2024-01-15", 
    mealType: "Dinner", 
    dishType: "Pasta", 
    testKitchenApproved: true, 
    contestWinner: false, 
    featured: false, 
    description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
    imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"  
  },
  {
    id: 4,
    name: "Spaghetti Carbonara",
    chef: "Chef Mario", 
    totalRatings: 500, 
    avgRating: 4.8, 
    uploadedOn: "2024-01-15", 
    mealType: "Dinner", 
    dishType: "Pasta", 
    testKitchenApproved: true, 
    contestWinner: false, 
    featured: false, 
    description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
    imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
    },
    {
      id: 5,
      name: "Spaghetti Carbonara",
      chef: "Chef Mario", 
      totalRatings: 500, 
      avgRating: 4.8, 
      uploadedOn: "2024-01-15", 
      mealType: "Dinner", 
      dishType: "Pasta", 
      testKitchenApproved: true, 
      contestWinner: false, 
      featured: false, 
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
      },
    {
      id: 6,
      name: "Spaghetti Carbonara",
      chef: "Chef Mario", 
      totalRatings: 500, 
      avgRating: 4.8, 
      uploadedOn: "2024-01-15", 
      mealType: "Dinner", 
      dishType: "Pasta", 
      testKitchenApproved: true, 
      contestWinner: false, 
      featured: false, 
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
  },
  {
    id: 7,
    name: "Spaghetti Carbonara",
    chef: "Chef Mario", 
    totalRatings: 500, 
    avgRating: 4.8, 
    uploadedOn: "2024-01-15", 
    mealType: "Dinner", 
    dishType: "Pasta", 
    testKitchenApproved: true, 
    contestWinner: false, 
    featured: false, 
    description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
    imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
    },
              {
                id: 8,
                name: "Spaghetti Carbonara",
                chef: "Chef Mario", 
                totalRatings: 500, 
                avgRating: 4.8, 
                uploadedOn: "2024-01-15", 
                mealType: "Dinner", 
                dishType: "Pasta", 
                testKitchenApproved: true, 
                contestWinner: false, 
                featured: false, 
                description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                },
                {
                  id: 9,
                  name: "Spaghetti Carbonara",
                  chef: "Chef Mario", 
                  totalRatings: 500, 
                  avgRating: 4.8, 
                  uploadedOn: "2024-01-15", 
                  mealType: "Dinner", 
                  dishType: "Pasta", 
                  testKitchenApproved: true, 
                  contestWinner: false, 
                  featured: false, 
                  description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                  imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                  },
                  {
                    id: 10,
                    name: "Spaghetti Carbonara",
                    chef: "Chef Mario", 
                    totalRatings: 500, 
                    avgRating: 4.8, 
                    uploadedOn: "2024-01-15", 
                    mealType: "Dinner", 
                    dishType: "Pasta", 
                    testKitchenApproved: true, 
                    contestWinner: false, 
                    featured: false, 
                    description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                    imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                    },
                    {
                      id: 11,
                      name: "Spaghetti Carbonara",
                      chef: "Chef Mario", 
                      totalRatings: 500, 
                      avgRating: 4.8, 
                      uploadedOn: "2024-01-15", 
                      mealType: "Dinner", 
                      dishType: "Pasta", 
                      testKitchenApproved: true, 
                      contestWinner: false, 
                      featured: false, 
                      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                      },
                      {
                        id: 12,
                        name: "Spaghetti Carbonara",
                        chef: "Chef Mario", 
                        totalRatings: 500, 
                        avgRating: 4.8, 
                        uploadedOn: "2024-01-15", 
                        mealType: "Dinner", 
                        dishType: "Pasta", 
                        testKitchenApproved: true, 
                        contestWinner: false, 
                        featured: false, 
                        description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                        imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                        },
                        {
                          id: 13,
                          name: "Spaghetti Carbonara",
                          chef: "Chef Mario", 
                          totalRatings: 500, 
                          avgRating: 4.8, 
                          uploadedOn: "2024-01-15", 
                          mealType: "Dinner", 
                          dishType: "Pasta", 
                          testKitchenApproved: true, 
                          contestWinner: false, 
                          featured: false, 
                          description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                          imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                          },
                          {
                            id: 14,
                            name: "Spaghetti Carbonara",
                            chef: "Chef Mario", 
                            totalRatings: 500, 
                            avgRating: 4.8, 
                            uploadedOn: "2024-01-15", 
                            mealType: "Dinner", 
                            dishType: "Pasta", 
                            testKitchenApproved: true, 
                            contestWinner: false, 
                            featured: false, 
                            description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                            imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                            },
                            {
                              id: 15,
                              name: "Spaghetti Carbonara",
                              chef: "Chef Mario", 
                              totalRatings: 500, 
                              avgRating: 4.8, 
                              uploadedOn: "2024-01-15", 
                              mealType: "Dinner", 
                              dishType: "Pasta", 
                              testKitchenApproved: true, 
                              contestWinner: false, 
                              featured: false, 
                              description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.", 
                              imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
                              },
                            ]
class App extends Component {

  

  render(){
    return <div className='background-container'> 
      <h1>Heaven and Earth are
      between each other</h1>
      <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut sagittis. Etiam arcu turpis, elementum ac nulla vel, tristique cursus libero. Fusce feugiat, justo at mattis tincidunt, velit ante congue ante, et lacinia metus ipsum a risus.
         Vivamus hendrerit porta libero nec imperdiet. Praesent interdum nisl nec facilisis dapibus.</p>

        <h1>Special selection<br/>
        From Our Menu</h1>
        <RecipeList recipelist={data}/>
      </div>
  }
}

export default App;
