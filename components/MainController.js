import Logo from "./Logo"
import Navigation from "./Navigation"

import Head from "next/head";
import styless from '../styles/header.module.css'
import Footer from "./Footer";

const MainController = ({ children, title, keyW, description }) => {
  return (
    <>
      <Head>
        <title>AWDESING {title}</title>
        <meta name="keywords" content={keyW} />
        <meta name="description" content={description} />
      </Head>
      <header className={styless.header}>
        <Logo />
        <div className="navbar">
          <Navigation href={'/'} text={'Главная'} />
          <Navigation href={'/works'} text={'Работы'} />
          <Navigation href={'/offers'} text={'Предложения'} />
          <Navigation href={'/contacts'} text={'Контакты'} />
        </div>
      </header>
      <div className="content">
        {children}
      </div>
      <Footer />
    </>
  )
};

export default MainController;