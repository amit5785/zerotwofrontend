import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const WithFooter = () => {
  return (
    <>
    <Outlet />
    <Footer />
    </>
  )
}

export default WithFooter;