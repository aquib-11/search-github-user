import React, { useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const {loading} = useContext(GithubContext)
  if (loading){
    return (
      <main>
        <Navbar />
        <Search />
        <img alt="loading" className='loading-img' src={loadingImage}/>
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  );
};

export default Dashboard;
