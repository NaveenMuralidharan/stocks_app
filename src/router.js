import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App"
import Main from "./pages/main"
import Stocks from "./pages/stocks"
import Price from "./pages/price"
import About from "./pages/about"
import { priceLoader } from "./loader";

const router = createBrowserRouter( 

    createRoutesFromElements(


        <Route path = "/" element={ <App/> }>
            <Route path = "" element = { < Main />} />
            <Route path = "about" element = { < About />} />
            <Route path = "stocks" element = { < Stocks />} />
            <Route path = "stock/:symbol" element = { < Price />} loader = {priceLoader}/>

        </Route> 
    )

)

export default router