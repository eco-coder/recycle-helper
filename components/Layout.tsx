import React, { FC, useContext } from 'react'

import { GlobalContext } from '../pages/_app'
import styles from '../styles/Layout.module.sass'

const Layout: FC = ({ children }) => {

    const { setCount, count } = useContext(GlobalContext)

    return (
        <div className={styles.container} >
            <button onClick={() => setCount(count + 1)} >+</button>
            <button onClick={() => setCount(count - 1)} >-</button>
            {children}
        </div>
    )
}

export default Layout
