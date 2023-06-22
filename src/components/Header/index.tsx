import { useContext } from 'react'
import { HeaderContainer, ToggleTheme } from './styles'
import { Timer, Scroll, Sun, Moon, Sliders } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../App'

export function Header() {
  const { toggleTheme, currentTheme } = useContext(ThemeContext)

  function handleToggleTheme() {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      <div>
      </div>
      <nav>
        <NavLink to="/" title="Temporizador">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historial">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
