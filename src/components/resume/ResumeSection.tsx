import React from "react";
import "../../_general.scss";
import "./_resume.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section id="resume" className="content-section resume">
      <div className="overlay">
        <div className="container">
          <h2>Resume</h2>

          <div className="buttons">
            <a className="button" href="./resume/Darga_Developer_Resume.pdf">
              <i className="fa fa-file-pdf-o" />
              <span>
                PDF <br />
                Resume
              </span>
            </a>

            <a className="button" href="./resume/Darga_Developer_Resume.docx">
              <i className="fa fa-file-word-o" />
              <span>
                Simple <br />
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
