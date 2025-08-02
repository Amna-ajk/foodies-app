// import React from 'react'

// const Mainpage = () => {

// return (
//     <>

// {/* <div>Mainpage</div> */}

// <div className='container'>
//     <div className='searchBar'>
//         <input type='text' placeholder='Enter Dish'/>
// <         button>Search</button>
// </div>
// <div>

// </div>
// </div>

// </>
// )

// }
// export default Mainpage




// import React, { useState } from 'react'
// import Mealcards from './Mealcards';

// const Mainpage = () => {
//     const [data,setData]  =useState();
//     const [search, setSearch] = useState("");
//     const [msg, setMsg] = useState("")

//     const handleInput = (event) =>{
//         setSearch(event.target.value)
//     }
//     const myFun = async () =>{
//         if(search == ""){
//             setMsg("Please Enter Something")
//         }else{
//             const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//             const jsonData = await get.json();
//         // console.log(jsonData.meals);
//         setData(jsonData.meals)
//         setMsg("")
        
//         }
         
//     }
    
//     // console.log(data);
//   return (
//     <>
//         <h1 className='head'>FOOD RECIPE APP</h1>
//         <div className='container'>
//             <div className='searchBar'>
//                 <input type='text' placeholder='Enter Dishe' onChange={handleInput}/>
//                 <button onClick={myFun}>Search</button>
//             </div>
//             <h4 className='msg'>{msg}</h4>
//             <div>
//             <Mealcards detail={data}/>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Mainpage



import React, { useState } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => setSearch(e.target.value);

  const myFun = async () => {
    if (!search.trim()) {
      setMsg("Please enter a dish name");
      return;
    }
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();
      setData(jsonData.meals || []);
      setMsg(jsonData.meals ? "" : "No recipes found. Try another dish!");
    } catch (error) {
      setMsg("Failed to fetch recipes. Try again later.");
    }
  };

  return (

    // <div className='fullpage-background'>
    <div className="app-container">

      <div className='fullpage-background'>
      {/* <header className="app-header">
        <h1 className="app-title">🍳 FoodieFinds</h1>
        <p className="app-subtitle">Discover delicious recipes from around the world!</p>
      </header> */}

      {/* <div className='fullpage-background'> */}

      <div className="search-container">
        <input
          type="text"
          placeholder="  Search for delicious recipes(e.g., Burger, Pasta, Sushi...)"
          value={search}
          onChange={handleInput}
          className="search-input"
          onKeyPress={(e) => e.key === 'Enter' && myFun()}
        />

        
        <button onClick={myFun} className="search-button">
          🔍 Search
        </button>

        {/* <div className='fullpage-background'> */}
      </div>
</div>
      {msg && <p className="message">{msg}</p>}

      <Mealcards detail={data} />
    </div>
    
  );
};

export default Mainpage;