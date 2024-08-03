"use client"
import { GeistSans } from 'geist/font/sans';
import { useState, useEffect } from 'react';

function RenderHeader() {

    const [isFloating, setIsFloating] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
        const navbar = document.querySelector("#navbar-nav-items")

        if (navbar !== null && scrollTop > navbar.clientHeight) {
            setIsFloating(true);
        } else {
            setIsFloating(false);
        }
    };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []); 

    return (
        <>
            <header id="navbar" className={`page-section flex-container align-center floating header-bar`}>
                <div className="page-section-inner">
                    <div className='logo-hamburger-section'>
                        <a className="navbar-logo-container" href="/">
                            <img loading="lazy" className="navbar-logo hide-mobile" src="https://i.imgur.com/9qYPFSA.png"/>
                            <img loading="lazy" className="navbar-logo small" src="https://i.imgur.com/9qYPFSA.png"/>
                            <div>Steam Homebrew.</div>
                        </a>
                    </div>
                    <nav id="navbar-nav-items" className="flex-container align-center" data-toggle="affix">
                        <a className={`nav-item ${GeistSans.className}`} href="/themes">Themes</a>
                        <a className={`nav-item ${GeistSans.className}`} href="/plugins">Plugins</a>
                        <a className={`nav-item ${GeistSans.className}`} target="_blank" href="https://docs.steambrew.app/">Documentation
                            <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6" width="7">
                                <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="var(--accents-3)"></path>
                            </svg>
                        </a>
                        <a className={`nav-item ${GeistSans.className}`} target="_blank" href="https://github.com/SteamClientHomebrew/Millennium">GitHub
                            <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6" width="7">
                                <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="var(--accents-3)"></path>
                            </svg>
                        </a>
                        <a href="/discord">
                            <button type="submit" className="btn btn-secondary">
                                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="16" height="16">
                                    <path fillRule="evenodd" d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273l-1.47-1.338l-1.604-1.398l.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537c-1.336-.668-2.54-1.002-3.744-1.137c-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735c-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02c0 0 1 1.74 3.743 1.806c0 0 .4-.533.805-1.002c-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03c.33.136.66.27.93.4a8.18 8.18 0 0 0 1.8.536c.93.135 1.996.2 3.21 0c.6-.135 1.2-.267 1.8-.535c.39-.2.87-.4 1.397-.737c0 0-.6.936-2.205 1.404c.33.466.795 1 .795 1c2.744-.06 3.81-1.8 3.87-1.726c0-3.87-1.815-7.02-1.815-7.02c-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c0-.74.57-1.338 1.27-1.338z"></path>
                                </svg>
                                <span className={GeistSans.className}>Join Discord</span>
                            </button>   
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default RenderHeader;