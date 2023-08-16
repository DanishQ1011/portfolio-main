import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color:rgb(100, 255, 218);

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
  ul.framework-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color:rgb(0, 204, 0);
    
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Hybrid Cloud Based System Designs and Solutions.', 'Server less solutions with Python', 'Micro Services with Spring Boot', 'Core Java with J2EE, Spring & jQuery', 'Developing IaaC Cloud Solutions using Aws CDK and terraform', 'Designing scalable and higly available solutions'];
  const skills1 = [];
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Shah and I enjoy producing cloud agnostic infrastructure solutions. I am having more than 11 years of IT experience where I have got working experiences in Full stack technologies like Java, Python, TypeScript.
              </p>
              <p>  
              I'm currently working as Senior Cloud Architect for an automation company where i build AWS cloud infrastructure and support development teams with producing solution patterns for deploying Java/Spring based microservices.</p>
              <p>I am also fully certified in multiple Cloud Solutions provider{' '} <a href='https://www.credly.com/users/aritra-nag.873ccee4'>AWS</a> and possess Professional level certifications in {' '} <a href='https://sgq.io/HoGGxqg'>GCP</a>
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://www.infosys.com/">an consulting industry</a>,{' '}
              <a href="https://www2.deloitte.com/">one of the big 4 audit enterprise</a>,{' '}
              <a href="https://www.ericsson.com/">a huge corporation</a>, and{' '}
              <a href="https://bico.com/">a start up</a>. My
              main focus these days is upscaling customers cloud competence, building multi cloud solutions 
                at <a href="https://nordcloud.com/">Nordcloud</a> for a variety of
              clients.
            </p>

            <p>
              I also recently presented{' '}
              <a href="https://www.linkedin.com/posts/aritra-nag-1571a278_awssummit-infrastructureascode-cdk-activity-6930426514450591745-wpH0?utm_source=linkedin_share&utm_medium=member_desktop_web"> AWS Summit Stockholm,2022</a>,{' '}
              that showcases the powers of AWS IaaC implementation for enterprise Software realm using AWS CDK
              &amp; Java.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
