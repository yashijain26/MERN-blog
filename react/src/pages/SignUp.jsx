import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link,useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export const SignUp = () => {
  const [formData, setFormData] = useState({});
   const [errorMessage,setErrorMessage] = useState(null);
   const [isLoading,setIsLoading] = useState(false)
 const navigate = useNavigate()
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
     return  setErrorMessage('Please fill all the fields')
    }
    try {
      setIsLoading(true)
      setErrorMessage(null)
      const res = await fetch("/api/auth/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message)
      }
      setIsLoading(false)
      if(res.ok){
        return navigate('/SignIn')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setIsLoading(false)
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <span>YASH Technologies</span>
        </div>
        <div className="fex-1">
          <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
            <div>
              <Label value="username" />
              <TextInput
                type="text"
                placeholder="enter your username"
                id="username"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="email" />
              <TextInput
                type="email"
                placeholder="enter your email"
                id="email"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="password" />
              <TextInput
                type="password"
                placeholder="enter your password"
                id="password"
                onChange={handelChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={isLoading}
            
            >
              {isLoading ?<><Spinner size='sm'
              /><span className="pl-3">loading...</span></>: 'Sign Up'}
             
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Have an account?</span>
            <Link className="text-blue-500" to="/SignIn">
              Sign In
            </Link>
          </div>
{errorMessage &&
<Alert className="mt-5" color='failure'>{errorMessage}</Alert>}
        </div>
      </div>
    </div>
  );
};
