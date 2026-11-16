import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.services'), path: '/leistungen' },
    { name: t('nav.projects'), path: '/projekte' },
    { name: t('nav.pricing'), path: '/preise' },
    { name: t('nav.about'), path: '/ueber-uns' },
    { name: t('nav.contact'), path: '/kontakt' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#161616]/95 backdrop-blur-md border-b border-[#262626] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Studio Brandmark */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="font-['Manrope'] font-bold text-lg sm:text-xl tracking-tight text-[#F2F0EB]">
              ATELIER
            </span>
            <span className="w-1.5 h-1.5 bg-[#B8392D]" />
            <span className="text-xs font-mono tracking-wider text-[#A6A6A2] uppercase hidden sm:inline">
              München
            </span>
          </Link>

          {/* Precision Editorial Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-tight transition-colors py-1 ${
                    isActive
                      ? 'text-[#F2F0EB] border-b border-[#B8392D]'
                      : 'text-[#A6A6A2] hover:text-[#F2F0EB]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action & Language Switch (DE / EN / RU) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center text-xs font-mono text-[#A6A6A2] divide-x divide-[#262626]">
              <button
                type="button"
                onClick={() => setLang('de')}
                className={`pr-2 cursor-pointer transition-colors ${lang === 'de' ? 'text-[#F2F0EB] font-bold' : 'hover:text-[#F2F0EB]'}`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 cursor-pointer transition-colors ${lang === 'en' ? 'text-[#F2F0EB] font-bold' : 'hover:text-[#F2F0EB]'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ru')}
                className={`pl-2 cursor-pointer transition-colors ${lang === 'ru' ? 'text-[#F2F0EB] font-bold' : 'hover:text-[#F2F0EB]'}`}
              >
                RU
              </button>
            </div>

            <Link
              to="/termin"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#F2F0EB] text-[#F2F0EB] hover:bg-[#F2F0EB] hover:text-[#161616] text-xs font-medium uppercase tracking-wider transition-all duration-200"
            >
              <span>{t('nav.book')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile Lang Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center text-xs font-mono border border-[#262626] divide-x divide-[#262626]">
              <button
                type="button"
                onClick={() => setLang('de')}
                className={`px-1.5 py-1 ${lang === 'de' ? 'text-[#F2F0EB] bg-[#262626]' : 'text-[#A6A6A2]'}`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 py-1 ${lang === 'en' ? 'text-[#F2F0EB] bg-[#262626]' : 'text-[#A6A6A2]'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ru')}
                className={`px-1.5 py-1 ${lang === 'ru' ? 'text-[#F2F0EB] bg-[#262626]' : 'text-[#A6A6A2]'}`}
              >
                RU
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[#F2F0EB] hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#161616] flex flex-col justify-between pt-28 pb-10 px-8 border-b border-[#262626]">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A6A6A2]">
                Navigation
              </span>
              <div className="flex items-center gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setLang('de')}
                  className={`px-2 py-1 ${lang === 'de' ? 'bg-[#B8392D] text-white font-bold' : 'text-[#A6A6A2]'}`}
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-2 py-1 ${lang === 'en' ? 'bg-[#B8392D] text-white font-bold' : 'text-[#A6A6A2]'}`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ru')}
                  className={`px-2 py-1 ${lang === 'ru' ? 'bg-[#B8392D] text-white font-bold' : 'text-[#A6A6A2]'}`}
                >
                  RU
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light text-[#F2F0EB] hover:text-[#B8392D] transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-[#262626]">
            <Link
              to="/termin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 border border-[#F2F0EB] text-[#F2F0EB] text-center text-xs font-medium uppercase tracking-wider block hover:bg-[#F2F0EB] hover:text-[#161616] transition-colors"
            >
              {t('nav.book')}
            </Link>
            <div className="text-xs font-mono text-[#A6A6A2] space-y-1">
              <p>Schleißheimer Straße 418 · München</p>
              <p>+49 89 2109 4580</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
