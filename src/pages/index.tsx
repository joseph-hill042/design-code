import * as React from "react";
import type { HeadFC } from "gatsby";
import HeroSection from "../components/sections/hero";
import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home" />;
