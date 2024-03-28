import { Inter } from "next/font/google";
import React, { useEffect, useState } from 'react';
import Head from "next/head"
import RenderFooter from '../app/components/footer'
import RenderHeader from '../app/components/header'
import { markdownToHtml } from '../app/components/markdown'
import { date_str, frm_num } from '../app/components/format/formatting'

import '../css/index.css'
const inter = Inter({ subsets: ["latin"] });

function HeadProp({ json }) {
    return (
        <Head>
            <title>{`${json?.name} - Millennium`}</title>
            <meta name="description" content={json.description} />
            <meta property="og:title" content={`${json.name} - Millennium`}/>
            <meta property="og:description" content={json.description}/>
            <meta property="og:image" content={json?.header_image}/>
            <meta property="og:image:alt" content="theme Thumbnail"/>
            <meta property="og:image:width" content="1920"/>
            <meta property="og:image:width" content="1080"/>
            <meta name="description" content={json.description}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:title" content={`${json.name} - Millennium`}/>
            <meta property="twitter:description" content={json.description}/>
            <meta property="twitter:image" content={json?.header_image}/>
            <meta property="twitter:image:alt" content="theme Thumbnail"/>
            <meta property="og:site_name" content="Millennium"/>
            <meta property="twitter:site" content="Millennium"/>
            <meta name="theme-color" content="#3a71c1"/>
            
            <meta name="author" content={json.author ?? "Anonymous"}/>
        </Head>
    )
} 

export const getServerSideProps = (async (context) => {

    const { query } = context;
    const { id } = query;

    const res = await fetch(`https://millennium.web.app/api/v2/details/` + id)
    const json = await res.json()

    const readme = json?.read_me
    const markdown = await markdownToHtml(readme);

    const { req } = context;
    const userAgent = req.headers['user-agent'];
  
    const isSteamClient = /Valve Steam Client/.test(userAgent);

    return { 
        props: { 
            json, markdown, isSteamClient
        } 
    }
})

