import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>About The Resume Hero</h2>
        <p>
          At <strong>The Resume Hero</strong>, we believe that crafting the perfect resume and cover letter should be effortless, empowering, and accessible to everyone. 
          Whether you're a recent graduate stepping into the job market or a seasoned professional looking to advance your career, our platform provides 
          high-quality, professionally designed resume and cover letter templates to help you stand out.
        </p>
        <p>
          We understand that first impressions matter, and your resume is your gateway to making a lasting impact on recruiters. That’s why we offer a diverse 
          range of resume templates tailored to different industries, experience levels, and personal branding styles. Our templates are designed with a balance 
          of aesthetics, readability, and ATS (Applicant Tracking System) compatibility, ensuring that your resume not only looks great but also passes through 
          automated screening systems effortlessly.
        </p>
        <p>
          Our intuitive platform makes customization easy. Simply choose a template, fill in your details, and personalize your resume with sections that 
          highlight your skills, experience, and achievements. With a user-friendly interface and step-by-step guidance, you can create a polished resume 
          in minutes—without the hassle of complex formatting.
        </p>
        <p>
          Beyond resumes, The Resume Hero offers comprehensive cover letter templates to complement your applications. A well-written cover letter can be the 
          key to landing your dream job, and we make it simple for you to craft compelling, personalized letters that reflect your strengths.
        </p>
        <p className="about-mission">
          <strong>Our mission</strong> is to empower job seekers with the tools they need to present themselves confidently and professionally. 
          Let The Resume Hero be your partner in career success!
        </p>
      </div>
    </section>
  );
};

export default About;
