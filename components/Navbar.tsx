import React from 'react';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <div className="container mx-auto py-6 lg:py-10">
      <div className="flex items-center justify-between py-8 px-3">
        <a href="/">
          <img className="w-16 h-16 rounded-full" alt="s" src="/images/azzlkn.jpg" />
        </a>
        <nav>
          <section className="flex lg:hidden">
            <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>

            <div
              className={
                isNavOpen
                  ? 'flex absolute w-full h-screen top-0 left-0 bg-dark z-10 flex-col justify-evenly items-center'
                  : 'hidden'
              }
            >
              <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-8 w-8 text-color-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px] text-white">
                <li className="border-b  my-8 uppercase">
                  <a href="/">Anasayfa</a>
                </li>
                <li className="border-b  my-8 uppercase">
                  <a href="/posts">Yazılar</a>
                </li>
                <li className="border-b  my-8 uppercase">
                  <a href="/videos">Videolar</a>
                </li>
                <li className="border-b  my-8 uppercase">
                  <a href="https://www.flickr.com/photos/azzlkn/" target="_blank">
                    Fotoğraflar
                  </a>
                </li>
                <li className="border-b  my-8 uppercase">
                  <a href="/luminar">Bülten</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="hidden space-x-8 lg:flex text-white">
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <a href="/posts">Yazılar</a>
            </li>
            <li>
              <a href="/videos">Videolar</a>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/azzlkn/" target="_blank">
                Fotoğraflar
              </a>
            </li>
            <li>
              <a href="/luminar">Bülten</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
