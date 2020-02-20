import React from "react"
import '../styles/styles.scss'

import Header from "../components/Header/header"
import About from "../components/about"
import Works from "../components/Works/works"


const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Works />
  </div>
)

export default IndexPage
