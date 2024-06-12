import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:p-0">
      <div className="md:col-span-8">
        <img
          src="https://top10hanoi.vn/wp-content/uploads/2022/07/cua-hang-sua-me-va-be-tai-ha-noi-scaled.jpg"
          alt="Banner Login"
          className="w-full h-auto md:h-700px object-cover"
        />
      </div>
      <div className="md:col-span-4">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
