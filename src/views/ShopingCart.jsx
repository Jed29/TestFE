import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function ShopingCart() {
  let navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("login")){
      navigate("/login")
    }
  },[])
  
  const [count, setCount] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [goOrder, setGoOrder] = useState(false)
  const shopingCart = useSelector((state)=> state?.ShopingCart)
  const [getData, setGetData] = useState()
  let data = shopingCart.shopingcart
  const addItems = (nama) => {  
    setGetData(
      data.map((item)=>{
        if(item.name == nama){
          if(!item.count){
            item.count = count+1
          }else{
            item.count = count+1
          }
        }
        setCount(count + 1)
        return item
      })
    )
  };

  const confirm = (e) =>{
    e.preventDefault()
    setGoOrder(true)
    setModalIsOpen(false)
  }
  const handleClose = () =>{
    setModalIsOpen(false)
  }

  const Order = (e) => {
    e.preventDefault()
    setGoOrder(true)
    setModalIsOpen(false)
  }
  const removeItems = (nama) => {
    setGetData(
      data.map((item)=>{
        if(item.name == nama){
          if(!item.count){
            item.count = count-1
          }else{
            item.count = count-1
          }
        }
      })
    )
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
    {
      goOrder ? (
        <div className='p-3'>
            <img src="https://www.pngall.com/wp-content/uploads/5/Green-Checklist.png" alt="" className='w-full'/>
            <div className="font-bold text-md mb-2 flex items-center pb-3 justify-center lg:justify-between lg:p-3">
              <h1> Yeaayy.. Order Success !!</h1>
            </div>
            <div className="flex items-center justify-center lg:justify-between lg:p-3">
              <button onClick={()=>{setModalIsOpen(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Review
              </button>
          </div>
        </div>
      ) : (
        <>
        <div className='p-3'>
          {/* {
            data.map((cart,index)=>(
              <div className='flex flex-row items-center mb-2'>
                <div class='flex-none w-20 h-14'>
                  <img class="w-full" src="/images/card-top.jpg"/>
                </div>
                <div class="shrink w-60 h-14 pl-5">
                  <div class="font-bold text-xl">{cart.name}</div>
                  <div class="text-gray-700 text-base">{cart.classification}</div>
                </div>
                <div class="flex-none w-16 h-14">
                  <div className='flex flex-row items-center'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-5 h-5 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" onClick={()=>removeItems(cart.name)}>-</button>
                      <div className='m-1 text-blue-700 text-base'>{!cart.count? "1" : cart?.count}</div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-5 h-5 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"  onClick={()=>addItems(cart.name)}>+</button>
                  </div>
                </div>
              </div>
              ))
          } */}
          <div className="flex items-center justify-center lg:justify-between lg:p-3">
            <button onClick={()=>{setModalIsOpen(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Review
            </button>
          </div>
        </div>
        </>
      )
    }  

    <div >
      {modalIsOpen && (
        <div class="modal">
          <div className='modal-content max-w-lg'>
            <div onClick={handleClose} class="close">&times;</div>
            <div style={{marginTop:20}}>
              <form>
                <div className='flex flex-row items-center mb-1' >
                  <div class="font-bold text-xxl items-center shrink w-60 h-14 pl-5">Name</div>
                  <div class="font-bold text-xxl items-center flex-none w-16 h-14">Qty</div>
                </div>
                {/* {
                  data.map((cart,index)=>(
                    <div className='flex flex-row items-center mb-2'>
                      <div class="shrink w-60 h-14 pl-5">
                        <div class="font-bold text-xl">{cart.name}</div>
                        <div class="text-gray-700 text-base">{cart.classification}</div>
                      </div>
                      <div class="flex-none w-16 h-14">
                        <div className='flex flex-row items-center'>
                            <div className='m-1 text-blue-700 text-base'>{!cart.count? "1" : cart?.count}</div>
                        </div>
                      </div>
                    </div>
                    ))
                } */}
                <div style={{marginTop:15}}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' onClick={(e)=>confirm(e)}>Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    
     
    </>
  )
}
