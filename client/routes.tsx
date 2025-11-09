import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import ViewAllProfiles from './components/ViewAllProfiles'
import News from './components/News'
import SignIn from './components/SignIn'
import SignUpForm from './components/SignUpForm'
import ViewAllGroups from './components/ViewAllGroups'
import ViewSingleGroup from './components/ViewSingleGroup' // ✅ fixed import
import Weather from './components/GeoLocator'
import ViewProfileWithId from './components/ViewProfileWithId'
import LoadAuthId from './components/LoadAuthId'
import AllPosts from './components/AllPosts'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<SignIn />} />
    <Route path="/signUp" element={<SignUpForm />} />
    <Route path="/all-posts" element={<AllPosts />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
    <Route path="/groups" element={<ViewAllGroups />} />
    <Route path="/groups/:id" element={<ViewSingleGroup />} /> {/* ✅ single group route */}
    <Route path="/news" element={<News />} />
    <Route path="/weather" element={<Weather />} />
    <Route path="/profiles/:id" element={<ViewProfileWithId />} />
    <Route path="/profile" element={<LoadAuthId />} />
  </Route>,
)
