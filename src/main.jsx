// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
//  import { BrowserRouter } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <Browserrouter>

//   <StrictMode>
//     <App />
//   </StrictMode>
//    </Browserrouter> 
  
  
// )







// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import { BrowserRouter } from 'react-router-dom'
// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom';
//  import './index.css'
// import App from './App.jsx'

// const root =ReactDOM.createRoot(document.getElementById('root'))
// root.render(

//     <BrowserRouter>
//       <React.StrictMode>
        
//       <App />
//       </React.StrictMode>
//     </BrowserRouter>
  
// );



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>
  </BrowserRouter>
)