import { useState, useEffect } from 'react';
import {getAllCategories} from '../../api';
import Preloader from '../../components/preloader/Preloader';
import CategoryList from '../../components/categoryList/CategoryList';

function Home () {
 const [catalog, setCatalog] = useState([]);
 
 useEffect( () =>{
  getAllCategories().then(data => {
    setCatalog(data.categories);
  });
 }, [] )
  
  return (
    <div className="wrap">
      {
         !catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />
      }

    </div>
  )
}

export default Home;