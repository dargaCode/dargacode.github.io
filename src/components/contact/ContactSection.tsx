import React from "react";
import "../../_general.scss";
import "./_contact.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section id="contact" className="content-section contact">
      <div className="container">
        <h2>Contact</h2>

        <a className="button" href="mailto:resume@dargaCode.com">
          <i className="icon-envelope" />
          <span>Email</span>
        </a>

        <a className="button" href="https://www.linkedin.com/in/dargaCode">
          <i className="fa fa-linkedin-square" />
          <span>LinkedIn</span>
        </a>

        <a className="button" href="https://github.com/dargaCode">
          <i className="fa fa-github-square" />
          <span>GitHub</span>
        </a>

        <a className="button" href="https://blog.dargacode.com">
          <i className="fa fa-rss-square" />
          <span>Study Blog</span>
        </a>
      </div>
    </section>
  );
}
