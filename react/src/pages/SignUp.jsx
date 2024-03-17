import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <span>YASH Technologies</span>
        </div>
        <div className="fex-1">
          <form className="flex flex-col gap-4">
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
                placeholder="enter your password"
                id="password"
                onChange={handelChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
        
              Sign Up
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Have an account?</span>
            <Link className="text-blue-500" to="/SignIn">
              Sign In
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};
