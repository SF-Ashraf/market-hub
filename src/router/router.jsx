import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ProductsPage from "../pages/ProductsPage"
import ContactPage from "../pages/ContactPage"
import ProductDetails from "../pages/ProductDetails"

 

const router = createBrowserRouter([
    {
        path: "/" , element: <MainLayout /> , children: [
            {path: "/" , element: <HomePage/> },
            {path: "/about" , element: <AboutPage />},
            {path: "/products" , element: <ProductsPage />},
            {path: "/contact" , element : <ContactPage />},
            {path: "/product-details" , element: <ProductDetails />},
        ]
            
    }
                
])

export default router