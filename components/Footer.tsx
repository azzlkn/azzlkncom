import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto container mx-auto pt-10">
      <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
        <p className="font-body font-light sm:pt-0">©2022 Aziz ALKAN.</p>

        <div className="flex items-center pt-5 sm:mr-0 sm:pt-0">
          <a href="https://github.com/azzlkn " target="_blank">
            <i className="text-4xl text-white hover:text-secondary  transition-colors bx bxl-github"></i>
          </a>

          <a href="https://medium.com/@azzlkn " target="_blank">
            <i className="text-4xl text-white pl-5 hover:text-secondary  transition-colors bx bxl-medium"></i>
          </a>

          <a href="https://www.linkedin.com/in/azzlkn" target="_blank">
            <i className="text-4xl text-white pl-5 hover:text-secondary  transition-colors bx bxl-linkedin-square"></i>
          </a>
          <a href="https://www.flickr.com/photos/azzlkn/" target="_blank">
            <i className="text-4xl text-white pl-5 hover:text-secondary  transition-colors bx bxl-flickr-square"></i>
          </a>
          <a href="https://www.twitter.com/azzlkn " target="_blank">
            <i className="text-4xl text-white pl-5 hover:text-secondary  transition-colors bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
