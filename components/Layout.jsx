import Head from "next/head";
import { Navbar, Button } from "flowbite-react";
import Link from "next/link";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicDiv = dynamic(() => import('../components/LogoutDiv'), {
  ssr: false,
})

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Museo NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="fixed w-full z-50">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Museo NFT
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 items-center gap-x-2">
            <Suspense fallback={`Loading...`}>
              <DynamicDiv />
            </Suspense>

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <div className="h-8 flex items-center text-lg hover:text-blue-700">
              <Link href="/">Inicio</Link>
            </div>
            <div className="h-8 flex items-center text-lg hover:text-blue-700">
              <Link href="/visitas">Visitas</Link>
            </div>
            <div className="h-8 flex items-center text-lg hover:text-blue-700">
              <Link href="/info">Info</Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <main className="w-full h-screen pt-14 bg-slate-100 px-1">
        {children}
      </main>
    </>
  );
}

export default Layout;
