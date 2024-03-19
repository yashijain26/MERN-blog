import { Button } from 'flowbite-react'
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import{GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth'
import {app} from '../firebase'
import {useDispatch} from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom'

const OAuth = () => {
const auth = getAuth(app)
const dispatch = useDispatch()
const navigate = useNavigate()
   const  handelGoogleClick=async()=>{
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({promt:'select accounts'})
    try {
        const resultsFromGoogle = await signInWithPopup(auth,provider)
        const res = await fetch('/api/auth/google',{
            method :'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:resultsFromGoogle.user.displayName,
                email:resultsFromGoogle.user.email,
                googlePhotoUrl:resultsFromGoogle.user.photoURL
            })
        })
    
        const data = await res.json()
      

        if(res.ok){
dispatch(signInSuccess(data))
navigate('/')

        }
    } catch (error) {
       next(error)
    }
   }
  return (
   <Button type ='button' gradientDuoTone='pinkToOrange' outline onClick={handelGoogleClick}><FaGoogle className='w-6 h-6 mr-2'/> Continue with google</Button>
  )
}

export default OAuth