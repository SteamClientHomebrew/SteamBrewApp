
import { Inter } from "next/font/google";
import '../css/index.css'

const inter = Inter({ subsets: ["latin"] });

import RenderFooter from '../app/components/footer'
import RenderHeader from '../app/components/header'

import { download_count } from '../app/components/fluenty/fluenty'

export default function FluentyViewModal() {

	const isSteamClient = navigator.userAgent.includes("Valve Steam Client")

    return (
        <div className={inter.className}>
            <div className="os-resize-observer-host observed">
                <div className="os-resize-observer"></div>
            </div>
            <div className="os-padding">
                <div className="os-content">
                    <div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
                    <div className="vm-placement" id="vm-av" data-format="isvideo"></div>
                    {!isSteamClient ? RenderHeader() : <></>}
                    <main id="main-page-content">
                        <section id="addon-details" className="page-section">
                            <div className="page-section-inner">
                            <img loading="lazy" src={'https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg'} className="addon-backdrop"/>
                            <div className="flex-container align-center justify-between" id="addon-details-title">
                                <h1 className="title">Fluenty</h1>
                                <div className="disabled sign-in-gate">
                                </div>
                            </div>
                            <div className="hide-mobile flex-container wrap align-center" id="addon-info-container">
                                <span className="addon-info-item">By <a target="_blank" className="anchor" href={`https://www.patreon.com/fluentyforsteam/about`}>ShadowMonster</a></span>
                                <div className="addon-info-divider"></div>
                                <span className="addon-info-item">Version: {'1.0.1'}</span>
                                <div className="addon-info-divider"></div>
                                <span className="addon-info-item">Downloads: {download_count()} </span>
                                <div className="addon-info-divider"></div>
                            </div>
                            <div className="title-description">Based off of Windows 11 design principles</div>
                            <div className="flex-container" id="addon-splitview-container">
                                <div className="addon-details-column" id="addon-details-left-column">
                                    <article className="addon-details-segment">
                                        <div className="markdown-body">
                                        <div className="markdown-body">
                                            <div >
                                                <h1>Fluenty</h1>
                                                <p>Inspired by the Microsft Store Fluent Design template launched with Windows 11</p>
                                                <a href="https://i.imgur.com/ca6ncMp.gif" target="_blank">
                                                    <img src="https://i.imgur.com/ca6ncMp.gif" alt="Steam Skin"/>
                                                </a>
                                                <div className='FluentyImageContainer'>
                                                    <a href="https://i.imgur.com/ZbhJmIT.gif" target="_blank">
                                                        <img src="https://i.imgur.com/ZbhJmIT.gif" alt="Steam Skin"/>
                                                    </a>
                                                    <a href="https://i.imgur.com/VB83oTU.gif" target="_blank">
                                                        <img src="https://i.imgur.com/VB83oTU.gif" alt="Steam Skin"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <h2>Installing</h2>
                                            <p>Purchase the theme through patreon subscription</p>
                                            <p>Cancelling the subscription results in keeping the theme, however you will not receive future updates unless you resubscribe</p>
                                            <p>Once subscribed, download the latest listed version and then open Millennium and click the open skins folder. Drag the downloaded theme into that directory and proceed to extract it.</p>
                                            <p>Select it from the menu and your good to go!</p>
                                            <h2>Configuration</h2>
                                            <p>Fluenty comes with 2 built in styles. Compact, and Spacious.</p>
                                            <p>To change between the two head over to the millennium interface and click edit on Fluenty, then deselect/select the compact view appropriately</p>
                                            <div className='FluentyImageContainer'>
                                                <a href="https://i.imgur.com/ca6ncMp.gif" target="_blank">
                                                <img src="https://i.imgur.com/ca6ncMp.gif" alt="Steam Skin"/>
                                                </a>
                                                <a href="https://i.imgur.com/9U9Vq5x.gif" target="_blank">
                                                <img src="https://i.imgur.com/9U9Vq5x.gif" alt="Steam Skin"/>
                                                </a>
                                            </div>
                                            <h2>Notice</h2>
                                            <p>Fluenty is very close to being finished, however it's still in development and not everything is perfect. expect bugs and report them in the discord server if you encounter any!</p>
                                        </div>
                                        <br />
                                        <br />
                                        <b>Copyright Millennium | Steam++ © 2024</b>
                                        </div>
                                    </article>
                                </div>
                                <div className="addon-details-column" id="addon-details-right-column">
                                    <div className="addon-details-segment" id="addon-details-column-actions">
                                        <h3 className="addon-details-section-header">Actions</h3>
                                        <section id="addon-actions">
                                        <div className="btn-container direction-column">
                                            <>
                                            <a href="https://www.patreon.com/FluentyforSteam" className="btn btn-primary" id='download-btn'>
                                            <img className='btn-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACx0lEQVR4nO2ZTUhUURiGTy1Sy0UYZNu0n439YBgRBWUbw1wX9LMowtYFtSisBF0V1jKzqFVBbctAiBCkbQUllUFBq7D/SCvpiYP34uvg3JlzxnPvEPPAbOae9/3e73Ln3HPOGFPhPwLYBVwFXgI/os8o0G+vmXIFaACGKcxDYJUpJ4CtwGeK5yOwzZQDwOqc8BNAH7AZWAIsBlqi7+y1mHGgMevwC4BHEuod0JQwfh3wXh8nkyXAjpw731SEZj0wKbrWdNLOHea6BOlz0F0W3ZWwKZODvJAgLQ66LaIbDZtypugGYDCa1+eiNhr3CTe+RbpF8t134L593OYrfDvwJymFjHXG5NfamrtLDV9XzF0N1EA83S4tpYFDzPAaWDlXQQ/fvFqm3+pjMuRgKQ30itG5YkOU0oDF1pIhvcYX4KYYHU6xgSMy5EYpDQyJUVvOtXhpMOHhm6gF2qTu0HzN9bOmNaAnmvJ6PHwTtUy/sWOel9LAVzGq8zZyr7tM6n7xNakVk5/znrLwQnEi90XparJWDMaCJE0AeCP11/gYtIrBsEkZZu/wdvoYHBCDW0FSJgDclvr7fQxOicEFkzLARal/0sdA1+3Hg6RMADgh9S/5GNwVg70mZYB9Uv+Oj8FjMdgeJGUCtqbUH/ExsJv0mAaTMkCj1H/rKl4I/IrEf4HqYEnzANRIA79tJhdxvYjHTUYwfQgWs9xF2CzCZ0FTJmBrS46NLsI9Ihw0GQE8kBztLsJOEQ4ETZkAcE1yHHURnhdht8kIoDvflraQcECEnUFTJgAckxz9LkJ7iBXTYTIC6JAc91yET0XYHDRlAsAmyfHERWgPlGLqTUYAKyTHBxdh/Ba21ARNmUD0B0nMpO927jRQZVIGqALOSI5XLmI9GSsXulwaqLZLWMqHEecFZbQaPBsdtE5lEHoqOlDuyvJ3WKFCBROWf0Jk/iIZe1yQAAAAAElFTkSuQmCC"></img>
                                            <span draggable>Purchase • $5 USD</span>
                                            </a>
                                            </>
                                        </div>
                                        </section>
                                        <h3 className="addon-details-section-header">Authors</h3>
                                        <section id="addon-author">
                                        <a target="_blank" href={`https://github.com/ShadowMonster99`} className="addon-author-container">
                                            <img loading="lazy" src={`https://github.com/ShadowMonster99.png`}/>
                                            <h5>ShadowMonster</h5>
                                        </a>
                                        <a target="_blank" href={`https://github.com/Hexality`} className="addon-author-container">
                                            <img loading="lazy" src={`https://github.com/Hexality.png`}/>
                                            <h5>Hexality</h5>
                                        </a>
                                        <a target="_blank" href={`https://github.com/AikoMidori`} className="addon-author-container">
                                            <img loading="lazy" src={`https://github.com/AikoMidori.png`}/>
                                            <h5>AikoMidori</h5>
                                        </a>
                                        </section>
                                    </div>
                                    <div className="addon-details-segment" id="addon-details-column-server">
                                        <section id="addon-server">
                                        <div className="flex-container align-center">
                                            <img loading="lazy" src={'https://cdn.discordapp.com/icons/1102739071085846623/e1c7dde389cfbe90bf1a2b948e00d162.webp'}/>
                                            <div className="flex-container justify-center direction-column">
                                                <h5>Millennium for Steam</h5>
                                                <p>Support Server</p>
                                            </div>
                                        </div>
                                        <a rel="noreferrer noopener" target="_blank" className="btn btn-primary" href='/discord'>
                                        <span>Join Server</span>
                                        </a>
                                        </section>
                                    </div>
                                    {/* Render Tags if there are any */}
                                    <div className="addon-details-segment" id="addon-details-column-tags">
                                        <h3 className="addon-details-section-header">Tags</h3>
                                        <section>
                                        <div className="addon-tags">
                                            <span className="addon-tag">
                                            Dark
                                            </span>
                                            <span className="addon-tag">
                                            Fluent
                                            </span>
                                            <span className="addon-tag">
                                            Minimal
                                            </span>
                                            <span className="addon-tag">
                                            Soft
                                            </span>
                                        </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </section>
                    </main>
                    {!isSteamClient ? RenderFooter() : <></>}
                </div>
            </div>
        </div>
    )
}
