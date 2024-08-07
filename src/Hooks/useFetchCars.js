import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response  = await fetch (url)
                const result = await response.json()
                setData(result)
            } catch (error) {
                console.error('Erro ao buscar os dados', error)
            }
        }

        fetchData()
    }, [url])
    
    return { data }
}