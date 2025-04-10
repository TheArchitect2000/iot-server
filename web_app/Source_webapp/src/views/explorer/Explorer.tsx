import { setSideNavCollapse, useAppDispatch } from '@/store'
import React, { useEffect } from 'react'

const ExplorerIframe: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setSideNavCollapse(true))

        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 2000)
    }, [])

    return (
        <iframe
            title="Remix IDE"
            src="https://explorer.fidesinnova.io/"
            style={{ width: '100%', height: '84vh', border: 'none' }}
        />
    )
}

export default ExplorerIframe
