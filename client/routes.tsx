import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ViewAllProfiles from './components/ViewAllProfiles.tsx'
import News from './components/News.tsx'
import SignUpForm from './components/SignUpForm.tsx'
import ViewAllGroups from './components/ViewAllGroups.tsx'
import Weather from './components/GeoLocator.tsx'
import ViewProfileWithId from './components/ViewProfileWithId.tsx'
import LoadAuthId from './components/LoadAuthId.tsx'
import AllPosts from './components/AllPosts.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<AllPosts />} />
    <Route path="/signUp" element={<SignUpForm />} />
    <Route path="/all-posts" element={<AllPosts />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
    <Route path="/groups" element={<ViewAllGroups />} />
    <Route path="/news" element={<News />} />
    <Route path="/weather" element={<Weather />} />
    <Route path="/profiles/:id" element={<ViewProfileWithId />} />
    <Route path="/profile" element={<LoadAuthId />} />
  </Route>,
)
