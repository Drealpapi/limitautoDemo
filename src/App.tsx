import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#1B6FDB] focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-semibold focus:text-sm focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
