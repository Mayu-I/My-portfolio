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
      <div class="work">
        <h3>Signalog </h3>
        <p>My Japanese blog</p>
        <ul>
          <li>React</li>
          <li>Gatsby</li>
          <li>Graphql</li>
          <li>Sass</li>
        </ul>
        <div className="work__img"><Img fluid={data.signalog.childImageSharp.fluid} /></div>
      </div>
    </div>
  )
}

export default Works;
