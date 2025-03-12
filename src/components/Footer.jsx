import React from 'react';

function Footer() {
  return (
    <footer className="bg-transparent text-white px-4 mx-8 mt-20">
      
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm">
             Email:- abhayvashishth@gmail.com
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/abhayV420"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-vashishth-422917349?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/abhayvashishthh?t=r_pKK4bjaI8Sd0OtuPH_-A&s=03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          {/* Add more social links as needed */}
        </div>
      
      </div>
    </footer>
  );
}

export default Footer;