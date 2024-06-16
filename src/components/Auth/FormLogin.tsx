import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser } from "../../service/features/authSlice";
import { useAppDispatch } from "../../service/store/store";

type FormLoginValues = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormLoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormLoginValues) => {
    setIsLoading(true);
    dispatch(loginUser(data))
      .unwrap()
      .then((response) => {
        const role = response.data.userResult.role;
        console.log(role);

        if (role === "Admin") {
          navigate("/account-management");
        } else if (role === "StoreOwner") {
          navigate("/dashboard");
        } else if (role === "Customer") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-8 px-4 sm:px-0">
      {/* header title form */}
      <div className="flex flex-col items-center text-center">
        <h1 className="sm:h-20 w-full text-3xl">Mommilk</h1>
        <h3 className="text-2xl sm:text-4xl font-bold mt-4">Login</h3>
      </div>
      <form
        autoComplete="off"
        className="w-full sm:w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="email" className="text-base font-semibold">
              Email:{" "}
            </label>
            {errors.email && (
              <p className="text-sm text-red-500">* {errors.email.message}</p>
            )}
          </div>
          <input
            {...register("email", { required: "Email is required" })}
            id="email"
            name="email"
            placeholder="Enter your email..."
            className="mt-2 p-2 border-2 border-pink-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row">
            <label htmlFor="password" className="text-base font-semibold">
              Password:{" "}
            </label>
            {errors.password && (
              <p className="text-sm text-red-500">*{errors.password.message}</p>
            )}
          </div>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            className="mt-2 p-2 border-2 border-pink-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-4 w-full sm:w-80 gap-12">
          <button
            type="submit"
            className="bg-pink-200 p-3 rounded-xl text-black font-bold hover:bg-pink-600 cursor-pointer w-full sm:w-48"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <Link
            to="#"
            className="text-red-600 underline font-normal text-base mt-2 sm:mt-0 w-full sm:w-44"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <Link
        to={"/register"}
        className="text-blue-600 underline font-normal text-base mt-2 sm:mt-0"
      >
        Do you not have account? Register Now
      </Link>
    </div>
  );
};

export default FormLogin;