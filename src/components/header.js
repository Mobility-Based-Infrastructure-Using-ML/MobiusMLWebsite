import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      })
    } else {
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
    return(
      <div className={this.state.hasScrolled ? 'Header Header-Scroll' : 'Header'}>
          <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/swipedLogo.png')} className="headerLogo"></img></Link>
            <Link to="/courses">FAQ</Link>
            <Link to="/buyNow" ><button>Login</button></Link>
            <Link to="/workshops">Contact</Link>
          </div>
        </div>
    )
  }
}

export default Header
