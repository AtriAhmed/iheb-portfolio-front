import React, { useState, useEffect, useContext } from "react"

const UIToolsContext = React.createContext()

function UIToolsProvider({ children }) {
  const [windowScroll, setWindowScroll] = useState(
    typeof window !== "undefined" && window.scrollY
  )
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  )
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  // updating the window scroll
  function handleScroll() {
    setWindowScroll(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // starting the window resize handler (changing the pageWidth value on window resize)
  function handleResize() {
    setViewportWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // preventing the interaction with the application when the MobileNavbar is open
  useEffect(() => {
    if (mobileNavbarOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [mobileNavbarOpen])

  const value = {
    windowScroll,
    viewportWidth,
    mobileNavbarOpen,
    setMobileNavbarOpen,
  }

  return (
    <UIToolsContext.Provider value={value}>{children}</UIToolsContext.Provider>
  )
}

export default UIToolsProvider

export function useUIToolsContext() {
  return useContext(UIToolsContext)
}
