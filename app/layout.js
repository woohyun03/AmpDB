// layout.js
import Link from "next/link";
import './globals.css';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
      <div className="container">
          <div className="navbar">
            <Image src="/amplifyLOGO.png" alt="Amplify Logo" width={250} height={80} />
              <div className="buttons">
                  <Link href="/">
                      <span className="button">Home</span>
                  </Link>
                  <Link href="/list">
                      <span className="button">Startups List</span>
                  </Link>
              </div>
          </div>
          {children}
      </div>
  );
};


export default Layout;
