import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ViewAllProfiles from './components/ViewAllProfiles.tsx'
import News from './components/News.tsx'
import SignIn from './components/SignIn.tsx'
import SignUpForm from './components/SignUpForm.tsx'
import ViewAllGroups from './components/ViewAllGroups.tsx'
import Weather from './components/GeoLocator.tsx'
import ViewProfileWithId from './components/ViewProfileWithId.tsx'
import AuthId from './components/AuthId.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<SignIn />} />
    <Route path="/signUp" element={<SignUpForm />} />
    <Route path="/home" element={<AuthId />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
    <Route path="/groups" element={<ViewAllGroups />} />
    <Route path="/news" element={<News />} />
    <Route path="/weather" element={<Weather />} />
    <Route path="/profiles/:id" element={<ViewProfileWithId />} />
  </Route>,
)
