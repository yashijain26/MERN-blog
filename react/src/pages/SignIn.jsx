import React, { useState } from "react";
import { Button, Label, Spinner, TextInput,Alert } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.password ) {
      return setFormData("Please enter all the fields ");
    }

    try {
      setIsLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/SignIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setIsLoading(false);
      if (res.ok) {
        return navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
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
              disabled={isLoading}
            >
              {isLoading ? (
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
