'use client'

import '../css/index.css'
import { useEffect, useState } from 'react'

import RenderFooter from './components/footer'
import RenderHeader from './components/header'

import stats from './components/stats'
import { Tooltip } from 'react-tooltip'
import CountUp from 'react-countup'
import Head from "next/head"

function RenderHome() 
{
  const [stat, setStat] = useState()
  const [scrolled, setIsFloating] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > navbar.clientHeight) {
        setIsFloating(true);
    } else {
        setIsFloating(false);
    }
  };

  useEffect(() => {
    stats().then(stats => setStat(stats))
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
    {/* <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"></link>
    </Head> */}
    <div itemScope itemType="https://schema.org/WebSite">
      <meta itemProp="url" content="https://steambrew.app/"/>
      <meta itemProp="name" content="Steam Homebrew"/>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
    </div>
    <RenderHeader/>
      <main id="main-page-content" className='home-main-page-content'>
        <section id="home-hero-section" className="page-section">
          <div className="page-section-inner">
            <div id="hero-top-container" className="flex-container align-center justify-center direction-column">
              <h1 className="text-center title">Millennium.</h1>
              <p className="text-center title-description">An open source gateway to a better Steam® Client user experience</p>
              <div className="btn-container">
                <a href="https://github.com/SteamClientHomebrew/Installer/releases/latest/download/Millennium.Installer-Windows.exe">
                  <button className="btn btn-primary" id="hero-download-button">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3XSwrCUBBE0bsSs/8laFyYGUUEISAZVD4FivfAm8UOqRr4GiTpWw3AHZiAecN5PT8Cl9Ks2H3jyz7PrTQrtjWttfQas2LzCacxK+YH0AkjZgN0wojZAJ0wYjZAJ4yYDdAJI3b0/vIozYqNJ94gz5wVG94/3HOHv67sA2fN0s8YXCkXrpTs4D8xnTBiNkAnjJgN0AkjZgN0wojZAJ0w/qeB6eALXSlZwnCllCQqngrjaGE/A2FKAAAAAElFTkSuQmCC"/>
                    <span>Download v{stat?.version ?? "1.0.0"}</span>
                  </button>
                </a>
                {/* <Tooltip anchorSelect="#hero-download-button" place='bottom-start' clickable>
                  <h3>Important Notice!</h3>
                  <p className='hero-button-tooltip'>{"Steam has made some changes in the beta version of the Steam Client that Millennium isn't compatable with. As of now, you have to use the stable version (no beta) in Settings -> Interface -> Beta. Support is coming, and will be released when Steam beta becomes public."}</p>
                </Tooltip> */}
                <a href="/discord">
                  <button className="btn btn-secondary" id="hero-community-button" href='/discord'>
                    <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                      <path fillRule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
                    </svg>
                    <span>Community</span>
                  </button>
                </a>
              </div>
              <div className="downloads-container">
                <strong id="downloads-count">
                  <CountUp start={0} end={Number(stat?.download_count ?? 0)} />
                </strong>
                <span> Downloads</span>
                <strong id="downloads-count">
                  <CountUp start={0} end={Number(stat?.server_members ?? 0)} />
                </strong>
                <span> Discord Members</span>
              </div>
            </div>
            <div id="mouse-icon" className={(scrolled ? "mouse-hidden" : "mouse-shown")}>
              <div id="scroll-wheel"></div>
            </div>
          </div>
        </section>
        <section id="home-additional-features" className="page-section">     
          <div className="page-section-inner intro-section">    
            <h1 className="title text-center">What's This?</h1>
            <p className="title-description text-center">As you've heard, Steam® removed the ability customize our client experience. <br />That's where we come in. We've developed Millennium, a patcher which enables open sourced client modifications</p>
            <div id="additional-features" className="flex-container align-center justify-center wrap">
              <div className="additional-feature" id="additional-feature-emotes">
                <div className="additional-feature-icon">
                  <img src="https://i.imgur.com/G94FyIo.png" alt="" />
                </div>    
                <h5>Intergration</h5>
                <p>As we are intergrated directly into the Steam® client and doesn't run as a stand-alone process</p>
              </div>
              <div className="additional-feature" id="additional-feature-security">
                <div className="additional-feature-icon">
                  <img src="https://i.imgur.com/K4Nan9a.png" alt="" />
                </div>
                <h5>Performance</h5>
                <p>Thanks to you guys, we are currently the most effecient way to theme your Steam Client!</p>
              </div>
              <div className="additional-feature" id="additional-feature-editor">
                <div className="additional-feature-icon">
                  <img src="https://i.imgur.com/eVD1FRR.png" alt="" />
                </div>
                <h5>Safety</h5>
                <p>Our developers manually review all code on the community hub to ensure there is nothing malcious</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    <RenderFooter/>
    </>
  );
}

export default RenderHome