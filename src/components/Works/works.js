// import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      inhabitent: file(relativePath: { eq: "inhabitent.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      instanews: file(relativePath: { eq: "instanews.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      signalog: file(relativePath: { eq: "signalog.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      burger: file(relativePath: { eq: "burger.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quotesondev: file(relativePath: { eq: "quotes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
  `)
  return (
    <div className="works" id="work">
      <h2>WORK</h2>
      <div className="works__list">
        <div className="works__item">
          <a href="https://signalog.org/" target="_blank"><h3 className="works__title">Signalog</h3></a>
          <p className="works__desc">My personal blog built with Gatsby.js.</p>
          <a className="works__img" href="https://signalog.org/" target="_blank"><Img fluid={data.signalog.childImageSharp.fluid} /></a>
          <ul className="works__skill">
            <li>Gatsby</li>
            <li>React</li>
            <li>Graphql</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="works__item">
          <a href="https://tent.academy.red" target="_blank"><h3 className="works__title">Inhabitent</h3></a>
          <p className="works__desc">Wordpress custom theme built for a camping company.</p>
          <a className="works__img" href="https://tent.academy.red" target="_blank"><Img fluid={data.inhabitent.childImageSharp.fluid} /></a>
          <ul className="works__skill">
            <li>Wordpress</li>
            <li>PHP</li>
            <li>Javascript</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="works__item">
          <a href="https://mayu-i.github.io/Instanews-app/" target="_blank"><h3 className="works__title">Insta News</h3></a>
          <p className="works__desc">New York Times News API front-end</p>
          <a className="works__img" href="https://mayu-i.github.io/Instanews-app/" target="_blank"><Img fluid={data.instanews.childImageSharp.fluid} /></a>
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
          <a className="works__img" href="https://quotes.academy.red" target="_blank"><Img fluid={data.quotesondev.childImageSharp.fluid} /></a>
          <ul className="works__skill">
            <li>React</li>
            <li>Gatsby</li>
            <li>Graphql</li>
            <li>Sass</li>
          </ul>
        </div>
        {/* <div className="works__item">
          <h3 className="works__title">Manga Reader App<br />(Coming up soon!)</h3>
          <p className="works__desc">I'm currently working on PWA manga reader app using manga eden api</p>
          <div className="works__img"><Img fluid={data.react.childImageSharp.fluid} /></div>
          <ul className="works__skill">
            <li>React</li>
            <li>MongoDB</li>
            <li>Graphql</li>
            <li>Sass</li>
          </ul>
        </div> */}
      </div>
      <div className="works__more">
        <a href="https://github.com/Mayu-I?tab=repositories" >VIEW MORE</a>
      </div>
    </div>
  )
}

export default Works;
