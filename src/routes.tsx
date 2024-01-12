import { createRoutesFromElements, Route } from 'react-router-dom'
import { ContactUs, PrivacyPolicy, TermsOfUse } from './pages'

export const LINKS = {
  privacyPolicy: '/privacy-policy',
  termsOfUse: '/terms-of-use',
  contactUs: '/contact-us'
}

const routes = createRoutesFromElements(
  <>
    <Route path={LINKS.privacyPolicy} element={<PrivacyPolicy />} />
    <Route path={LINKS.termsOfUse} element={<TermsOfUse />} />
    <Route path={LINKS.contactUs} element={<ContactUs />} />
    <Route path='/*' element={<ContactUs />} />
  </>
)

export default routes
