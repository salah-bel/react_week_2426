// 1 - installation de react-router-dom

// 2 creation des routes avec createBrowserRouter

// 3 Router provider dans App
// import routing
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import ProductList from './components/products/Product.list'
import NewProduct from './components/products/New'
import RouteLayout from "./components/RouteLayout";
import Home from './components/Home'
import Contact from './components/Contact'
import Show from './components/products/Show'
function App() {

  const router = createBrowserRouter([
    {
      path:"/", element: <RouteLayout/>, //localhost:3000/
      children: [
        {path:"", element : <Home/>},
        {path:"contact", element : <Contact/>},
        {path:"products", element : <ProductList/>},
        {path:"new-product", element : <NewProduct/>},
        {path:"show/:id", element : <Show/>},
      ]
    }
  ]);
  

  return (   
    <RouterProvider router={router} />
   );
}

export default App;
