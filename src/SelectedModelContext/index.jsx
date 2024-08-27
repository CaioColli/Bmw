import { createContext, useState } from 'react'


export const SelectedModelContext = createContext()

export const SelectedModelProvider = ({ children }) => {
    const [selectedModel, setSelectedModel] = useState('')

    return (
        <SelectedModelContext.Provider value={{ selectedModel, setSelectedModel }}>
            {children}
        </SelectedModelContext.Provider>
    )
}