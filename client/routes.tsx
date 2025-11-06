import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ViewAllProfiles from './components/ViewAllProfiles.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ViewAllProfiles />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
  </Route>,
)
