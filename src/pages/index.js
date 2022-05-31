import React from "react";
import { Link } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page???</title>
      <h1>Home Page!!!</h1>
      <Link to="/test-space">test-space</Link>
      <p>테스트 스페이스 페이지 연결</p>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export default IndexPage;
