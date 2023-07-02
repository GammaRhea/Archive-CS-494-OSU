import { useEffect, useState } from 'react'

function useWeatherSearch(query) {
    const [ forecast, setForecast ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchWeatherResults() {
            setLoading(true)
            let responseBody = {}
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`,
                    //`https://api.openweathermap.org/data/2.5/forecast?q=Corvallis&appid=690d0a23bed3f9c1cc6e86aa0553669d`,
                    { signal: controller.signal }
                )
                console.log("Response: ", response)
                if (response.status !== 200) {
                    console.log("== status: ", response.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await response.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("HTTP Request Cancelled")
                } else {
                    setError(true)
                    console.error("Error:", e)
                    throw e
                }
            }

            if (!ignore) {
                setForecast(responseBody.list || [])
                console.log("Response Body: ", responseBody)
                setLoading(false)
            }
        }
        if(query) {
            fetchWeatherResults()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [ query ])

    return [ forecast, loading, error ]
}

export default useWeatherSearch