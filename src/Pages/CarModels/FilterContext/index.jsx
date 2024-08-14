import { Children, createContext, useState } from 'react'

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState('All')

    console.log(filter)

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}