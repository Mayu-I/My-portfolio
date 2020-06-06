import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    logoImage: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    babyImage: file(relativePath: { eq: "baby_me.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)


  return (
    <header className="header" id="#top">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/"><Img fluid={data.logoImage.childImageSharp.fluid} /></Link>
        </div>
        <div className="header__nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/1l1567vc94Nk1csTIedKpH-it__ikEBtn/view?usp=sharing">Resume</a>
        </div>
      </div>
      <div className="header__desc">
        <div className="header__baby">
          <Img fluid={data.babyImage.childImageSharp.fluid} />
        </div>
        <div className="header__intro">
          <h2>Hi! My name is
            <span className="header__name">
              <span data-content="M">M</span>
              <span data-content="A">A</span>
              <span data-content="Y">Y</span>
              <span data-content="U">U</span>
            </span>
          </h2>
          <p className="header__text">a web developer based in Vancouver</p>
        </div>
      </div>
    </header >
  )
}

export default Header;
