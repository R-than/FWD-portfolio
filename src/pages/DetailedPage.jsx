import React from 'react';
import '../index.css';
import Cursor from '../components/Cursor';
import HamburgerTwo from '../components/HamburgerTwo';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { useParams } from 'react-router-dom';
import projectDetail from '../data/projectDetail.json';
import Detail from '../components/Detail';


const DetailedPage = () => {

  const {name}= useParams () ; 
  
  const project = projectDetail.find(el => el.name == name);
  console.log(project)

  return (
  <div>
     <Cursor/>
    <HamburgerTwo />
    <Detail project={project}/>
    <Contact />
    <Footer />
  </div>
  );
}

export default DetailedPage;