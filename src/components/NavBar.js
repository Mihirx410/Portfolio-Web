import { useEffect, useState } from "react"
import { Navbar,Container,Nav } from "react-bootstrap"
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {

    // const [activeLink, SetActiveLink] = useState('home');
    const [activeLink, SetActiveLink] = useState('');
    const [scroll, SetScroll] = useState(false);

    useEffect(() => {
      const onScroll= ()=>{

        if (window.onscrollY>50){
            SetScroll(true);
        }
        else{
            SetScroll(false);
        }
      }

      window.addEventListener("scroll",onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    
    }, [])
    
    const onUpdateActionLink = (value) =>{
        SetActiveLink(true);
    }

    return (
        <Navbar expand="lg" className={scroll ? "scroll" : ""}>
      <Container className="nav-container">
        <Navbar.Brand className="nav-brand" href="#home"> <img src={logo} alt="logo"/> </Navbar.Brand>
        {/* toggle button for navbar */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active-navbar-link" : "navbar-link"}  onClick={() => onUpdateActionLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active-navbar-link" : "navbar-link"}  onClick={() => onUpdateActionLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active-navbar-link" : "navbar-link"}  onClick={() => onUpdateActionLink('projects')}>Projects</Nav.Link>
            <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt=""/></a>
                <a href="#"><img src={navIcon2} alt=""/></a>
                <a href="#"><img src={navIcon3} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log("button is here")}>Lets connect</button>
          </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}