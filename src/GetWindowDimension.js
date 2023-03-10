import { useState, useEffect } from 'react';

function getWindowDimensions() {

  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var height= Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  return {
    width,
    height
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
