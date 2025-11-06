import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import ViewAllProfiles from './components/ViewAllProfiles.tsx'
import News from './components/News.tsx'
import SignIn from './components/SignIn.tsx'
import SignUpForm from './components/SignUpForm.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<SignIn />} />
    <Route path="/signUp" element={<SignUpForm />} />
    <Route path="/profiles" element={<ViewAllProfiles />} />
    <Route path="/news" element={<News />} />
  </Route>,
)
