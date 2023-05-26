import {useEffect, useState} from 'react'
import config from './config/config'
import useFetch from './hooks/useFetch'
import SearchBar from './components/SearchBar'
import List from './components/List'
import AppContext from './context/AppContext'

const App = () => {

  const [data, isLoaded] = useFetch(config.USER_ENDPOINT)
  const [filtered, setFiltered] = useState([])
  const [value, setValue] = useState('')

  useEffect( () => {
    if(isLoaded) setFiltered(data)
  }, [isLoaded])


  const clearSearch = () => {
    setValue('')
    setFiltered(data)
  }

  const filterData = (txt) => {
    const f = data.filter( item => (
                    item.username.toUpperCase().includes(txt.toUpperCase()) ||
                    item.email.toUpperCase().includes(txt.toUpperCase())
               ))
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
