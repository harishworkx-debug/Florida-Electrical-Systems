import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import ServicesLocationPage from '@/pages/ServicesLocationPage';
import { SERVICES, LOCATIONS } from '@/data/site';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const mainLoc = 'lakeland';

  const serviceRoutes = SERVICES.map((s) => (
    <Route key={`svc-${s.slug}`} path={`/${s.slug}-${mainLoc}`} element={<ServicePage />} />
  ));

  const electricianRoutes = LOCATIONS.map((l) => (
    <Route key={`loc-${l.slug}`} path={`/electrician-${l.slug}`} element={<LocationPage />} />
  ));

  const servicesLocRoutes = LOCATIONS.map((l) => (
    <Route key={`svcloc-${l.slug}`} path={`/electrical-services-${l.slug}`} element={<ServicesLocationPage />} />
  ));

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {serviceRoutes}
          {electricianRoutes}
          {servicesLocRoutes}
          <Route path="/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
      <StickyCallButton />
    </BrowserRouter>
  );
}

export default App;
