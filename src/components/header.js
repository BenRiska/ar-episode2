import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

//context
import {
    useGlobalDispatchContext,
    useGlobalStateContext,
  } from "../context/globalContext"

const Header = ({
    onCursor,
    setHamburgerPosition,
    setToggleMenu,
    toggleMenu,
  }) => {

    const dispatch = useGlobalDispatchContext()
    const { currentTheme } = useGlobalStateContext()
    const hamburger = useRef(null)

    const toggleTheme = () => {
        if (currentTheme === "dark") {
          dispatch({ type: "TOGGLE_THEME", theme: "light" })
        } else {
          dispatch({ type: "TOGGLE_THEME", theme: "dark" })
        }
      }

    // const menuHover = () => {
    //     onCursor("locked")
    //     setHamburgerPosition({ x: position.x, y: position.y + 72 })
    //   }

    useEffect(() => {
        window.localStorage.setItem("theme", currentTheme)
      }, [currentTheme])


    return (
        <HeaderNav 
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -72, opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}>
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo onMouseEnter={() => onCursor("hovered")}
                          onMouseLeave={onCursor}>
                        <Link to="/">FURR</Link>
                        <span onMouseEnter={() => onCursor("pointer")}
                             onMouseLeave={onCursor} onClick={toggleTheme}></span>
                        <Link to="/">W</Link>
                    </Logo>
                    <Menu>
                        <button>
                        <span></span>
                        <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header
