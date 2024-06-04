import SignUp from "@/components/register";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "SignUp || MomMilk88",
  description: "MomMilk88",
};

const RegisterPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <SignUp />
    </>
  );
};

export default RegisterPage;
