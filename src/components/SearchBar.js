import { useState, useEffect, useContext } from 'react'
import SearchField from "./SearchField";
import Button from './Button'

import AppContext from '../context/AppContext'

const SearchBar = () => {

  const ctx = useContext(AppContext)

  return(
    <div>
      <SearchField value={ctx.value }
                   setValue={ctx.setValue}
                   action={ctx.filterData}/>
      <Button action={ctx.clearSearch}/>
    </div>
  )

}

export default SearchBar