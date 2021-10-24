import logo from './logo.svg';
import React, { useState, createContext } from "react"
import './App.css';
import Button from './components/Button';
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    name:'light'
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    name:'dark'
  },
}

export const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState(themes.light)
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header className="App-header">
          <a onClick={
            ()=>{
              if(theme.name==='light'){
                setTheme(themes.dark)
              }
              else{
                setTheme(themes.light)

              }
            }
          }>
            Cliquez ici pour changer le theme du bouton
          </a>
          <br/>
          
          <Button />
          
         
        </header>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
