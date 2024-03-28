
import { Inter } from "next/font/google";
import Head from "next/head"
import GetLatestThemes from '../app/components/themes/featured';
import RenderFooter from '../app/components/footer'
import RenderHeader from '../app/components/header'
import { DisplayFluentyAd } from '../app/components/fluenty/fluenty'
import '../css/index.css'

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
    const { req } = context;
    const userAgent = req.headers['user-agent'];
  
    const isSteamClient = /Valve Steam Client/.test(userAgent);
    return { props: { isSteamClient } };
}

function ThemeLibrary({ isSteamClient }) {

	const themeData = GetLatestThemes()

	return (
		<div className={inter.className}>
        <Head>
            <title>Themes • Millennium</title>
        </Head>
		<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
			<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
			{!isSteamClient ? RenderHeader() : <></>}
			<main id="main-page-content">
			<section id="addons-header" className="page-section content-header">
				<div className="page-section-inner flex-container justify-between align-center">
				<div className="header-left">
					<h1 className="title">Themes</h1>
					<p className="title-tooltip">Browse the community's custom made themes.</p>
				</div>
				<form className="header-right search-container">
					<svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
					<path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
					</svg>
					<input className="search" id="addon-search" type="text" name="bd-theme-search" placeholder="Type here to search" />
					<button className="search-clear-btn" type="reset">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16">
						<path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
					</svg>
					</button>
				</form>
				</div>
			</section>
			<div className="ad leaderboard_ros_atf" id="ad-container-1"></div>
			<section id="addons-controls" className="page-section">
				<div className="page-section-inner">
				<div id="addons-actions" className="flex-container align-center wrap">
				<div className="sign-in-gate">
					<a href={"https://millennium.gitbook.io/steam-patcher/guides/publishing"} className="btn btn-primary" type="button" id='submit-theme'>
						<svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
							<path fillRule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path>
						</svg>
						<span>Submit a theme</span>
					</a>
					{/* <Tooltip anchorSelect="#submit-theme" place='top-end' clickable>
						<p>Ping moderator on the discord server <br />You must already have a presentable git repo.</p>
					</Tooltip> */}
				</div>

				</div>
				</div>
			</section>
			<section id="addons-content" className="page-section">
				<div className="page-section-inner">
					{
						!themeData.length ? <div className="spinner"></div> :
						<div className="card-container">
							{ DisplayFluentyAd() }
							{ themeData.map((tag, index) => (
								<div key={index}>
									{tag}
								</div>
							))}	
						</div>
					}
				</div>
			</section>
			</main>
			{!isSteamClient ? RenderFooter() : <></>}
		</div>
	)
}

export default ThemeLibrary