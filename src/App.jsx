import './App.css'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main'
import Footer from './components/footer/Footer';
import Task from './components/Task/Task';
import { Suspense, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const loadData = fetch('/data.json')
  .then (res => res.json());

  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
    <Navbar></Navbar>
    <Main  inProgressCount={inProgressCount} resolvedCount={resolvedCount} ></Main>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
    <Task loadData={loadData}
    setInProgressCount={setInProgressCount}
        setResolvedCount={setResolvedCount}
    >  </Task>
    </Suspense>

    <Footer></Footer>



    <ToastContainer position="top-right" autoClose={1800} newestOnTop />


    </>
  )
}

export default App
