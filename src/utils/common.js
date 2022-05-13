const { DateTime } = require("luxon");

function checkPrevSibbling(currEl) {
  let returnEl;

  returnEl =
    currEl.previousElementSibling.nodeName === "H2"
      ? currEl.previousElementSibling
      : checkPrevSibbling(currEl.previousElementSibling);

  return returnEl;
}

function checkPrevSibbling1(currEl) {
  let elem;
  if (
    currEl !== null &&
    (currEl.nodeName === "H2" || currEl.nodeName === "H3")
  ) {
    elem = currEl.textContent;
  } else {
    if (
      currEl.previousElementSibling !== null &&
      (currEl.previousElementSibling.nodeName === "H2" ||
        currEl.previousElementSibling.nodeName === "H3")
    ) {
      elem = currEl.previousElementSibling.textContent;
    } else if (
      currEl.parentElement !== null &&
      (currEl.parentElement.nodeName === "H2" ||
        currEl.parentElement.nodeName === "H3")
    ) {
      elem = currEl.parentElement.textContent;
    } else if (
      currEl.parentElement.previousElementSibling !== null &&
      (currEl.parentElement.previousElementSibling.nodeName === "H2" ||
        currEl.parentElement.previousElementSibling.nodeName === "H3")
    ) {
      elem = currEl.parentElement.previousElementSibling.textContent;
    } else if (currEl.previousElementSibling === null) {
      return checkPrevSibbling1(currEl.parentElement);
    } else if (elem !== "") {
      return checkPrevSibbling1(currEl.previousElementSibling);
    }
  }

  return elem;
}

export const rudderslabTrackOnSearch = (searchText) => {
  if (searchText === "") {
    return;
  }
  if (!window.rudderanalytics) {
    return;
  }
  let el;
  let urlString = window !== undefined ? window.location.href : "";
  let paramString = urlString.split("?")[1];
  let queryString = new URLSearchParams(paramString);
  let queryParams = {};

  for (let pair of queryString.entries()) {
    queryParams[pair[0]] = pair[1];
  }
  window.rudderanalytics.track("search", {
    page_title: document.title,
    search_text: searchText,
    gclid: queryParams.gclid ? queryParams.gclid : "",
    utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : "",
  });
};

export const rudderslabTrackOnYoutubeVideoPlaybackDocs = (title, event) => {
  if (!window.rudderanalytics) {
    return;
  }

  let urlString = window !== undefined ? window.location.href : "";
  let paramString = urlString.split("?")[1];
  let queryString = new URLSearchParams(paramString);
  let queryParams = {};

  for (let pair of queryString.entries()) {
    queryParams[pair[0]] = pair[1];
  }

  window.rudderanalytics.track("video_playback_started", {
    page_title: document.title,
    video_location: "",
    video_title: title,
    session_id: "",
    content_asset_ids: [event.target.playerInfo.videoData.video_id],
    content_pod_ids: [],
    ad_asset_id: [],
    ad_pod_id: [],
    ad_type: [],
    position: 0,
    total_length: event.target.playerInfo.duration,
    bitrate: null,
    framerate: null,
    branch: process.env.GATSBY_BRANCH,
    timezone: {
      name: DateTime.now().zone.name,
    },
    video_player: "youtube",
    sound: event.target.playerInfo.volume,
    full_screen: false,
    ad_enabled: false,
    quality: event.target.playerInfo.playbackQuality,
    livestream: false,
    gclid: queryParams.gclid ? queryParams.gclid : "",
    utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : "",
  });
};

export const rudderslabTrackOnClickDocs = (
  eventType,
  sectionName,
  e,
  isSeekSectionName
) => {
  let el;
  let urlString = window !== undefined ? window.location.href : "";
  let paramString = urlString.split("?")[1];
  let queryString = new URLSearchParams(paramString);
  let queryParams = {};

  for (let pair of queryString.entries()) {
    queryParams[pair[0]] = pair[1];
  }
  if (isSeekSectionName) {
    try {
      el = checkPrevSibbling1(e.currentTarget.parentElement);
    } catch {
      if (document.getElementsByTagName("h1")[0].hasChildNodes()) {
        el = document.getElementsByTagName("h1")[0].childNodes[0].textContent;
      } else {
        el = document.getElementsByTagName("h1")[0].innerHTML;
      }
    }

    if (!el) {
      //console.log('Entered if !el', e.target);
      el = document.getElementsByTagName("h1");
    }
  }

  if (!window.rudderanalytics) {
    return;
  }

  window.rudderanalytics.track("click", {
    // not quite sure how to get link text, so the below is an example to get the text of the link
    link_text:
      eventType === "sectionLink"
        ? e.currentTarget.parentNode.innerText
        : e.currentTarget.innerText,
    page_title: document.title,
    branch: process.env.GATSBY_BRANCH,
    timezone: {
      name: DateTime.now().zone.name,
    },
    link_location: el ? el : sectionName,
    // e.target.baseURI,
    // we want to track where the link points, whether it is a URL or internal path
    target_url: e.currentTarget.href ? e.currentTarget.href : e.target.baseURI,
    click_type: eventType,
    gclid: queryParams.gclid ? queryParams.gclid : "",
    utm_referrer: queryParams.utm_referrer ? queryParams.utm_referrer : "",
  });
  // console.log('after track call')
};
