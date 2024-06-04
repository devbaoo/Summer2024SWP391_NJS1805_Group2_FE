
import AgentV2 from "@/components/agent-view/agent-v2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Agent V2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const Agentv2Page = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <AgentV2 />
    </>
  );
};

export default Agentv2Page
