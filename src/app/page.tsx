import Courses from "@/components/home/Courses";
import Searchbox from "@/components/SearchBox";
import UnderDevelopmentGemini from "@/components/UnderDevGemini";

import React from "react";

const Home = () => {
  return (
    <div>
      <Searchbox />
      {/* <UnderDevelopmentGemini /> */}
      <Courses />
      {/* <UnderDevelopmentGPT /> */}
      {/* <UnderDevelopmentDeepSeek /> */}
      {/* <UnderDevelopmentPageClaude /> */}
      {/* <UnderDevelopmentPageClaudeV2 /> */}
    </div>
  );
};

export default Home;
