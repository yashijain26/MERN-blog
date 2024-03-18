import React, { useState } from "react";
import { Button, Label, Spinner, TextInput,Alert } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import {useDispatch,useSelector} from 'react-redux'
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading,error:errorMessage}=useSelector(state =>state.user)
  const [formData, setFormData] = useState({});
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.password ) {
     dispatch(signInFailure('Please fill all the fields'))
    }

    try {
   dispatch(signInStart())
      const res = await fetch("/api/auth/SignIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
       dispatch(signInFailure(data.message))
      }

      if (res.ok) {
        dispatch(signInSuccess(data))
        return navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <span>YASH Technologies</span>
        </div>
        <div className="fex-1">
          <form className="flex flex-col gap-4" onSubmit={handelLogin}>
            <div>
              <Label value="email" />
              <TextInput
                type="text"
                placeholder="enter your email"
                id="email"
                onChange={handelChange}
              />
            </div>
            <div>
              <Label value="password" />
              <TextInput
                type="text"
                placeholder="********"
                id="password"
                onChange={handelChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Don't have an account?</span>
            <Link className="text-blue-500" to="/SignUp">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};
