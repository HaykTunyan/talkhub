import React from "react";
import Container from "./container";

const Cta = () => {

  /**
   *  Cta Hooks.
   */

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-purple-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Are You Ready to Join the Team?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Become a part of Talk Hub and collaborate with passionate individuals. Join our team today and contribute to the future of learning!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="mailto:talkhubplatform@gmail.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-purple-600 bg-white rounded-md px-7 lg:px-10 lg:py-5">
            Join Now
          </a>
        </div>
      </div>

    </Container>
  );
}

export default Cta;