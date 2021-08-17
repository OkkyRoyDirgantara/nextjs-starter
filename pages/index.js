import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <h1 className="title">
          Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </div>
    );
  }
}

export default Home;
