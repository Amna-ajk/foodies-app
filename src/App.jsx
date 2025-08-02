// // // import logo from './logo.svg';
// // //  import'./App.css';
//  import { Route,Routes } from 'react-router-dom';
//   import Mealinfo from './Component/Mealinfo';

// import Mainpage from './Component/Mainpage';

// function App() {

// return(
  
// // {/* <Mainpage/> */}

// // <Routes>  
// //     <Mainpage/>
// //  <Route path='/' element={<Mainpage/>}/>
// //   <Route path='/:mealid' element={<Mealinfo/>}/>
// //  </Routes>
     
    
// );

// }
//  export default App;




// //  import logo from './logo.svg';
// // import './App.css';
// import Mainpage from './Component/Mainpage';
// import { Route,Routes } from 'react-router-dom';
// import Mealinfo from './Component/Mealinfo';
// // import Food from "./Components/Food"
// // import Recipe from './Components/Recipe';
 

// function App() { 
//   return (
     
//     <Mainpage/>
     
//     //  <Routes>
//     //       <Mainpage/>
//     //   <Route path='/' element={<Mainpage/>}/>
//     //   <Route path='/:mealid' element={<Mealinfo/>}/>
//     //  </Routes>
      
//   );
// }
 
// // export default App;

// import logo from './logo.svg';
// // import './App.css';
// import Mainpage from './Component/Mainpage';
// import { Route,Routes } from 'react-router-dom';
// import Mealinfo from './Component/Mealinfo';
// import Food from "./Component/Food"
// import Recipe from './Component/Recipe';
 

// function App() { 
//   return (
     
//     // <Mainpage/>
     
//      <Routes>
//       <Route path='/' element={<Food/>}/>
//       <Route path='/:mealid' element={<Recipe/>}/>
//      </Routes>
      
//   );
// }
 
// export default App;

// dseek

// import Mainpage from './Component/Mainpage';
// import Mealinfo from './Component/Mealinfo';
// import { Routes, Route } from 'react-router-dom';

// function App() { 
//   return (
//      <Routes>
//       <Route path='/' element={<Mainpage/>}/>
//       <Route path='/:mealid' element={<Mealinfo/>}/>
//      </Routes>
//   );
// }
 
// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Food from './Components/Food';
// import Recipe from './Components/Recipe';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Food />} />
//       <Route path="/:meal" element={<Recipe />} />
//     </Routes>
//   );
// }

// export default App;

//  import'./App.css'
// import Mainpage from './Component/Mainpage';
// import Mealinfo from './Component/Mealinfo';
// import {  Route, Routes } from 'react-router-dom';

// function App() { 
//   return (
//   // <Mainpage></Mainpage>
//      <Routes>
//       <Route path='/' element={<Mainpage/>}/>
//      <Route path='/:mealid' element={<Mealinfo/>}/>

//       </Routes>

      

//     // <BrowserRouter>
//     // <Mainpage></Mainpage>
//     /* </BrowserRouter> */
//   );
// }
 
// export default App;

import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Make sure this exists

function App() {
  return (
    <div className="app-wrapper">
      
      {/* Global Header */}
      <header className="app-header">
        <h1>Foodie 🥘🍽️🍜🍚🍔🥤🌯 🥙🍝🍕   🎂🍨🧁🍯🍩Finds</h1>
        <p>Discover delicious recipes from around the world!</p>
        
      </header>

      {/* Main Content */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/:mealid" element={<Mealinfo />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} FoodieFinds - Made with ❤️ love and fresh ingredients❄️💫🍽️ </p>
        <div className="social-links">
          {/* <a href="#">Instagram</a> | <a href="#">Twitter</a> */}
        </div>
      </footer>
    </div>
  );
}

export default App;