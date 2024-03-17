import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";


export const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto">
      <div className="flex-1">
   <span>YASH Technologies</span>
      </div>
      <div className="fex-1">
        <form className="flex flex-col gap-4">
          <div>
            <Label value="UserName" />
            <TextInput
              type="text"
              placeholder="enter your username"
              id="username"
            />
          </div>
          <div>
            <Label value="email" />
            <TextInput type="text" placeholder="enter your email" id="email" />
          </div>
          <div>
            <Label value="Password" />
            <TextInput
              type="text"
              placeholder="enter your password"
              id="password"
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'> Sign Up</Button>
        </form>
        <div className="flex gap-2 mt-5 text-sm">
          <span>Have an account?</span>
          <Link className="text-blue-500" to='/SignIn'>Sign In</Link>
        </div>
      </div>

      </div>
    </div>
  );
};
