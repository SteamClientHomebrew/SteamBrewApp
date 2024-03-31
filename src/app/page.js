'use client'

import '../css/index.css'
import { useEffect, useState } from 'react'

import RenderFooter from './components/footer'
import RenderHeader from './components/header'

import stats from './components/stats'
import { Tooltip } from 'react-tooltip'
import CountUp from 'react-countup'
import Head from "next/head"

export default function RenderHome() {

  const [stat, setStat] = useState()

  useEffect(() => {
    stats().then(stats => setStat(stats))
  }, [])

  return (
    <>
    <Head>
      <link rel="icon" href="https://i.imgur.com/9qYPFSA.png" type="image/x-icon" sizes="16x16"></link>
    </Head>
    <RenderHeader/>
      <main id="main-page-content">
        <div className="flex-1 max-w-3xl"><div role="status" aria-busy="true" className="skeleton-heading"><div className="ring-1 ring-dark/2 overflow-hidden relative grid dark:ring-light/1 rounded-md h-[47px] [max-width:calc(48rem-1px)] mb-8"><div class="w-full bg-dark-4/4 dark:bg-light-3/1 grid grid-area-1-1 overflow-hidden [mask:conic-gradient(from_90deg_at_1px_1px,_#0000_90deg,_#0003_0)_calc(50%+1px)_calc(0%+47px)_/_12px_12px]"><div class="aspect-square from-dark-4 to-transparent grid-area-1-1 relative origin-[50%_50%] top-[50%] self-stretch bg-transparent will-change-transform animate-[rotateLoop_2s_linear_infinite] [background-image:conic-gradient(from_-90deg_at_50%_50%,_var(--tw-gradient-stops)_0deg,_var(--tw-gradient-stops)_90deg,_var(--tw-gradient-stops)_280deg)] dark:from-light-4/6"></div></div></div></div><div role="status" aria-busy="true" class="skeleton-paragraph"><div class="ring-1 ring-dark/2 overflow-hidden relative grid dark:ring-light/1 rounded-md [height:calc(15rem-1px)] [max-width:calc(48rem-1px)] mb-4"><div class="w-full bg-dark-4/4 dark:bg-light-3/1 grid grid-area-1-1 overflow-hidden [mask:conic-gradient(from_90deg_at_1px_1px,_#0000_90deg,_#0003_0)_calc(50%+1px)_calc(0%+47px)_/_48px_48px]"><div class="aspect-square from-dark-4 to-transparent grid-area-1-1 relative origin-[50%_50%] top-[50%] self-stretch bg-transparent will-change-transform animate-[rotateLoop_2s_linear_infinite] [background-image:conic-gradient(from_-90deg_at_50%_50%,_var(--tw-gradient-stops)_0deg,_var(--tw-gradient-stops)_90deg,_var(--tw-gradient-stops)_280deg)] dark:from-light-4/6"></div></div></div></div></div>
        <section id="home-hero-section" className="page-section">
          <div className="page-section-inner">
            <div id="hero-top-container" className="flex-container align-center justify-center direction-column">
              <h1 className="text-center title">millennium.</h1>
              <p className="text-center title-description">A community focused on extending the functionality of Steam®</p>
              <div className="btn-container">


                <a href="https://github.com/SteamClientHomebrew/Installer/releases/latest/download/Millennium.Installer-Windows.exe">
                  <button className="btn btn-primary" id="hero-download-button">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO3XQQrCMBhE4ZxE738EqwczqxEhiyJdjMn7qcJ86/KGFgpJaxERP0nSVdJDUtd33s/fJV0qWrYxuGKraNkmvtanXtGyCVDRspGjZMtGjpItGzlKtmzkKNmykaNky0aOki0bOUq2bOQo2bKRo2TLRo6e9QJ9cfNZ0bKNYyx1GsVatnGG3ybP8LeD+wDSir+hXCmVK+VOrpRTdv/TsjbxE2OjZMtGjpItGzlKtmzkKNmykaNky0aOki0bOUq2bOQo2bKRo2e9QF/czJVyJ1fKiIhW4gUckOeYKTTM/gAAAABJRU5ErkJggg=="/>
                    <span>Download v{stat?.version ?? "1.0.0"}</span>
                  </button>
                </a>
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
            <div id="hero-bottom-container" className="flex-container align-center justify-center hide-mobile">
              <img id="hero-image" loading="lazy" src="https://i.imgur.com/Kyl9aSV.png" className="home-img" alt="Home" />
            </div>

            <Tooltip anchorSelect="#hero-image" place='top' clickable>
              <p>Like this theme? Check it out below
              </p>
              <a href="/theme?id=F8h9ZhwOdoNygNcAfjIZ">
                   Simple Dark. 
                </a>
            </Tooltip>
          </div>
        </section>
        <section id="home-additional-features" className="page-section">
          <div className="page-section-inner">
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