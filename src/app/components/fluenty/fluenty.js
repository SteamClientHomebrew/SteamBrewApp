function download_count()
{
    return "1.4K"
}

function DisplayFluentyAd() {

    return (
        <>
        <a className="card-wrap featured" href="/fluenty-steam">
            <div className="card featured">
                <img loading="lazy" className="card-image" src='https://i.imgur.com/2aAaAES.gif' alt="Thumbnail" data-holder-rendered="true" />
                <div className="card-body">
                <h3 className="card-title">Fluenty</h3>
                <p className="card-subtext package-author">by <object>
                    <a className="anchor author-link" target="_blank" rel="noreferrer noopener" href={`https://www.patreon.com/FluentyforSteam`}>Shadow, Hexality</a>
                    </object>
                </p>
                <p className="card-description package-description">Windows 11-esk Steam</p>
                <div className="addon-tags">
                        <span className="addon-tag">Dark</span>
                        <span className="addon-tag">Fluent</span>
                        <span className="addon-tag">Minimal</span>
                        <span className="addon-tag">Soft</span>
                </div>
                <div className="card-footer">

                    <div className="card-stats">
                    <div className="card-stat" id="addon-likes">
                        <span>v{"1.0.1"}</span>
                    </div>
                    </div>
                    
                </div>
                <div className="downloadTag">
                        <svg className="package-stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                        </svg>
                        <span className="downloadTagText">{download_count()}</span>
                    </div>
                </div>
            </div>
            </a>
        </>
    )

}

export { DisplayFluentyAd, download_count }