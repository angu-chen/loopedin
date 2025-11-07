import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ViewAllProfiles from './components/ViewAllProfiles.tsx'
import SignIn from './components/SignIn.tsx'
import SignUpForm from './components/SignUpForm.tsx'
import Weather from './components/GeoLocator.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<SignIn />} />
    <Route path="/signUp" element={<SignUpForm />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
    <Route path="/weather" element={<Weather />} />
  </Route>,
)
