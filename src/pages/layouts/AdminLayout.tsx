import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdimLayout = (props: Props) => {
    return (
    <div>
        <header>Header Adimn</header>
        <aside>Menu Admin</aside>
        <main>
            <Outlet />
        </main>
    </div>
    )
}

export default AdimLayout