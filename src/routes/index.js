import Home from "../views/Home"
import Store from "../views/Store"
import ShopingCart from "../views/ShopingCart"
const routes = [
    {
        elements: ()=> <Home/>,
        path:"/"
    },
    {
        elements: ()=> <Store/>,
        path:"/store"
    },
    {
        elements: ()=> <ShopingCart/>,
        path:"/shopingCart"
    }
]

export default routes