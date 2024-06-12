import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser } from "../service/features/authSlice";
import { useAppDispatch } from "../service/store/store";

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
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        // const roles = response.data.roles;
        // if (roles[0] === 'Admin') {
        //     navigate('/account-management');
        // } else if (roles[0] === 'Store_Manager') {
        //     navigate('/employee-managementy');
        // } else if (roles[0] === 'Brand_Manager') {
        //     navigate('/dashboard');
        // }
        navigate("/dashboard");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-8 px-4 sm:px-0">
      {/* header title form */}
      <div className="flex flex-col items-center text-center">
        <h1 className="sm:h-20 w-full text-3xl">SuaMe 88</h1>
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
            type="email"
            id="email"
            name="email"
            placeholder="Nhập Email...."
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
            placeholder="Nhập mật khẩu...."
            className="mt-2 p-2 border-2 border-pink-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-4 w-full sm:w-80 gap-12">
          <button
            type="submit"
            className="bg-pink-200 p-3 rounded-xl text-black font-bold hover:bg-pink-600 cursor-pointer w-full sm:w-48"
          >
            {isLoading ? "Loading..." : "Đăng nhập"}
          </button>
          <Link
            to="#"
            className="text-red-600 underline font-normal text-base mt-2 sm:mt-0 w-full sm:w-44"
          >
            Quên mật khẩu?
          </Link>
        </div>
      </form>
      <Link
        to={"/register"}
        className="text-blue-600 underline font-normal text-base mt-2 sm:mt-0"
      >
        Bạn chưa có tài khoản? Đăng kí ngay
      </Link>
    </div>
  );
};

export default FormLogin;
