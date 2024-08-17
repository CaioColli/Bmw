import { createContext, useState } from 'react'

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        bodywork: [],
        fueltype: []
    })

    console.log(filters)

    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    )
}