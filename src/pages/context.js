import React, { useState, useContext} from 'react'
import { data } from './data'

const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [modulesArr, setModulesArr] = useState([]);
    const [number, setNumber] = useState(0);

    const [scroll, setScroll] = useState(false)
    
    data.map((item) => {
        item.semesters.map(semester => {
            semester.modules.map(module => {
                modulesArr.push(module)
        }   )
        })
    })

    return (
        <AppContext.Provider value={{
            modulesArr,
            number,
            setNumber,
            scroll,
            setScroll,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
