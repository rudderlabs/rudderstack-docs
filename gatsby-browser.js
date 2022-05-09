const { DateTime } = require("luxon");

export const onRouteUpdate = (_ref, _ref2) => {
  let prevLocation = _ref.prevLocation;

  function trackRudderStackPage() {
    let delay = 1000;
    let urlString = window !== undefined ? window.location.href : "";
    let paramString = urlString.split("?")[1];
    let queryString = new URLSearchParams(paramString);
    let queryParams = {};

    for (let pair of queryString.entries()) {
      queryParams[pair[0]] = pair[1];
    }

    window.setTimeout(function () {
      window.rudderanalytics &&
        window.rudderanalytics.page("page_view", {
          branch: process.env.GATSBY_BRANCH,
          timezone: {
            name: DateTime.now().zone.name,
          },
          gclid: queryParams.gclid ? queryParams.gclid : "",
          utm_referrer: queryParams.utm_referrer
            ? queryParams.utm_referrer
            : "",
        });
    }, delay);
  }

  if (window.rudderSnippetLoaded === false) {
    if (window.rudderSnippetLoading === true) {
      // As the loading is in progress, set the alternate callback function
      // to track page
      window.rudderSnippetLoadedCallback = function () {
        trackRudderStackPage();
      };
    } else {
      // if it is not the first page
      if (prevLocation) {
        // Trigger the script loader and set the callback function
        // to track page
        window.rudderSnippetLoadedCallback = undefined;
        window.rudderSnippetLoader(function () {
          trackRudderStackPage();
        });
      } else {
        // As this is the first page, set the alternate callback function
        // to track page and wait for the scroll event to occur (for SDK to get loaded)
        window.rudderSnippetLoadedCallback = function () {
          trackRudderStackPage();
        };
      }
    }
  } else {
    trackRudderStackPage();
  }
};
