import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CountryProvider } from './context/CountryContext';
import { HelmetProvider } from 'react-helmet-async';
import { seedBlogPosts } from './services/blogService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { MessageCircle } from 'lucide-react';
import Homepage from './pages/Homepage';
import PlatformOverview from './pages/PlatformOverview';
import ProductsHub from './pages/ProductsHub';
import FluideJobs from './pages/FluideJobs';
import FluideHR from './pages/FluideHR';
import FluidePayroll from './pages/FluidePayroll';
import FluidePay from './pages/FluidePay';
import FluidePulse from './pages/FluidePulse';
import FluideBank from './pages/FluideBank';
import FluideBooks from './pages/FluideBooks';
import FluideStock from './pages/FluideStock';
import FluideProtect from './pages/FluideProtect';
import FluideLite from './pages/FluideLite';
import ForBusinesses from './pages/ForBusinesses';
import ForEmployees from './pages/ForEmployees';
import ForPartners from './pages/ForPartners';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import EoR from './pages/EoR';
import OutsourcePayroll from './pages/OutsourcePayroll';
import Services from './pages/Services';
import ConsultingHub from './pages/services/ConsultingHub';
import ConsultingCategory from './pages/services/ConsultingCategory';
import ConsultingService from './pages/services/ConsultingService';
import CountryLanding from './pages/CountryLanding';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Onboarding from './pages/Onboarding';
import ProductOnboarding from './pages/ProductOnboarding';

const BlogSeeder = () => {
  const { user } = useAuth();
  
  React.useEffect(() => {
    if (user && user.email === 'talentedforce2@gmail.com') {
      seedBlogPosts();
    }
  }, [user]);

  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuthOrOnboarding = location.pathname === '/onboarding';
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  if (isAuthOrOnboarding) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy selection:bg-brand-navy selection:text-brand-cyan flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      <button
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-brand-navy text-white rounded-full shadow-2xl hover:bg-brand-navy/90 hover:scale-105 transition-all group"
        aria-label="Contact Support"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-brand-navy text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Contact Support
        </span>
      </button>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CountryProvider>
          <AuthProvider>
            <BlogSeeder />
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/platform" element={<PlatformOverview />} />
                  <Route path="/products" element={<ProductsHub />} />
                  <Route path="/products/jobs" element={<FluideJobs />} />
                  <Route path="/products/hr" element={<FluideHR />} />
                  <Route path="/products/payroll" element={<FluidePayroll />} />
                  <Route path="/products/pay" element={<FluidePay />} />
                  <Route path="/products/pulse" element={<FluidePulse />} />
                  <Route path="/products/bank" element={<FluideBank />} />
                  <Route path="/products/books" element={<FluideBooks />} />
                  <Route path="/products/stock" element={<FluideStock />} />
                  <Route path="/products/protect" element={<FluideProtect />} />
                  <Route path="/products/lite" element={<FluideLite />} />
                  <Route path="/for-businesses" element={<ForBusinesses />} />
                  <Route path="/for-employees" element={<ForEmployees />} />
                  <Route path="/for-partners" element={<ForPartners />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/services/eor" element={<EoR />} />
                  <Route path="/services/outsource-payroll" element={<OutsourcePayroll />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/consulting" element={<ConsultingHub />} />
                  <Route path="/services/consulting/:categoryId" element={<ConsultingCategory />} />
                  <Route path="/services/consulting/:categoryId/:serviceId" element={<ConsultingService />} />
                  <Route path="/country/:countryCode" element={<CountryLanding />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/onboarding/:productId" element={<ProductOnboarding />} />
                </Routes>
              </Layout>
            </Router>
          </AuthProvider>
        </CountryProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
