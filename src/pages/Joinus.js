import React from 'react';
import { FaFacebook ,FaTwitter , FaWhatsapp } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { CContainer } from '@coreui/react'
import { CRow } from '@coreui/react'
import { CCol } from '@coreui/react'
import NavBar from '../components/NavBar';


export const Joinus = () => {

  const handleMouseEvent = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#252422";

  }
  const handleMouseEvent1 = (e) => {
    e.target.style.backgroundColor = "#EB5E28";
    e.target.style.color = "#252422";

  }
  const year = new Date().getFullYear();

  const foot={
    background: "#252422" ,
     width: "100%",
      height: "240px" ,
      bottom: "0%" , 
      left: "0%"

  } 

  const page={
    backgroundColor: "#FFFCF2",
     height: "1200px",
      width: "100%",
} 

const box1={
  background: "#252422" ,
  height:"600px",
  width: "540px",
  borderRadius: "50px",
  left: "17%" ,
  top: "17%" 
}

const box2={
  background: "#252422" ,
  height:"600px",
  width: "540px",
  borderRadius: "50px",
  right: "17%" ,
  top: "17%" 
}

  return (

   
          <CContainer fluid style = {{...page , position: 'relative'}}>

              <CRow>
                <NavBar style={{position: 'absolute' , top: "0%"}}></NavBar>
              </CRow>

          <h1 className="tex1111">JOIN US </h1>
            <CRow>
              <CCol sm="auto">
                  <div style = {{...box1 , position: 'absolute' }}></div>
                  <h1 style = {{position: 'absolute' ,left: "22.5%", color: "#FFFFFF" , top: "19%" }}>GYM ORGANIZAION</h1>
                  <h2 style = {{position: 'absolute',   color: "#FFFFFF" ,fontsize: "100%", width: "12%" , textalign: 'center' ,lineheight:" 125%" , top: "35%", left:"27%"}}
                  > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

                  <Button style = {{position: 'absolute', height:"1.3cm" , width: "19%" ,color:"#252422", borderRadius:"22px"
                   ,backgroundColor: "#EB5E28" ,boxShadow: "3px 3px 2px rgba(46, 46, 46, 0.62)",left: "23%" , top: "61%"}} size="lg" href="/Joinus1"
                  onMouseEnter={handleMouseEvent}
                  onMouseLeave={handleMouseEvent1} 
                  >Join us</Button>  
              </CCol>

              <CCol sm="auto"> 
                  <h1 style = {{...box2 , position: 'absolute'}}></h1>
                  <h1 style = {{position: 'absolute' ,right: "20.5%", color: "#FFFFFF" , top: "19%" }}>COACH OR NUTRITION</h1>
                  <h2  style = {{position: 'absolute',   color: "#FFFFFF" ,fontsize: "100%", width: "12%" , textalign: 'center' ,lineheight:" 125%" , top: "35%", right:"27%"}}
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>

                  <Button size="lg" href="/Joinus2" 
                  onMouseEnter={handleMouseEvent}
                  onMouseLeave={handleMouseEvent1} 
                  style={{position: 'absolute', height:"1.3cm" , width: "19%" ,color:"#252422", borderRadius:"22px" ,
                  backgroundColor: "#EB5E28" ,boxShadow: "3px 3px 2px rgba(46, 46, 46, 0.62)" ,right: "23%" , top: "61%"}}
                  >Join us</Button> 
              </CCol>
            </CRow>

            <CRow>
            <div>
        <div className="" style={{...foot , position: 'absolute'}}>
            <footer  style={{textAlign:"center" , color:"#FFFFFF" , width: "100%", position: 'absolute', top: '60px'}}>
            <span> 
            <a href="https://www.twitter.com">
              <FaTwitter className="icon" size={32} color= '#00acee' />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook className="icon" size={32} color='#3b5998' />
            </a>
            <a href="https://www.whatsapp.com">
              <FaWhatsapp className="icon" size={32} color='#25D366' />
            </a>
            </span>
            <h6>+962 777777777</h6>
            <h6>intelliGym@info.com</h6>
            <p>
              &copy; <span>{year}</span> Copyright All Rights Reserves
            </p>
          </footer>

        </div>  
            </div> 
            </CRow>
            
          </CContainer>


  );
};

export default Joinus;
