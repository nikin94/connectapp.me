import { createRoutesFromElements, Route } from 'react-router-dom'
import { ContactUs, MediaRequirements, PrivacyPolicy, TermsOfUse } from './pages'

export const LINKS = {
  privacyPolicy: '/privacy-policy',
  termsOfUse: '/terms-of-use',
  contactUs: '/contact-us',
  mediaRequirements: '/media-requirements'
}

const routes = createRoutesFromElements(
  <>
    <Route path={LINKS.privacyPolicy} element={<PrivacyPolicy />} />
    <Route path={LINKS.termsOfUse} element={<TermsOfUse />} />
    <Route path={LINKS.contactUs} element={<ContactUs />} />
    <Route path={LINKS.mediaRequirements} element={<MediaRequirements />} />
    <Route path='/*' element={<ContactUs />} />
  </>
)

export default routes
