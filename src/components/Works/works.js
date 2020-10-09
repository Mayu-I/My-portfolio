import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Fade from 'react-reveal/Fade';

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
      emoji: file(relativePath: { eq: "emoji.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery: file(relativePath: { eq: "gallery.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      compressor: file(relativePath: { eq: "compressor.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wb: file(relativePath: { eq: "wb.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
  `)
  return (
    <section className="works" id="work">
      <h2 className="title">WORK</h2>
      <div className="works__list">
        <Fade>
          <div className="works__item">
            <a href="https://www.workbriefly.com/" target="_blank" rel="noopener noreferrer"><h3 className="works__title">WorkBriefly</h3></a>
            <p className="works__desc">短期バイトの求人プラットフォーム (フロントエンド)</p>
            <a className="works__img" href="https://www.workbriefly.com/" target="_blank" rel="noopener noreferrer"><Img fluid={data.wb.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>React</li>
              <li>Firebase</li>
              <li>Node.js</li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="works__item">
            <a href="https://mayu-i.github.io/React-unsplash-gallery/#/SnapScout/mountain" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Unsplash Gallery</h3></a>
            <p className="works__desc">Unsplash APIを使った写真検索サービス</p>
            <a className="works__img" href="https://mayu-i.github.io/React-unsplash-gallery/#/SnapScout/mountain" target="_blank" rel="noopener noreferrer"><Img fluid={data.gallery.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>React</li>
              <li>API</li>
              <li>Sass</li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="works__item">
            <a href="https://mayu-i.github.io/React-image-compressor/" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Image Compressor</h3></a>
            <p className="works__desc">画像圧縮アプリ</p>
            <a className="works__img" href="https://mayu-i.github.io/React-image-compressor/" target="_blank" rel="noopener noreferrer"><Img fluid={data.compressor.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </Fade>
        {/* <Fade>
          <div className="works__item">
            <a href="https://signalog.org/" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Signalog</h3></a>
            <p className="works__desc">個人ブログ</p>
            <a className="works__img" href="https://signalog.org/" target="_blank" rel="noopener noreferrer"><Img fluid={data.signalog.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>Gatsby</li>
              <li>React</li>
              <li>Graphql</li>
              <li>Sass</li>
            </ul>
          </div>
        </Fade> */}
        <Fade>
          <div className="works__item">
            <a href="https://mayu-i.github.io/React-emoji-search/" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Emoji Search</h3></a>
            <p className="works__desc">絵文字検索アプリ</p>
            <a className="works__img" href="https://mayu-i.github.io/React-emoji-search/" target="_blank" rel="noopener noreferrer"><Img fluid={data.emoji.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>React</li>
              <li>Javascript</li>
              <li>CSS</li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="works__item">
            <a href="https://github.com/Mayu-I/Inhabitent-site" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Inhabitent</h3></a>
            <p className="works__desc">キャンプ用品会社のためのWordPressテーマ</p>
            <a className="works__img" href="https://github.com/Mayu-I/Inhabitent-site" target="_blank" rel="noopener noreferrer"><Img fluid={data.inhabitent.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>Wordpress</li>
              <li>PHP</li>
              <li>Javascript</li>
              <li>Sass</li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="works__item">
            <a href="https://mayu-i.github.io/Instanews-app/" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Insta News</h3></a>
            <p className="works__desc">New York Times News APIを使ったサイト</p>
            <a className="works__img" href="https://mayu-i.github.io/Instanews-app/" target="_blank" rel="noopener noreferrer"><Img fluid={data.instanews.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>Javascript</li>
              <li>Jquery</li>
              <li>HTML5</li>
              <li>Sass</li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="works__item">
            <a href="https://github.com/Mayu-I/Quotes-on-dev" target="_blank" rel="noopener noreferrer"><h3 className="works__title">Quotes on Dev</h3></a>
            <p className="works__desc">WordPress REST APIを使ったDev名言集サイト</p>
            <a className="works__img" href="https://github.com/Mayu-I/Quotes-on-dev" target="_blank" rel="noopener noreferrer"><Img fluid={data.quotesondev.childImageSharp.fluid} /></a>
            <ul className="works__skill">
              <li>Wordpress</li>
              <li>PHP</li>
              <li>Javascript</li>
              <li>Sass</li>
            </ul>
          </div>
        </Fade>
      </div>
      <div className="black-btn">
        <a href="https://github.com/Mayu-I?tab=repositories" target="_blank" rel="noopener noreferrer">VIEW MORE</a>
      </div>
    </section>
  )
}

export default Works;
