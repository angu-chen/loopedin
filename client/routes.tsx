import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ViewAllProfiles from './components/ViewAllProfiles.tsx'
import News from './components/News.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ViewAllProfiles />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
    <Route path="/news" element={<News />} />
  </Route>,
)
