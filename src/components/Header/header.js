import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


// import ReactAnime from 'react-animejs'
// const { Anime, stagger } = ReactAnime;


const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <header>
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/"><Img fluid={data.logoImage.childImageSharp.fluid} /></Link>
        </div>
        {/* <Anime
            initial={[
              {
                targets: '.ml16 .letter',
                translateY: [-100, 0],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 30 * i
              }
            ]}
          >
            <h1 className="ml16">Made with love</h1>
          </Anime> */}
        <div className="header__nav">
          <nav>
            <Link to="#about">About</Link>
            <Link to="#work">Work</Link>
          </nav>
        </div>
      </div>
      <div className="header__desc">
        <h2>Hi I'm <span>MAYU</span></h2>
        <p>a front-end web developer based in Vacouver</p>
      </div>
    </header>
  )
}

export default Header;
