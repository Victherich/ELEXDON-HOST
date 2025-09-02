
import React from 'react'
import Hero from './Hero'
import AboutComponent from './AboutComponent'
import styled from 'styled-components'
import DomainSearch from './DomainSearch'
import ServicesShowcase from './ServicesShowcase'
import Features from './Features'
import TemplateShowcase from './TemplateShowcase'
import Border from './Border'
import Hero2 from './Hero2'
import Partners from './Partners'
import Partners2 from './Partners2'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const LandingPage = () => {

  const location = useLocation();


const Div = styled.div`
     background: #1488CC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // use timeout to ensure DOM is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);


  return (
    <Div>
      <Hero/>
      <DomainSearch/>
      <AboutComponent/>
      <Border/>
     
      
      <ServicesShowcase/>
      <Features/>
 <Partners/>
        <TemplateShowcase/>
        <Partners2/>
        
    </Div>
  )
}

export default LandingPage
