import React from 'react';

function Footer() {
  return (
    <footer className="bg-transparent text-white py-12 px-4 mx-8">
      
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm">
             Abhay Vashishth
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
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