import React from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import logo from '../assets/sixth-circle.svg'

const md = `hello@sixth.dk`

const Contact = () => {
  return (
    <main className="Home">
      <section className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Markdown source={md} />
      </section>
    </main>
  )
}

export default Contact
