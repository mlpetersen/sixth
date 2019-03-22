import React from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import logo from '../assets/sixth-circle.svg'
import '../styles/Home.scss'

const md = `Sixth`

const Index = () => {
  return (
    <div className="Home">
      <header className="header">
        <Link to="/contact">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Markdown source={md} />
      </header>
    </div>
  )
}

export default Index
