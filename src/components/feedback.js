import React, { useState } from "react"
const { DateTime } = require("luxon")
const Feedback = () => {
    const [feedback, setFeedback] = useState(false)
    const handleClick = (e, score) => {
        e.preventDefault();
        if (!window.rudderanalytics) {
            return
        }
        setFeedback(!feedback)
        // On Click of the emoji send the following track call
        const params = new URLSearchParams(document.location.search.substring(1));
        let urlString = window !== undefined ? window.location.href : "";
        let paramString = urlString.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        let queryParams = {};

        window.rudderanalytics.track("Doc Feedback Submitted", {
            rating: score,// 1-> Sad, 2-> Neutral, 3-> Happy,
            page: document.title,
            page_URL: window.location.href,
            branch: process.env.GATSBY_BRANCH,
            timezone: {
                name: DateTime.now().zone.name,
            },
            utm_source: params.get("utm_source"),
            utm_medium: params.get("utm_medium"),
            utm_campaign: params.get("utm_campaign"),
            utm_content: params.get("utm_content"),
            utm_term: params.get("utm_term"),
            raid: params.get("raid"),
            gclid: queryParams.gclid ? queryParams.gclid : "",
            utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : ""
        })
    }
    return (<div className="feedback-container">
        {feedback ? <p className="message">Thank you for your feedback</p>
            : <div className="inner-container">
                <p>How helpful was this?</p>
                <ul>
                    <li className="sad"><a onClick={(e) => handleClick(e, 1)}></a></li>
                    <li className="neutral"><a onClick={(e) => handleClick(e, 2)}></a></li>
                    <li className="happy"><a onClick={(e) => handleClick(e, 3)}></a></li>
                </ul>
            </div>}
    </div>)
}
export default Feedback
