import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
            </h2>
          </Fade>
          <span role="img" >
                <img src={require("../images/headshot_popart.jpg")} alt="headshot vanessa patterson"></img>
              </span>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Web developer from"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Charlotte, NC"}
              </h1>
              {/* <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1> */}
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "vpatt1031@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
            <a href={"https://vpatt1031.github.io/portfolio2/assets/vanessa_patterson_resume.pdf"}
              className="primary-btn"
            >
              VIEW MY RESUME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
