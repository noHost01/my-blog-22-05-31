import React from "react";
import { Link } from "gatsby";

const testspace = () => {
  return (
    <main>
      <title>테스트 스페이스</title>
      <h1>테스트 스페이스 페이지 입니다.</h1>
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, Which I built with Gatsby.
      </p>
    </main>
  );
};

export default testspace;
