import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavbar from '@/components/Layout/PublicNavbar'
import PublicFooter from '@/components/Layout/PublicFooter'

export default function PublicLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <PublicNavbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <PublicFooter />
        </div>
    )
}
