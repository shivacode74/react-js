import React from 'react'
import { createContext } from 'react'
export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
    return (
        <div>
            <ThemeDataContext.Provider value={'shiva'}>
                {props.children}
            </ThemeDataContext.Provider>

        </div>
    )
}

export default ThemeContext
