import FormRegister from "../../components/Auth/FormRegister";
import banner from "../../assets/banner.png";

const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      <div className="md:col-span-8 h-full">
        <img
          src={banner}
          alt="Banner Register"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-4 flex items-center justify-center h-full md:pt-12">
        <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/4 lg:w-2/3">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
