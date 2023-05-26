import { useState } from 'react'

const SearchField = ({ value, setValue, action }) => {

      const handle = (txt) => {
        setValue(txt)
        action(txt)
      }

      return(
        <div>
          <input type='text'
                 value={value}
                 onChange={ (e) => handle(e.target.value )}/>
        </div>
      )

}

export default SearchField