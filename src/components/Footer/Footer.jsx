import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { user } = useAuth();
  return (
    <div className="bg-amber-600">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <footer
          className=" footer footer-horizontal footer-center text-white rounded p-10 flex flex-col space-y-6  items-center " >
          <div>
            <ul className="flex md:flex-row justify-center   space-x-2  items-center">
              <li>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/all-artifacts">
                  All-Artifacts
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/add-artifacts">
                  Add-Artifacts
                </Link>
              </li>
              <li>
                <Link className="text-white" to={`/shareartifacts/${user?.email}`}>
                  My-Artifacts
                </Link>
              </li>
              <li>
                <Link className="text-white" to={`/liked-artifacts/${user?.email}`}>
                  Liked Artifacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="grid grid-flow-col gap-4 justify-center">
              <a href='https://www.facebook.com/tariqul25' target='_blank'><p><FaFacebook size={28} /></p></a>
              <a href='https://www.linkedin.com/in/tariqul25/' target='_blank'><p><FaLinkedin size={28} /></p></a>
              <a href='https://github.com/tariqul25' target='_blank'><p><FaGithub size={28} /></p></a>
            </div>
          </div>

          <aside className="text-center">
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by{' '}
              <span className="font-bold text-black">Artifact</span>
              <span className="font-bold text-white">Atlas</span>
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
