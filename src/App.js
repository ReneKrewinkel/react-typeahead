import {useEffect, useState} from 'react'
import config from './config/config'
// import useFetch from './hooks/useFetch'
import SearchBar from './components/SearchBar'
import List from './components/List'
import AppContext from './context/AppContext'

const App = () => {

  const [data, setData] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch(config.USER_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFiltered(data)
        setLoaded(true)
      })
  }, [])

  const clearSearch = () => {
    setValue('')
    setFiltered(data)
  }

  const filterData = (txt) => {
    const f = data.filter( item => item.username.toUpperCase().includes(txt.toUpperCase()))
    setFiltered(f)
  }

  return(
    <AppContext.Provider value={{  value, setValue, filterData, clearSearch }}>
      { isLoaded &&
        <div>
          <SearchBar />
          <List data={ filtered } />
        </div>
      }
    </AppContext.Provider>
  )
}


export default App
