import { type ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import NAVIGATION_CONSTANTS from '../constants/navigation'
import HomePage from '@pages/HomePage'

export default function Router(): ReactElement {
  return (
    <Routes>
      <Route path={NAVIGATION_CONSTANTS.HOME_APP} element={<HomePage />} />
    </Routes>
  )
}
