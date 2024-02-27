"use client"

function CreateCard(item) {
    const data = item.data

	//const isSteamClient = navigator.userAgent.includes("Valve Steam Client")

    function formatNumber(number) {
        if (number >= 1000) {
          const formattedNumber = (number / 1000).toFixed(1);
          return `${formattedNumber}K`;
        } else {
          return number.toString();
        }
    }

    const openPopup = () => {
        window.location.href = `/theme?id=${data.data.id}`;
    };
    
    return (
        <>
            <a className="card-wrap" onClick={openPopup}>
                <div className="card">
                    <img loading="lazy" className="card-image" 
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src='https://i.imgur.com/Ritvk0y.png';
                            currentTarget.className = "card-image no-image" 
                        }} 
                        src={data?.header_image == "[NO-IMAGE]" ? 'https://i.imgur.com/Ritvk0y.png' : data?.header_image} alt="Thumbnail" data-holder-rendered="true" />
                    
                    <div className="card-body">
                    <h3 className="card-title">{data.name}</h3>
                    <p className="card-subtext package-author">by <object>
                        <a className="anchor author-link" target="_blank" rel="noreferrer noopener" href={`https://github.com/${data.data.github.owner}`}>{data.data.github.owner}</a>
                        </object>
                    </p>
                    <p className="card-description package-description">{data.description}</p>
                    <div className="addon-tags">
                        {data.tags.map((tag, index) => (
                            <span key={index} className="addon-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="card-footer">
                        {/* <object>
                        <a target="_blank" href={`/theme?id=${data.data.id}`} className="btn btn-primary">
                            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                            </svg>
                            <span>View More</span>
                        </a>
                        </object> */}
                        <div className="card-stats">
                        {/* <div className="card-stat" id="addon-downloads">
                            <svg className="package-stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                            <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                            </svg>
                            <span>{(data?.data?.download && formatNumber(data?.data?.download)) ?? "none"}</span>
                        </div> */}
                        {/* <div className="dot card-stat">•</div> */}
                        <div className="card-stat" id="addon-likes">
                            <span>v{data.version == "none" ? "1.0.0" : data.version}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="downloadTag">
                        <svg className="package-stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                        </svg>
                        <span className="downloadTagText">{(data?.data?.download && formatNumber(data?.data?.download)) ?? "none"}</span>
                    </div>
                </div>
            </a>
        </>
    )

}

export default CreateCard;