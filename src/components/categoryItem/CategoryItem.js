import { Link } from 'react-router-dom';
import './CategoryItem.css';

function CategoryItem(props) {
  const {strCategory, strCategoryThumb, strCategoryDescription} = props;


  return (
    <div className="card">
      <img src={strCategoryThumb} alt={strCategory} />
      <h2>{strCategory}</h2>
      {/* чтобы определенное кол-во текста выводилось в карточке */}
      <p>{strCategoryDescription.slice(0, 80)}...</p>


     <div className="card-active">
       <Link to={`/category/${strCategory}`} > Watch category </Link>
     </div>
    </div>
  )
}

export default CategoryItem;