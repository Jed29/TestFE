import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setDataUser } from '../store/features/dataUserSlices'

export default function Home() {
  let dispatch = useDispatch()
  let dataUser = useSelector((state)=> state?.DataUser.datauser)
  // console.log(dataUser,"xixiHomer")
  let navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("login")){
      navigate("/login")
    }
  },[])
  const userName = useSelector(state => state?.User?.user)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submit, setSubmit] = useState({})
  const [formIsValid, setFormIsValid] = useState(false);
  
  const handleClose = () => {
    setModalIsOpen(false);
    setPhone("");
    setEmail("");
    setAddress("");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (!validateForm()) {
      return;
    }

    let data ={
      phone: phone,
      email: email,
      address: address
    }
    setSubmit(data)
    dispatch(setDataUser(data))
    setPhone("");
    setEmail("");
    setAddress("");
    setModalIsOpen(false);
  };

  // console.log(submit, "oke")
  const validateForm = () => {
    if (phone.trim() === "" || email.trim() === "" || address.trim() === "") {
      return false;
    }
    if (!/^\d+$/.test(phone) || phone.startsWith("0") || phone.length < 10 || phone.length > 13) {
      setFormIsValid(false);
      console.log("bbb")
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormIsValid(false);
      console.log("ccc")
      return false;
    }
    return true
  };
  return (
    <> 
    <div>
      <div className='p-3'>
        <h1 className='text-red-800'>Halo {userName} !</h1>
        <div class="mb-5">
          Name : Mr. {userName}
        </div>
        <div class="mb-5">
          Email : {dataUser?.email? dataUser?.email : "-"}
        </div>
        <div class="mb-5">
          Telepon : {dataUser?.phone? dataUser?.phone : "-"}
        </div>
        <div class="mb-5">
          Alamat : {dataUser?.address? dataUser?.address :"-"}
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-between lg:p-3">
            <button onClick={()=>{setModalIsOpen(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Lengkapi data diri Anda
            </button>
      </div>
    </div>


    <div >
      {modalIsOpen && (
        <div class="modal">
          <div className='modal-content max-w-lg'>
            <div onClick={handleClose} class="close">&times;</div>
            <div style={{marginTop:20}}>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                </label>
                <input
                    type="text"
                    value={userName}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    disabled
                  />
                <br />
                <label>
                  Phone:
                </label>
                <input
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <br />
                <label>
                  Email:
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <br />
                <label>
                  Address:
                </label>
                <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <br />
                <div style={{marginTop:15}}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' disabled={()=>!validateForm()}>Save</button>
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
