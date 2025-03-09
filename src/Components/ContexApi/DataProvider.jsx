import React, { useState } from 'react'
import { Contex } from './Contex'

const DataProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    

    const dataInfo = {
        count
    }
    return (
        <Contex.Provider value={dataInfo}>
            {children}
        </Contex.Provider>
    )
}

export default DataProvider