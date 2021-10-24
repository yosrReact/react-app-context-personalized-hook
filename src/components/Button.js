import React, { useContext } from "react"
import { ThemeContext } from './../App';
function Button() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Je suis stylé par le contexte de thème !
    </button>
  )
}
export default Button