export default function Home({ json, markdown, isSteamClient }) {

    const [downloading, setDownloading] = useState(false)
    const [download_status, setStatus] = useState("Installing...")
    const [installed, setInstalled] = useState(false)
    const [ready, setReady] = useState(false)

    function handleMessages() {
        var originalConsoleLog = console.log;

        console.log = function(message) {
            originalConsoleLog.apply(console, arguments);

            if (message.returnId === "[install-message]") {

                if (message.message == "success") {
                    setDownloading(false)
                    setInstalled(true)
                }
            }
            if (message.returnId === "[is-installed]") {
                setInstalled(message.message == "true" ? true : false)
                setReady(true)
            }
            if (message.returnId === "[remove-theme-result]") {

                if (message.message == "removed") {
                    setInstalled(false)
                }
            }
        };
    }

    useEffect(() => {
        const message = {
            id: "[millenniumweb-is-installed]",
            name: json?.data?.github?.repo + "-" + json?.branch
        }
    
        console.log(`millennium.user.message: ${JSON.stringify(message)}`)
        handleMessages()
    }, [])

    const startDownload = (download, redirect) => 
    {
        const url = 'https://millennium.web.app/api/v2/download';
        const data = {
            owner: json?.data?.github?.owner,
            repo: json?.data?.github?.repo
        };

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (redirect) window.location.href = download
    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', `${json?.data?.github?.repo}.zip:${json?.download}`);
    };

    const handleDragEnd = () => startDownload(json?.download, false)

    function getFileNameFromURL(url) {
        var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
        if (matches.length > 1) {
            return matches[1];
        }
        return null;
    }

  const integrate = (json) => 
  {
    startDownload(null, false)

    console.log(json)

    const message = {
        id: "[install-theme]",
        url: json.download,
        file: `${json?.data?.github?.repo}.zip`,
        name: json?.name ?? json?.data?.github?.repo,
        native: json?.data?.github?.repo
    }

    console.log(`millennium.user.message: ${JSON.stringify(message)}`)
    setDownloading(true)
  }

  const remove = (json) => 
  {
    const message = {
        id: "[remove-theme]",
        name: json?.data?.github?.repo + "-" + json?.branch,
    }
    console.log(`millennium.user.message: ${JSON.stringify(message)}`)
  }

  return (
    <div className={inter.className}>
    <HeadProp json={json} />
    <div className="os-resize-observer-host observed">
      <div className="os-resize-observer"></div>
    </div>
    <div className="os-padding">
        <div className="os-content">
          <div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
          <div className="vm-placement" id="vm-av" data-format="isvideo"></div>
          {!isSteamClient ? <RenderHeader/> : <></>}
          <section id="main-page-content">
          <section id="addon-details" className="page-section">
              <div className="page-section-inner">
              <img loading="lazy" src={json?.splash_image} className="addon-backdrop"/>
              <div className="flex-container align-center justify-between" id="addon-details-title">
                  <h1 className="title">{json?.name ?? json?.data?.github?.repo}</h1>
                  <div className="disabled sign-in-gate">

                  </div>
              </div>
              <div className="hide-mobile flex-container wrap align-center" id="addon-info-container">
                  <span className="addon-info-item">By <a target="_blank" className="anchor" href={`https://github.com/${json?.data?.github?.owner}`}>{json?.data?.github?.owner}</a></span>
                  <div className="addon-info-divider"></div>
                  <span className="addon-info-item">Version: {json?.version}</span>
                  <div className="addon-info-divider"></div>
                  <span className="addon-info-item">Updated: {json?.commit_data?.committedDate && date_str(json?.commit_data?.committedDate)}</span>
                  <div className="addon-info-divider"></div>
                  <span className="addon-info-item">Downloads: {frm_num(json?.data?.download)} </span>
                  <div className="addon-info-divider"></div>
              </div>
              <div className="title-description">
                {json?.description}
              </div>

              <div className="flex-container" id="addon-splitview-container">
                  <div className="addon-details-column" id="addon-details-left-column">
                      <article className="addon-details-segment">
                          <div className="markdown-body">
                              <div dangerouslySetInnerHTML={{ __html: markdown }} />
                          </div>
                      </article>
                  </div>
                  <div className="addon-details-column" id="addon-details-right-column">
                  <div className="addon-details-segment" id="addon-details-column-actions">
                      <h3 className="addon-details-section-header">Actions</h3>
                      <section id="addon-actions">
                      <div className="btn-container direction-column">
                          {!isSteamClient ? 
                              // Render download button when outside the steam client, and warn the user to install millennium
                              <>
                                  <a onClick={_ => startDownload(json?.download, false)} href={json?.download} className="btn btn-primary" id='download-btn'>
                                      <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                          <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                                      </svg>
                                      <span draggable>Download</span>

                                  </a>
                                  {/* <Tooltip anchorSelect="#download-btn" place='top' clickable style={{ backgroundColor: "#101010", color: "#fff", border: "1px solid #666" }}>
                                      <p>Make sure you have <a href="/">Millennium</a> installed for this to work</p>      
                                  </Tooltip> */}
                              </> 
                              // Render download area when inside the steam client (from millennium)
                              : 
                              <>
                                  {/* <div id="draggableFile" className="btn btn-primary" style={{ border: '2px dashed #ccc', cursor: 'move', userSelect: 'none'}} draggable onDragStart={e => handleDragStart(e)} onDragEnd={() => handleDragEnd()}>
                                      <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                          <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                                      </svg>
                                      <span draggable>Drop onto Millennium</span>
                                  </div>    */}

                                {!ready ? 
                                    <>
                                        {/* <svg className="loading-spinner">
                                            <circle>
                                                <animateTransform attributeName="transform" type="rotate" values="-90;810" keyTimes="0;1" dur="2s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="stroke-dashoffset" values="0%;0%;-157.080%" calcMode="spline" keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animate>
                                                <animate attributeName="stroke-dasharray" values="0% 314.159%;157.080% 157.080%;0% 314.159%" calcMode="spline" keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animate>
                                            </circle>
                                        </svg> */}
                                    </>
                                    :
                                    <>
                                    {installed ? 
                                    <>
                                        <a onClick={_ => remove(json)} className="btn btn-primary" id='remove-btn'>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADH0lEQVR4nO2ZO2gVURCGjyk0khS+8HEj2grGykeKKLEQK1+NVvERJQqCWBmDIsEi0Upt1E6sfBQmdmIlKorxIioIPkALlchVUJMIiYp8cuRsGJZ9nLs7kQ3cDxb27p79Z2Z3zp7ZucbUqFFDFaAROAqUgR9us/tHgAZTZIAVwDvieQs0myICLAY+kc4QUDJFA7gmnPwKdAIL3LbfHQu4YooEsBD47Zz7A7RFjFnvzuHGzjdFAdgm7u7dhHH3xbitk+lQHzBGcRgDen2dnwaMUjxGq3kCvVP2CYSxOS2ENphJBtgo7N3RELwsBDtVvEy2d0DYu6Qh2CME+1S8TLZ3Wtg7oSG4SwheVfEy2d51Ya9dQ3CdEHyk4mWyvcfCXqtWjRNQUfEy2d4XYS9/zQTUAeNCtFHF0/hSXL4667SE30zIwnIV0fhyPOCVpvDtCVnYpCYcAtgi7NwyWgAXhfAhNeEQwFLgJPDC2jRauE/EgDNqwgkAs40WwA4RwEBOrTnAXuCmzXPx3Wz3B4AOVeed0dUigGcZNWYCx4Fh0vkOHLPXaAUwT4iPZLi+FFqgfHkKLNEKYkQIz61yIfxIdj4ATRoBPBeiq6pImyfkpwzU5w3ATrqA7Z7X2JyXtAIrbUmS4GzF3iDbGAgd784bwFkh1uX5tglP2H9Pzja3YoKoBI0voCViYmd/OwGHhdgFj/H7Ihz8bMsFd36Za3LFnYtqku3JE8Dmapb5UMrF3eVm9zvqWBT9eQKwwt6FFvA6xomoIJo9nPeym+RQQzWlrkdrZiJlUtImW2slxilr1OtjI2MAQynXDOcNYFCIrZ1SKRTRgd5pEnCFmfYkvmHyAJwSYj0pYzs8nQ/wCWK3Zovloe2jpixkdvGRrElxsCKCsKux5BswK28Atqr8JUTPA4sSxtuSWNLmHEsrJVoiSonU1d83iHOk88B1M+pdIZaXwdzFnAhgesIElRx045tcSZyV9+r/qbn/ENqBe+5zMIqftqsngihnvPMlUwRcOnVHTOwo7ITtAmaYomFLYltVujR86VbsUbffb1+Vud82Ncz/4y9eck577QmAcQAAAABJRU5ErkJggg=="/>
                                            <span draggable>Remove from Library</span>
                                        </a>
                                    </>
                                    :
                                    <>
                                        <a onClick={_ => integrate(json)} className="btn btn-primary" id='download-btn'>
                                        
                                        {!downloading ? 
                                        <>
                                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                                <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                                            </svg>
                                            <span draggable>Add to Library</span>
                                        </>
                                        : 
                                        <>
                                            <svg className="loading-spinner">
                                                <circle>
                                                    <animateTransform attributeName="transform" type="rotate" values="-90;810" keyTimes="0;1" dur="2s" repeatCount="indefinite"></animateTransform>
                                                    <animate attributeName="stroke-dashoffset" values="0%;0%;-157.080%" calcMode="spline" keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animate>
                                                    <animate attributeName="stroke-dasharray" values="0% 314.159%;157.080% 157.080%;0% 314.159%" calcMode="spline" keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animate>
                                                </circle>
                                            </svg>
                                            <span>{download_status}</span>
                                        </>
                                        }
                                        </a>
                                    </>
                                    }
                                    </>
                                }
                                  

                                  
                                  {/* <Tooltip anchorSelect="#draggableFile" place='top' clickable style={{ backgroundColor: "#101010", color: "#fff", border: "1px solid #666" }}>
                                      <p>Make sure Millennium is open and in view, then drag this button <br /> onto the interface and it will prompt you to install!</p>      
                                  </Tooltip>              */}
                              </>
                          }
                          {json?.skin_data?.funding?.kofi && <a href={`https://ko-fi.com/${json?.skin_data?.funding?.kofi}`} class="btn btn-primary" id="kofi-btn">
                            <img id="kofi-icon" src={"https://raw.githubusercontent.com/DeybisMelendez/godot-kofi-button/master/addons/kofi-donation-button/logo.png"}></img>
                            <span draggable="true">Support me on Ko-fi</span>
                          </a>}
                          <a rel="noreferrer noopener" target="_blank" href={json?.commit_data?.commitUrl} className="btn btn-secondary">
                              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                  <path fillRule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                              </svg>
                              <span>View Latest</span>
                          </a>
                      </div>
                      </section>
                      <h3 className="addon-details-section-header">About</h3>
                      <section id="about-addon">
                      <span className="addon-metadata-row">
                          <strong>Version: </strong> {json?.version} </span>
                      <span className="addon-metadata-row">
                          <strong>Downloads: </strong> {frm_num(json?.data?.download)} </span>
                      <span className="addon-metadata-row">
                          <strong>Added: </strong>{json?.data?.create_time && date_str(json?.data?.create_time)} </span>
                      <span className="addon-metadata-row">
                          <strong>Last Updated: </strong>{json?.commit_data?.committedDate && date_str(json?.commit_data?.committedDate)} </span>
                      <span className="addon-metadata-row">
                          <strong>Id: </strong>{json?.data?.id}</span>
                      <span className="addon-metadata-row">
                          <strong>Source: </strong>
                          <a rel="noreferrer noopener" target="_blank" className="anchor" href={`https://github.com/${json?.data?.github?.owner}/${json?.data?.github?.repo}/`}>{`https://github.com/${json?.data?.github?.owner}/${json?.data?.github?.repo}/`}</a>
                      </span>
                      </section>
                      <h3 className="addon-details-section-header">Author</h3>
                      <section id="addon-author">
                      <a target="_blank" href={`https://github.com/${json?.data?.github?.owner}`} className="addon-author-container">
                          <img loading="lazy" src={`https://github.com/${json?.data?.github?.owner}.png`}/>
                          <h5>{json?.data?.github?.owner}</h5>
                      </a>
                      </section>
                  </div>

                  {/* Render Discord server invite link if there is one provided */}
                  {!json?.discord ? <></> :         
                      <div className="addon-details-segment" id="addon-details-column-server">
                          <section id="addon-server">
                          <div className="flex-container align-center">
                              <img loading="lazy" src={json?.discord?.icon}/>
                              <div className="flex-container justify-center direction-column">
                              <h5>{json?.discord?.name}</h5>
                              <p>Support Server</p>
                              </div>
                          </div>
                          <a rel="noreferrer noopener" target="_blank" className="btn btn-primary" href={json?.discord?.link ?? "#"}>
                              <span>Join Server</span>
                          </a>
                          </section>
                      </div>
                  }     
                  {/* Render Tags if there are any */}
                  {json?.tags?.length ? 
                      <div className="addon-details-segment" id="addon-details-column-tags">
                          <h3 className="addon-details-section-header">Tags</h3>
                          <section>
                          <div className="addon-tags">
                              {json?.tags?.map((tag, index) => (
                                  <span key={index} className="addon-tag">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                          </section>
                      </div> : <></>
                  }
                  </div>
              </div>
              </div>
          </section>
          </section>
          {!isSteamClient ? <RenderFooter/> : <></>}
        </div>
      </div>
    </div>
  );
}
