import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/2.jpg"
      />
    </Layout>
  );
}

export default AboutPage;
