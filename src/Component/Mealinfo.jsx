import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setInfo] = useState()
    console.log(mealid);

    const getInfo = async () =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if(info != ""){
        getInfo()
    }
  return (
     <div>
        { !info ? "Data Not Found" : 
        <div className='mealInfo'> 
     <img src={info.strMealThumb}/>
     <div className='info'>
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Intruction's</h3>
        <p>{info.strInstructions}</p>
     </div>
    </div>
    }
     </div>
     
  )
}

export default Mealinfo


// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// const Mealinfo = () => {
//     const {mealid} = useParams();
//     const [info, setInfo] = useState(null)

//     useEffect(() => {
//         const getInfo = async () => {
//             const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
//             const jsonData = await get.json();
//             setInfo(jsonData.meals[0])
//         }
//         getInfo()
//     }, [mealid])

//   return (
//      <div>
//         { !info ? "Loading..." : 
//         <div className='mealInfo'> 
//             <img src={info.strMealThumb} alt={info.strMeal}/>
//             <div className='info'>
//                 <h1>Recipe Detail</h1>
//                 <button>{info.strMeal}</button>
//                 <h3>Intruction's</h3>
//                 <p>{info.strInstructions}</p>
//             </div>
//         </div>
//         }
//      </div>
//   )
// }

// export default Mealinfo



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Mealinfo = () => {
//   const { mealid } = useParams();
//   const [info, setInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getInfo = async () => {
//       try {
//         const response = await fetch(
//           `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
//         );
//         const data = await response.json();
//         setInfo(data.meals?.[0] || null);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     getInfo();
//   }, [mealid]);

//   if (loading) return <div className="loading">Loading...</div>;
//   if (!info) return <div className="error">Recipe not found!</div>;

//   return (
//     <div className="meal-info-container">
//       <div className="meal-info">
//         <img 
//           src={info.strMealThumb} 
//           alt={info.strMeal}
//           className="meal-image"
//         />
//         <div className="meal-details">
//           <h1>{info.strMeal}</h1>
//           <h2>Instructions</h2>
//           <p>{info.strInstructions}</p>
          
//           <h3>Ingredients</h3>
//           <ul className="ingredients-list">
//             {Array.from({ length: 20 }).map((_, i) => {
//               const ingredient = info[`strIngredient${i + 1}`];
//               const measure = info[`strMeasure${i + 1}`];
//               return ingredient ? (
//                 <li key={i}>
//                   {measure} {ingredient}
//                 </li>
//               ) : null;
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mealinfo;