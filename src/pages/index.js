import React from "react"
import '../styles/styles.scss'

import Header from "../components/Header/header"
import About from "../components/About/about"
import Works from "../components/Works/works"
import Contact from "../components/Contact/contact"
import Footer from "../components/Footer/footer";
import Seo from "../components/Seo/seo";



const IndexPage = () => (
  <div className="contentWrapper">
    <Seo title="Home" />
    <Header />
    <About />
    <Works />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
