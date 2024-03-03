import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const checkActive = (href) => {
    if ((router.pathname.includes(href) && href !== '/') || router.pathname === href) {
      return 'text-dark border-b';
    }
    return 'text-gray';
  };

  return (
    <div className="container mx-auto pb-16 pt-10 px-3 md:px-0">
      <nav>
        <ul className="flex justify-between">
          <li>
            <a className={checkActive('/')} href="/">
              hakkımda
            </a>
          </li>
          <li>
            <a className={checkActive('/posts')} href="/posts">
              yazılarım
            </a>
          </li>
          <li>
            <a className={checkActive('/videos')} href="/videos">
              videolar
            </a>
          </li>
          <li>
            <a className={checkActive('/photos')} href="/photos">
              fotoğraflar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
