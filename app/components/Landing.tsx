import React from "react";
import Image from "next/image";
import LoginButton from "./LoginButton";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container__no-cap">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <LoginButton />
            </div>
            <figure className="landing__image--mask">
              <Image
                src="/images/landing.png"
                alt="logo"
                width={1200} // required
                height={1200} // required
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
