
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../../api';
import Preloader from '../../components/preloader/Preloader';
import './Recipe.css';


function Recipe () {
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});
  const {goBack} = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]))
  }, [id])


  return(
    <div className="wrap">
       {
         !recipe.idMeal ? <Preloader /> : (
           <div className="recipe">
             <img src={recipe.strMealThumb} alt={recipe.strMeal} />
             <h1>{recipe.strMeal}</h1>
             <div>Category: <h5>{recipe.strCategory}</h5></div>
             {
                recipe.strArea ? <div>Area: <h5>{recipe.strArea}</h5></div> :null
             }
             <p>{recipe.strInstructions}</p>

             <table className="table">
               <thead>
                 <tr>
                   <th>Ingredient</th>
                   <th>Measure</th>
                 </tr>
               </thead>

               <tbody>
                 {
                   Object.keys(recipe).map( key => {
                     if(key.includes('Ingredient') && recipe[key]){
                       return(
                         <tr key={key}>
                           <td>{recipe[key]}</td>
                           <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                         </tr>
                       )
                     }

                   })
                 }
               </tbody>
             </table>
             {
               recipe.strYoutube ? (
                 <div>
                    <h4>Video Recipe</h4>
                     <div className="video-wrap">
                       {/* -11 чтобы отчет шел с конца */}
                     <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
                     </div>
                 </div>
               ) : null
             }
           </div>
         )
       }
       <button className="btn" onClick={goBack}>Go Back</button>
    </div>
  )
}

export default Recipe;