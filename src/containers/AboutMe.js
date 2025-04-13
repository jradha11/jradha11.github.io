import React from "react";
import { Link } from "react-router-dom";

/* css imports */
import "../static/styles/containers/AboutMe.css";
import "../static/styles/CommonCss.css"
import "../static/styles/MediaQueries.css"


/* local imports */
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { PAGE_HEADING } from "../utils/AppConstants";
import Footer from "../components/Footer";
import * as URLS from "../utils/AppUrls";

import i1 from "../static/images/acrylics/i1.jpg";
import i2 from "../static/images/acrylics/i2.jpg";
import i3 from "../static/images/acrylics/i3.jpg";

/* img imports */

const AboutMe = () => {
    const header_data = PAGE_HEADING['ABOUT_ME'];

    return(
        <div className="about-me-wrapper">
            <Navbar/>
            <Header header_data={header_data} />
            <div className='page-content-container'>
                <p className='bold-blue-text primary-text-font'> Hi there 😊<br></br> I’m Radha. </p>
                <p className='light-theme-content primary-text-font'>
                <p className='bold-blue-text primary-text-font'> UI and UX</p>
                I have always been a naturally creative person, drawn to fields where I could make learning fun 
                and accessible. During my undergraduate years at IIT-Roorkee, I ventured into UI/UX with my
                college design group (<a href="https://www.instagram.com/ds_iitr/?hl=en" target="__blank" className="anchor-tag-link">
                Design Studio</a>) and completed a small UX project called Canteen Hub, reimagining my college’s 
                food delivery system. I published it on <a href="https://medium.com/@radhajayaraman11/canteen-hub-37cde226fa18" 
                target="__blank" className="anchor-tag-link">Medium</a>, where it received encouraging traction.
                
                <br></br>

                <p className='bold-blue-text primary-text-font'> Design and Development</p>
                While I enjoyed thinking through design problems, I became curious about how these ideas transform 
                into real-world applications. This led me to web development. I freelanced for a  <a href="https://sgpg.in/" 
                target="__blank" className="anchor-tag-link">CA firm</a>, building both the UI and backend of their Django-based website — my first experience seeing a project 
                through from a Figma board to a customer-facing product.
                <br></br>

                <p className='bold-blue-text primary-text-font'> Startup and Product</p>
                In 2020, a few seniors from college were starting an edtech venture focused on democratizing 
                education for undergraduates. I joined at an early stage, making major contributions to the website 
                and frontend on both design and engineering side. Over time, I transitioned into leading the development 
                of an onboarding portal for students, conceptualizing the product, drafting MVPs for the UI/UX, 
                and leading backend development. <i> This experience allowed me to wear multiple hats — from product management 
                to hands-on engineering — and gave me a full end-to-end perspective on product building.</i>
                <br></br>


                <p className='bold-blue-text primary-text-font'> Industry Experience at JPMorganChase</p>
                After graduating in 2022, I began my journey at JPMorgan Chase as an MLOps Intern. 
                Although I entered with little prior experience in cloud technologies, I quickly ramped up, 
                learning AWS, Terraform, and large-scale systems. Within just eight months, 
                I helped deliver a cost-optimized batch serving pipeline on AWS to deploy a machine learning 
                model for industry tag prediction. Our work was recognized with the prestigious JPMC Impact 
                Award, and I was promoted to Software Engineer 2 ahead of schedule. Since then, I've continued 
                deepening my expertise across MLOps and Data Engineering. More recently, I worked closely with 
                my teammates to build a data quality engine, where I led the engineering and 
                implementation side—integrating statistical models into existing data pipelines and ensuring 
                they scaled reliably in production environments.
                <br></br>

                Beyond project work, I have mentored two summer interns and driven their projects to completion, 
                and participated in JPMC’s Bangalore Hackathon, where our team ranked among the Top 10 for building 
                an LLM-powered engine for marketing and prospecting.
                <br></br>

                These days I am exploring Databricks to build and deploy ML workflows, constantly striving to blend engineering excellence with my passion for solving impactful problems.
                </p>
                <br></br>
                <p className='bold-blue-text primary-text-font'> Life after work </p>
                <p className='light-theme-content primary-text-font'>
                Outside of work, you’ll usually find me with a book in hand — I love diving into fiction as a way to relax and spark creativity. 
                I also play the guitar, which has been my favorite way to unwind and reset. 
                I'm deeply fascinated by how AI and LLMs are reshaping the world in ways we are just 
                beginning to grasp — often finding eerie parallels with <b> Orwell’s 1984 </b>. It’s a 
                thrilling time to be alive, and I’m excited to keep learning, building, and contributing to this next wave of technology.
                </p>
                <br/>
                <br/>

                {/* creative corner content */}
                <div className='creative-corner-container'>
                    <p className='section-heading bold-blue-text'>creative corner</p>
                    <div className='subheading-container'>
                        <p className='section-subheading primary-text-font'>few of tiny postcards I made using acrylics on 300gsm sheets.</p>
                        <Link to={URLS.CREATIVE_CORNER} id='view-more-postcard-web'>
                            <div className="view-more-link">
                                view more
                            </div>
                        </Link>
                    </div>
                    <div className='postcards-container'>
                        <img alt='img-1'  src={i1} className='postcards'/>
                        <img alt='img-2'  src={i2} className='postcards'/>
                        <img alt='img-3'  src={i3} className='postcards'/>
                        <Link to={URLS.CREATIVE_CORNER} id='view-more-postcard-mobile'>
                            view more
                        </Link>
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMe;