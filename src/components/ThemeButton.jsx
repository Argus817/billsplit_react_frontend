import { useState } from "react"

const ThemeButton = () => {

    const lightIcon = "bi bi-brightness-high"
    const darkIcon = "bi bi-moon"

    const [theme, _setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    document.documentElement.setAttribute('data-bs-theme', theme)

    const setTheme = (val) => {
        localStorage.setItem('theme', val)
        _setTheme(val)
    }

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }


    return (
        <button id="themebutton" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} onClick={changeTheme}>
            <i className={(theme === 'dark')? darkIcon : lightIcon}></i>
        </button>
    )
}

export default ThemeButton
