import React from "react";
import StudyDuration from "./StudyDuration";

export default function AboutSection(): JSX.Element {
  return (
    <section id="about" className="content-section about">
      <div className="overlay">
        <div className="container">
          <main>
            <div className="nocontent">
              {/* ignored by google */}
              <h2 className="invisible-but-outline-readable">About Me</h2>
            </div>

            <header>
              <span className="logo">
                <span className="darga">darga</span>
                <span className="code">Code</span>
              </span>
              <span className="subtitle">Software Development</span>
            </header>

            <p>
              I&apos;m a self-taught software engineer and former game designer.
            </p>

            <StudyDuration />

            <p>I love building things, solving problems, and learning.</p>
          </main>
        </div>
      </div>
    </section>
  );
}
