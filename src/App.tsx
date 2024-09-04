import React, { useRef, useEffect, useState } from 'react';
import './App.css';

interface Link {
  name: string;
  path: string;
}
const App: React.FC = () => {
  const links: Link[] = [
    { name: "Home", path: "/Home" },
    { name: "Product", path: "/product" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "StyleGuide", path: "/styleGuide" },
    { name: "BeBi", path: "/BeBi" }
  ];
  const topMenuRef = useRef<HTMLUListElement | null>(null);
  const toggleMenuIconRef = useRef<SVGSVGElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const topMenu = topMenuRef.current;
      const toggleMenuIcon = toggleMenuIconRef.current;

      if (toggleMenuIcon && toggleMenuIcon.contains(e.target as Node)) {
        setIsMenuOpen(prev => !prev);
      } else if (topMenu && !topMenu.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className='contents-wrapper font-karlar max-w-screen-2xl text-base mx-auto px-8'>
        <header className='p-6 mx-auto'>
          <nav className='flex flex-row justify-between relative'>
            <div className='logo basis-2/6 text-center text-xl font-semibold cursor-pointer'>
              GauCoffee.
            </div>
            <ul
              ref={topMenuRef}
              className={`basis-3/6 lg:basis-1/6 ${isMenuOpen ? 'bb-topmenu-expanded' : 'hidden'} lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium`}>
              {links.map(link => (
                //bb-top-menu-item-active dùng useState cho nó nếu dường dẫn == trang thì =bb-top-menu-item-active
                <li key={link.path} className={`bb-top-menu-item ${window.location.pathname === link.path ? 'bb-top-menu-item-active' : ''}`}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
            <ul className='basis-1/6 flex lg:justify-start justify-end items-center ml-16 uppercase text-sm text-gray-500 font-medium'>
              <li id='bb-top-menu-item' className='bb-top-menu-item'>
                <a href="#" className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bb-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className='mx-2'>Cart</span>
                  <span className='bb-badge bg-slate-600 text-white'>99</span>+
                </a>
              </li>
            </ul>
            <div className='basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4'>
              <svg
                ref={toggleMenuIconRef}
                id='bb-top-tonggle-menu-icon'
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="bb-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>
          </nav>
        </header>
        <main>
          <div className="slider h-[530px] bg-silder-bg bg-cover  bg-no-repeat bg-bottom ">
            <div className='w-full h-full  flex justify-center items-center bg-gray-900 bg-opacity-35'>
              <div className='mx-16 text-white text-center'>
                <div className='uppercase text-sm mb-6'>Best place to buy coffee</div>
                <div className='font-medium text-5xl mb-6'>Gau Coffee Mugs</div>
                <div className=''>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
                <div className='flex justify-center mt-5'>
                  <div className='uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-8 text-xs font-medium cursor-pointer hover:bg-opacity-95'>Explore Our Products</div>
                </div>
              </div>
            </div>
          </div>
          <div className='story'>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='px-4 sm:px-32 lg:px-64 xl:px-96 py-32 text-center '>
                <div className='text-3xl mb-6 leading-10 '>Even the all-powerful Pointing has no control about the blind texts.</div>
                <div className='text-gray-500 leading-7 mb-6'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                <div><a href="" className='text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 left-0 after:left-0
                  after:bg-coffee-200 hover:after:bg-coffee-600 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-500 '>Read the full Story</a></div>
              </div>
            </div>
          </div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>Featured Mugs</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          <div className='featured_mugr'>featured_mugr</div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>more_products</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          <div className='more_products'>more_products</div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>Buy 2 mugs and get a coffee magazine free</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          <div className='coffee-magarine'>Buy 2 mugs and get a coffee magazine free</div>
          <div className='bb-subheadline '>
            <div className='bb-subheadline-deco-line '></div>
            <div className='bb-subheadline-label uppercase mx-4 tracking-widest text-gray-500 font-medium text-[14px]'>
            Behind the mugs, lifestyle stories</div>
            <div className='bb-subheadline-deco-line '></div>
          </div>
          <div className='lifestyle_stories'>Behind the mugs, lifestyle stories</div>
          <div className='subscribe-us'>subscribe-us</div>
        </main>
        <footer>Đây là foodter</footer>
      </div>
    </>
  );
};
export default App;