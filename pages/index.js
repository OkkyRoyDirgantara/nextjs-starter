import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

class Home extends React.Component {
  render() {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
            <Link href="/posts/first-post">
                <a className="bg-red-500">First Post</a>
            </Link>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a className="bg-blue-300" href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    );
  }
}

export default Home;
