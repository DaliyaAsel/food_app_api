import { Link } from 'react-router-dom';

function Meal (props) {
  const {strMeal, strMealThumb, idMeal} = props;

  return(
    <div className="card">
       <img src={strMealThumb} alt={strMeal} />
       <h2>{strMeal}</h2>

       <div className="card-active">
         <Link to={`/meal/${idMeal}`}>Watch recipe</Link>
         
       </div>

    </div>
  )
}

export default Meal;