import { NAV_LINKS } from "../constants/links";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Header = () => {

  const {getCartQuantity} = useContext(ShopContext)
  return (
    <header className="container max-container z-50 sticky top-0 bg-white justify-between items-center py-3.5 shadow-sm">
      <NavLink
        to="/"
        className="flex items-center gap-2 hover:opacity-90"
      >
        <img
          src="/logo.png"
          alt="logo"
        />
        <span className="hidden md:block text-2xl text-neutral-900 font-semibold">
          SHOPPER
        </span>
      </NavLink>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-10 text-zinc-600 font-medium ">
          {NAV_LINKS.map((link) => (
            <li
              key={link.name}
              className="flex flex-col items-center justify-center"
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-black -mt-3 underline decoration-[3px] underline-offset-[10px] decoration-red-500 pointer-events-none font-medium"
                    : "hover:-mt-2 transition-all duration-300 active:text-red-700"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-10">
        <Link
          to="/login"
          className="px-12 py-3 flex items-center justify-center border border-neutral-500 text-neutral-600 font-medium text-xl bg-white rounded-full hover:bg-neutral-100 active:bg-zinc-300"
        >
          Login
        </Link>
        <Link to="/cart" className="relative pr-3 md:pr-0 md:right-2">
          <ShoppingCart />
          <span className="absolute -top-3 right-1 md:-right-3 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center ">
            {getCartQuantity()}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
