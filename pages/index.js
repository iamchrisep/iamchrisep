import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperclip,
  FaRegEnvelope,
  FaTiktok,
  FaTwitch
} from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import {
  Cutive_Mono,
  Gowun_Dodum,
  Reenie_Beanie
} from 'next/font/google';
import styles from '@/styles/Portfolio.module.css';
import snapcart from '@/public/snapcart.png';
import gwo from '@/public/gwo.png';
import love from '@/public/love.png';
import gs from '@/public/gs.png';

const cutive_mono = Cutive_Mono({ weight: '400', subsets: ['latin'] });
const gowun_dodum = Gowun_Dodum({ weight: '400', subsets: ['latin'] });
const reenie_beanie = Reenie_Beanie({ weight: '400', subsets: ['latin'] });

export default function Portfolio() {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 320,
      earrings: ['variant01'],
      earringsProbability: 100,
      earringsColor: ['899499'],
      eyebrows: ['variant07'],
      eyes: ['variant23'],
      hair: ['variant35'],
      head: ['variant04'],
      mouth: ['happy03'],
      nose: ['variant04'],
      beardProbability: 0,
      frecklesProbability: 0,
      glassesProbability: 0,
      hairAccessoriesProbability: 0,
    }).toDataUriSync();
  }, []);

  return (
    <>
      <Head>
        <title>Krystsina Bahdanava</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.social}>
        <a
            href="/CV.pdf"
            download="CV_Krystsina_Bahdanava.pdf"
        >
          <FaPaperclip size={24} />
        </a>
        <a
            href="mailto:krystsina.bahdanava@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaRegEnvelope size={24} />
        </a>
        <a
            href="https://www.linkedin.com/in/krystsina-bahdanava/"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
            href="https://www.behance.net/iamchrisep"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaBehance size={24} />
        </a>
        <a
            href="https://www.facebook.com/krystsina.bahdanava/"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaFacebookF size={24} />
        </a>
        <a
            href="https://www.instagram.com/krystsina.bahdanava/"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
            href="https://www.tiktok.com/@krystsina.bahdanava"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaTiktok size={24} />
        </a>
        <a
            href="https://www.twitch.tv/adadarska"
            target="_blank"
            rel="noopener noreferrer"
        >
          <FaTwitch size={24} />
        </a>
      </nav>
      <main className={`${styles.main} ${gowun_dodum.className}`}>
        <div className={styles.wrapper}>
          <div className={styles.summary}>
            <h2 className={`${styles.hl2} ${cutive_mono.className}`}>
              &lt;Summary&nbsp;&frasl;&gt;
            </h2>
            <span className={gowun_dodum.className}>
              I have 7+ years experience in web development, mostly frontend.
              I participate in all stages of the web application development cycle.
              I am engaged in the recruiting and training of junior specialists, project management and communication with clients.
              Also, I have experience not only in web development, so I have worked with other technologies.
              I have a Bachelor's degree in Information Technology Software.
            </span>
          </div>
          <div className={styles.person}>
            <div className={reenie_beanie.className}>
              Hi, my name is Krystsina.
              <br />
              I am a Frontend Developer.
            </div>
            <img src={avatar} alt="Avatar" />
            <a
                className={`${styles.download} ${cutive_mono.className}`}
                href="/CV.pdf"
                download="CV_Krystsina_Bahdanava.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.brief}>
            <h2 className={`${styles.hl2} ${cutive_mono.className}`}>
              &lt;Brief&nbsp;&frasl;&gt;
            </h2>
            <div className={styles.row}>
              <div className={styles.col}>
                <h3 className={styles.hl3}>Languages</h3>
                <ul>
                  <li>
                    English - A2 (limited working proficiency)
                  </li>
                  <li>
                    Polish - B1 (professional working proficiency)
                  </li>
                  <li>
                    Russian - C2 (native proficiency)
                  </li>
                </ul>
              </div>
              <div className={styles.col}>
                <h3 className={styles.hl3}>Skills</h3>
                <ul>
                  <li>React</li>
                  <li>React Redux</li>
                  <li>Redux Saga</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>SASS (SCSS)</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className={styles.col}>
                <h3 className={styles.hl3}>Hobbies & Interests</h3>
                <span>
                  I like computer games. I also enjoy reading fiction, especially fantasy.
                  Listen to music a lot. Occasionally I draw. I interested in Web (UI/UX) design.
                  Beginner Twitch streamer (gaming, of course).
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.experience}>
            <h2 className={`${styles.hl2} ${cutive_mono.className}`}>
              &lt;Experience&nbsp;&frasl;&gt;
            </h2>
            <div className={styles.expwrap}>
              <div className={styles.elem}>
                <Image src={snapcart} alt='snapcart' className={styles.logo} />
                <h4 className={styles.location}>Wejherowo, Poland &bull; Remote</h4>
                <h3 className={styles.hl}>Senior Software Engineer</h3>
                <h5>Mar 2022 &ndash; Dec 2022 &bull; 10 mos &bull; Full-time</h5>
                <span className={styles.description}>
                  Provision of consulting services, including the following:
                  <br />&middot; Architecture, build, and maintain API projects
                  <br />&middot; Manage, educate, and help other team members
                  <br />&middot; Translate business requirements into high quality code
                  <br />&middot; Ensure the best possible performance, quality, and responsiveness of the API
                  <br />&middot; Identify and correct bottlenecks and fix bugs
                </span>
                <h5 className={styles.skills}>
                  <span>Skills:&nbsp;</span>
                  React.js &middot; JavaScript &middot; Jest
                </h5>
              </div>
              <div className={styles.elem}>
                <Image src={gwo} alt='gwo' className={styles.logo} />
                <h4 className={styles.location}>Gdansk, Poland &bull; On-site</h4>
                <div className={styles.join}>
                  <h3 className={`${styles.hl} ${styles.dot}`}>Senior Frontend Developer</h3>
                  <h5 className={styles.hl}>Feb 2022 &ndash; Mar 2022 &bull; 1 mo &bull; Full-time</h5>
                  <h3 className={`${styles.hl} ${styles.dot}`}>Frontend Developer</h3>
                  <h5>Nov 2021 &ndash; Feb 2022 &bull; 3 mos &bull; Full-time</h5>
                </div>
                <span className={styles.description}>
                  &middot; Development and support of web applications, sites and landings in the e-commerce.
                  <br />&middot; Development and support using technologies such as React, React Redux, Redux Saga, TypeScript, Stimulus, Wingsuit.
                  <br />&middot; Refactoring and application updates by myself.
                  <br />&middot; Application architecture design.
                  <br />&middot; Inter-teams communication (graphic designers, UI/UX designers, testers, analysts, etc).
                  <br />&middot; Office work with the team using the Kanban methodology.
                  </span>
                <h5 className={styles.skills}>
                  <span>Skills:&nbsp;</span>
                  React.js &middot; Redux &middot; Saga &middot; JavaScript &middot; TypeScript
                </h5>
              </div>
              <div className={styles.elem}>
                <Image src={love} alt='love' className={styles.logo} />
                <h4 className={styles.location}>Gdynia, Poland &bull; Remote</h4>
                <h3 className={styles.hl}>Frontend Developer</h3>
                <h5>Dec 2016 &ndash; Aug 2021 &bull; 4 yrs 9 mos &bull; Full-time</h5>
                <span className={styles.description}>
                  &middot; Development and support of web applications using technologies such as React, React Redux, Redux Saga, TypeScript, Web Sockets (Socket.io), Jest, Storybook.
                  <br />&middot; Support of applications developed in Symfony using the Twig templating engine.
                  <br />&middot; Participation in all stages of the web application development cycle.
                  <br />&middot; Recruiting and training junior specialists, project management and communication with clients.
                  <br />&middot; Remote work with the team using the Scrum methodology.
                </span>
                <h5 className={styles.skills}>
                  <span>Skills:&nbsp;</span>
                  React.js &middot; Redux &middot; Saga &middot; TypeScript &middot; Jest
                </h5>
              </div>
              <div className={styles.elem}>
                <Image src={gs} alt='gs' className={styles.logo} />
                <h4 className={styles.location}>Minsk, Belarus &bull; On-site</h4>
                <h3 className={styles.hl}>Software Engineer</h3>
                <h5>Sep 2015 &ndash; Nov 2016 &bull; 1 yr 3 mos &bull; Full-time</h5>
                <span className={styles.description}>
                  Development and support of economics and financial applications (Gedemin Platform)
                  using Delphi and Firebird, united a relational database system,
                  post-relational object-oriented technologies of data processing
                  and the language of logical programming Prolog.
                </span>
                <h5 className={styles.skills}>
                  <span>Skills:&nbsp;</span>
                  Borland Delphi
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.education}>
            <h2 className={`${styles.hl2} ${cutive_mono.className}`}>
              &lt;Education&nbsp;&frasl;&gt;
            </h2>
            <div className={styles.expwrap}>
              <div className={styles.elem}>
                <h4 className={styles.location}>Minsk, Belarus</h4>
                <h3 className={styles.hl}>Belarusian State University of Informatics and Radioelectronics</h3>
                <h4 className={styles.hl}>Institute of Information Technologies</h4>
                <h5 className={styles.hl}>Bachelor's degree</h5>
                <h5>2015 &ndash; 2019</h5>
                <h5 className={styles.skills}>
                  <span>Speciality:&nbsp;</span>
                  Information Technology Software
                </h5>
                <h5 className={styles.skills}>
                  <span>Qualification:&nbsp;</span>
                  Software Engineer
                </h5>
              </div>
              <div className={styles.elem}>
                <h4 className={styles.location}>Minsk, Belarus</h4>
                <h3 className={styles.hl}>Minsk State Higher Radiotechnical College</h3>
                <h4 className={styles.hl}>Software of mathematical information processing</h4>
                <h5 className={styles.hl}>Specialized secondary education</h5>
                <h5>2010 &ndash; 2014</h5>
                <h5 className={styles.skills}>
                  <span>Speciality:&nbsp;</span>
                  Information Technology Software
                </h5>
                <h5 className={styles.skills}>
                  <span>Qualification:&nbsp;</span>
                  Technician-programmer
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.portfolio}>
            <h2 className={`${styles.hl2} ${cutive_mono.className}`}>
              &lt;Portfolio&nbsp;&frasl;&gt;
            </h2>
            <span>Coming soon...</span>
          </div>
        </div>
      </main>
    </>
  )
}
