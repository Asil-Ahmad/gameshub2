import React from "react";
import { Button } from "@material-tailwind/react";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-white">
      <div className=" mt-8 w-[24rem] lg-max:w-[20rem] p-1  ">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <p>Enter your details to register.</p>

        <form
          action="POST"
          className=" mb-2 mt-8 w-80
       "
        >
          <div className="flex flex-col gap-3 border-none">
            <p className="text-sm text-blue-gray-700 font-[500]">Your Name</p>
            <input
              type="name"
              className="border-2 rounded-md text-start px-2"
            />
            <p className="text-sm text-blue-gray-700 font-[500]">Your Email</p>
            <input
              type="email"
              className="border-2 rounded-md text-start px-2"
            />
            <p className="text-sm text-blue-gray-700 font-[500]">Password</p>
            <input
              type="password"
              name=""
              id=""
              className="border-2 rounded-md text-start px-2"
            />
          </div>
          <div className="flex mt-8 gap-2">
            <input type="checkbox" name="" id="" />
            <p>
              {" "}
              I agree the
              <a href="/" className="text-sm text-blue-500 underline">
                &nbsp;Terms and Conditions
              </a>
            </p>
          </div>
          <Button className="w-full mt-8">Sign Up</Button>

          <div className="mt-5 w-full text-center ">
            <p>
              Already have an account?
              <a href="" className="font-semibold">
                &nbsp;Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
