// import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      inhabitent: file(relativePath: { eq: "inhabitent.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      instanews: file(relativePath: { eq: "instanews.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      signalog: file(relativePath: { eq: "signalog.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      burger: file(relativePath: { eq: "burger.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quotesondev: file(relativePath: { eq: "quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
  `)
  return (
    <div className="works">
      <h2>Works</h2>
      <div className="works__list">
        <div className="works__item">
          <h3 className="works__title">Signalog</h3>
          <p className="works__desc">My personal blog built with Gatsby.js.</p>
          <a className="works__img" href="https://signalog.org/"><Img fluid={data.signalog.childImageSharp.fluid} /></a>
          <a className="works__linkBtn" href="https://signalog.org/">Go to website→</a>
          <ul className="works__skill">
            <li>Gatsby</li>
            <li>React</li>
            <li>Graphql</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="works__item">
          <h3 className="works__title">Inhabitent</h3>
          <p className="works__desc">Wordpress custom theme built for a camping company.</p>
          <a className="works__img" href="https://tent.academy.red/"><Img fluid={data.inhabitent.childImageSharp.fluid} /></a>
          <a className="works__linkBtn" href="https://tent.academy.red/">Go to website→</a>
          <ul className="works__skill">
            <li>Wordpress</li>
            <li>PHP</li>
            <li>Javascript</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="works__item">
          <h3 className="works__title">Insta News</h3>
          <p className="works__desc">New York Times News API front-end</p>
          <a className="works__img" href="https://signalog.org/"><Img fluid={data.instanews.childImageSharp.fluid} /></a>
          <a className="works__linkBtn" href="https://signalog.org/">Go to website→</a>
          <ul className="works__skill">
            <li>Javascript</li>
            <li>Jquery</li>
            <li>HTML5</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="works__item">
          <h3 className="works__title">Quotes on Dev</h3>
          <p className="works__desc">My Japanese blog built with Gatsby.js</p>
          <a className="works__img" href="https://signalog.org/"><Img fluid={data.quotesondev.childImageSharp.fluid} /></a>
          <a className="works__linkBtn" href="https://signalog.org/">Go to website→</a>
          <ul className="works__skill">
            <li>React</li>
            <li>Gatsby</li>
            <li>Graphql</li>
            <li>Sass</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Works;
