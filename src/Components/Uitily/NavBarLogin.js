import React from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import NavBarSearchHook from './../../hook/search/navbar-search-hook';
import { useEffect } from 'react'
import { useState } from 'react'
const NavBarLogin = () => {
    const [onChangeSearch, searchWord] = NavBarSearchHook()
    let word = ""
    if (localStorage.getItem('searchWord') != null) {
        word = localStorage.getItem('searchWord')
    }

    const [user, setUser] = useState('')
    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            setUser(JSON.parse(localStorage.getItem('user')))
            console.log(JSON.parse(localStorage.getItem('user')));
        }

    }, [])

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser('')
    }

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={word}
                        onClick={onChangeSearch}
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">


                        {
                            user.name ? (
                                <NavDropdown title={user.name} id="basic-nav-dropdown">

                                    {
                                        user.role === 'admin' ? (<NavDropdown.Item href="/admin/allproducts">صفحة الادمن</NavDropdown.Item>) :
                                            (<NavDropdown.Item href="/user/profile">صفحة المستخدم</NavDropdown.Item>)

                                    }

                                    <NavDropdown.Item onClick={logOut} href="#action/3.2">تسجيل الخروج</NavDropdown.Item>
                                </NavDropdown>
                            ) :

                                <Nav.Link href='/login'
                                    className="nav-text d-flex mt-3 justify-content-center">
                                    <img src={login} className="login-img" alt="sfvs" />
                                    <p style={{ color: "white" }}>دخول</p>
                                </Nav.Link>
                        }




                        <Nav.Link href='/cart'
                            className="nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>








                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
