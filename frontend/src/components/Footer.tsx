import { FOOTER_LINKS, SOCIAL_LINKS } from '../constants/links'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="max-container container flex-col items-center justify-center gap-10 mb-8 mt-20">
      <div className="flex items-center gap-4">
        <img
          src="/logo_big.png"
          alt="logo"
        />
        <span className="hidden md:block text-[2.7rem] text-neutral-700 font-bold">
          SHOPPER
        </span>
      </div>

      <nav className="flex flex-col md:flex-row gap-5 md:gap-12">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.name}
            to={link.link}
            className="text-neutral-800 text-xl "
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-5">
        {SOCIAL_LINKS.map((social) => (
          <Link
            key={social.name}
            to={social.link}
            className='p-2.5 pb-1.5 bg-zinc-50 border border-gray-200'
          >
            <img
              src={social.image}
              alt={social.name}
            />
          </Link>
        ))}
      </div>

      <div className="w-full grid place-items-center gap-7 text-zinc-900 text-xl ">
        <hr className='h-1 w-full bg-stone-300' />
        <p className="">
          Copyright &copy; {new Date().getFullYear()} - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer