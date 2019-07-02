import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/myprofile.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="profile" />
          </a>
          <h1>
            Estudante de <strong>Engenharia de Software</strong>, desenvolvedor
            <strong> Fullstack</strong> e apaixonado por{' '}
            <strong>ReactJs</strong>.
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
