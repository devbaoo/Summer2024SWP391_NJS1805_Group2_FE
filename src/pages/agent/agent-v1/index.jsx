
import AgentV1 from "@/components/agent-view/agent-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Agent V1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const AgentV1Page = () => {
    return (
        <>
        <MetaComponent meta={metadata} />
            <AgentV1 />
        </>
    );
};

export default AgentV1Page
