import React from "react"
import '../styles/styles.scss'

import Header from "../components/Header/header"
import About from "../components/about"
import Works from "../components/Works/works"
import Footer from "../components/Footer/footer"


const IndexPage = () => (
  <div className="contentWrapper">
    <Header />
    <About />
    <Works />
    <Footer />
  </div>
)

export default IndexPage
