import { type ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NAVIGATION_CONSTANTS from '../constants/navigation'
import HomePage from '@pages/HomePage'
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout'

export default function Router(): ReactElement {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={NAVIGATION_CONSTANTS.HOME_APP} replace={true} />}
      />

      <Route
        path={NAVIGATION_CONSTANTS.HOME_APP}
        element={
          <AuthenticatedLayout withSideBar>
            <HomePage />
          </AuthenticatedLayout>
        }
      />
    </Routes>
  )
}
