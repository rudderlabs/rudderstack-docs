import React, {useEffect} from "react"
import NestedAccordion from "../NestedAccordion"

const Sidebar = ({ isMenuOpen }) => {

  useEffect(() => {
    
  },[])

  return (
    <div className={`sidebar-nav-content ${isMenuOpen ? "active" : ""}`}>
      <NestedAccordion />
    </div>
  )
}

export default Sidebar
