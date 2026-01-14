import Logo from '../common/ui/Logo';
import { Menu, ShoppingCart, X } from 'lucide-react';
import HeaderAuthButtons from '../common/section/HeaderAuthButtons';
import { useState } from 'react';
import Usermenu from './Usermenu';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

const Header = () => {
  const { isAuthenticated } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenu = () => setShowMenu((prev) => !prev);

  return (
    <header className="w-full bg-slate-100">
      <div className="px-2 md:px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <Logo size="text-3xl" />

        <Nav viewClass="desktop-nav" />

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <HeaderAuthButtons color="text-sky-600" />
          </div>

          {isAuthenticated && (
            <Link to="/cart" className="cursor-pointer relative">
              <ShoppingCart className="text-sky-800" />
              <span className="-top-2.5 left-3.5 absolute w-6 h-6 bg-red-500 rounded-full text-white font-semibold center">
                5+
              </span>
            </Link>
          )}

          <Usermenu />

          <Menu size="30px" className="cursor-pointer md:hidden" onClick={onShowMenu} />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 w-95 min-h-screen	bg-slate-600  transition ${
          !showMenu ? 'translate-x-full' : ''
        }`}
      >
        <div className="p-2 flex justify-end">
          <X className="text-slate-50 cursor-pointer" size="30px" onClick={onShowMenu} />
        </div>

        <div className="px-6 py-6">
          <Nav viewClass="mobile-nav" />
          <HeaderAuthButtons color="text-slate-200 mt-20" />
        </div>
      </div>
    </header>
  );
};

export default Header;
