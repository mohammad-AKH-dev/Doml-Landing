import React, { useState } from "react";
import Company from "./modules/Company";

function Companies() {
    const [companies,setCompanies] = useState([
        {id: 1 , title:'airbnb', path: '/images/companies/Airbnb.png'},
        {id: 2 , title:'adobe', path: '/images/companies/Adobe.png'},
        {id: 3 , title:'airtel', path: '/images/companies/airtel.png'},
        {id: 4 , title:'cloud', path: '/images/companies/cloud.png'},
        {id: 5 , title:'cocacola', path: '/images/companies/Coca Cola.png'},
        {id: 6 , title:'creative-cloud', path: '/images/companies/Creative Cloud.png'},
        {id: 7 , title:'dangote', path: '/images/companies/Dangote.png' , darkPath: '/images/companies/dark-dangote.png'},
        {id: 8 , title:'discord', path: '/images/companies/Discord.png'},
        {id: 9 , title:'ebay', path: '/images/companies/Ebay.png'},
        {id: 10 , title:'Facebook', path: '/images/companies/Facebook.png'},
        {id: 11, title:'FirstBank', path: '/images/companies/FirstBank.png', darkPath: '/images/companies/dark-firstbank.png'},
        {id: 12 , title:'netflix', path: '/images/companies/Netflix.png'},
        {id: 13 , title:'mtn', path: '/images/companies/mtn.png'},
        {id: 14 , title:'paga', path: '/images/companies/paga.png', darkPath: '/images/companies/dark-paga.png'},
        {id: 15 , title:'spotify', path: '/images/companies/Spotify.png'},
        {id: 16 , title:'uba', path: '/images/companies/uba.png'},
        {id: 17, title:'paypal', path: '/images/companies/Paypal.png'},
        {id: 18 , title:'zoom', path: '/images/companies/Zoom.png'},
    ])
  return (
    <section className="companies-section container mx-auto mt-24">
      <div className="companies-section__content-wrapper flex items-center justify-center mx-auto gap-12 gap-x-6 md:gap-x-12 lg:gap-x-16 xl:gap-x-35 flex-wrap">
        {
            companies.map(company => <Company key={company.id} {...company}/>)
        }
      </div>
    </section>
  );
}

export default Companies;
