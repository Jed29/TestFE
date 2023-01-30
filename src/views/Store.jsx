import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../store/features/storeSlices';
import { useNavigate } from 'react-router';
import { setShopingCart } from '../store/features/shopingcartSlices';
export default function Store() {
    let dataUser = useSelector((state)=> state?.DataUser.datauser)
    console.log(dataUser,"dataUser")
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const shopingCart = useSelector((state)=> state?.ShopingCart.shopingcart)
    const {store} = useSelector((state)=> state?.Store)
    const [accountCompleted, setAccountCompleted] = useState(false);
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    // console.log(shopingCart, "wkkwkw", cart)
    useEffect(() => {
    setLoading(true);
    dispatch(getStores())
    setLoading(false);
    }, []);

    
  

    useEffect(()=>{
      if(!localStorage.getItem("login")){
        navigate("/login")
      }
    },[localStorage.getItem("login")])
    const handleAdd = (good) => {
        setCart([...cart, good]);
        dispatch(setShopingCart([...shopingCart, good]))
    };
  
    const handleRemove = (good) => {
        setCart(cart.filter(g => g.name !== good.name));
        dispatch(setShopingCart(shopingCart.filter(g=> g.name !== good.name)))
    };
  
  return (
    <>
    {
      !dataUser ? (<>
        <div className='p-3'>
            <div className="font-bold text-md mb-2 flex items-center pb-3 justify-center lg:justify-between lg:p-3">
              <h1> Yeaayy.. Order Success !!</h1>
            </div>
        </div>
      </>):(<>
      <div className='p-3'>
        {loading ? <p>Loading...</p> : (
            <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3'>
                {store?.results?.map(good => (
                    <div key={good.name} class="rounded overflow-hidden shadow-lg">
                      <img class="w-full" src="/images/card-top.jpg"/>
                        <div className='p-3'>
                          <div class="font-bold text-md mb-2">{good.name}</div>
                          <p class="text-gray-700 text-base">
                            {good.designation}
                          </p>
                          <div class="mt-2">
                            {cart.find(g => g.name === good.name) ? (
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"  onClick={() => handleRemove(good)}>Remove</button>
                            ) : (
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleAdd(good)}>Add</button>
                            )}
                          </div>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
      </>)
    }
      
    </>

  )
}
