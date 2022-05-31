import React from "react";
import { Link } from "gatsby";

function AboutPage() {
  return (
    <main>
      <title>자기소개</title>
      <h1>자기소개 페이지입니다.</h1>
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, Which I built with Gatsby.
      </p>
    </main>
  );
}

export default AboutPage;
