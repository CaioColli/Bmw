import { createContext, useState } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')

    console.log(searchValue)
    
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    )
}