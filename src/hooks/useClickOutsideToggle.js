import React, { useState, useRef, useEffect } from "react";

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
      const handleClickedOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false)
        }
      }
  
      document.addEventListener('mouseup', handleClickedOutside)
      return () => {
        document.removeEventListener("mouseup", handleClickedOutside)
      }
    }, [ref])


    return (
        {expanded, setExpanded, ref}
    )
}

export default useClickOutsideToggle