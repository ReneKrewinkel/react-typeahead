import { useState, useEffect } from "react"


const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoaded(true)
      })
  }, [url])

  return [data, data, isLoaded]
}

export default useFetch;