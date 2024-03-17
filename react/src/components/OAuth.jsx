import { Button } from 'flowbite-react'
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import{GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth'
import {app} from '../firebase'

const OAuth = () => {
const auth = getAuth(app)
   const  handelGoogleClick=async()=>{
    const provider = new GoogleAuthProvider()
    provider.getCustomParameters({promt:'select accounts'})
    try {
        const resultsFromGoogle = await signInWithPopup(auth,provider)
        console.log(resultsFromGoogle)
    } catch (error) {
        console.log(error)
    }
   }
  return (
   <Button type ='button' gradientDuoTone='pinkToOrange' outline onClick={handelGoogleClick}><FaGoogle className='w-6 h-6 mr-2'/> Continue with google</Button>
  )
}

export default OAuth