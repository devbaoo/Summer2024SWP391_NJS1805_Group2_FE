import Login from "@/components/login";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login || MomMilk88",
  description: "MomMilk88",
};

const LoginPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Login />
    </>
  );
};

export default LoginPage;
