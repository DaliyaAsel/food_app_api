// 3 запроса к api здесь будут
import { API_URL } from './config';

//запрос к одному методу api
  const  getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php'); //к API_URL добавили хвост
  return await response.json(); //преобразовали полученный обьект json в обьект js
}

const  getMealById = async (idMeal) => { //idMeal может называться как угодно это id продукта, который все время будет меняться
  const response = await fetch(API_URL + 'lookup.php?i=' + idMeal ); //к API_URL добавили хвост
  return await response.json(); //преобразовали полученный обьект json в обьект js
}

const  getFilterByCategory = async (catName) => { //catName может называться как угодно это catName это имя категории
  const response = await fetch(API_URL + 'filter.php?c=' + catName ); //к API_URL добавили хвост
  return await response.json(); //преобразовали полученный обьект json в обьект js
}

export { getAllCategories, getMealById, getFilterByCategory} 
