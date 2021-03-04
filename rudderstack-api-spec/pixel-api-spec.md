# Pixel Endpoints

**Sends a page call to Rudder server.**

- **URL**

    *<data_plane_url>/pixel/v1/page*

- **Method:**

    `GET`

- **URL Params**

    **Required:**

    `writeKey=${writeKey}`

    `anonymousId=${anonymousId}`

    **Optional:** 

    `userId=${userId}`

    `name=${page_name}`

    `context.library.name`

    `context.library.version`

    `context.platform`

    `context.locale`

    `context.userAgent`

    `context.screen.width`

    `context.screen.height`

    `context.page.path`

    `context.page.url`

    `context.page.referrer`

    `context.page.title`

    `properties.<*key1*>=${value}`

    `properties.<*key2*>=${value}`

    `properties. ...`

**Note:** For this endpoint, we expect the page view basic properties like path, url, referrer, title be passed either with `context.page.<page_basic_properties>` or with `properties.<page_basic_properties>` . 

The dot(`.`) separated query params is being mapped by Rudder server to a [familiar page payload](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#8-1-page-payload) before being sent to destinations. Currently, we don't support overriding `integration` key for sending data to selective destination for this endpoint.

- **Data Params**

    None

- **Success Response:**
    - **Code:** 200 **Content:** `OK`
- **Error Response:**
    - **Code:** 400 Bad Request       **Content:** `error string`
- **Sample Call:**

    `https://hosted.rudderlabs.com/pixel/v1/page?writeKey=${writeKey}&context.library.name=Rudderstack AMP SDK&context.library.version=1.0.0&context.platform=AMP&anonymousId=${anonymousId}&context.locale=${browserLanguage}&context.userAgent=${userAgent}&context.page.path=${canonicalPath}&context.page.url=${canonicalUrl}&context.page.referrer=${documentReferrer}&context.page.title=${title}&context.screen.width=${screenWidth}&context.screen.height=${screenHeight}&properties.path=${canonicalPath}&properties.url=${canonicalUrl}&properties.referrer=${documentReferrer}&properties.title=${title}&name=${pageName}`

    **Sends a track call to Rudder server.**

    - **URL**

        *<data_plane_url>/pixel/v1/track*

    - **Method:**

        `GET`

    - **URL Params**

        **Required:**

        `writeKey=${writeKey}`

        `anonymousId=${anonymousId}`

        `event=${event_name}`

        **Optional:** 

        `userId=${userId}`

        `context.library.name`

        `context.library.version`

        `context.platform`

        `context.locale`

        `context.userAgent`

        `context.screen.width`

        `context.screen.height`

        `context.page.path`

        `context.page.url`

        `context.page.referrer`

        `context.page.title`

        `properties.<*key1*>=${value}`

        `properties.<*key2*>=${value}`

        `properties. ...`

    **Note:** For this endpoint, we expect the page view basic properties like path, url, referrer, title be passed either with `context.page.<page_basic_properties>` . The event related properties should be sent as `properties.<*key1*>=${value}`.

    The dot(`.`) separated query params is being mapped by Rudder server to a [familiar track payload](https://docs.rudderstack.com/rudderstack-api-spec/http-api-specification#7-2-track-usage) before being sent to destinations. Currently, we don't support overriding `integration` key for sending data to selective destination for this endpoint.

    - **Data Params**

        None

    - **Success Response:**
        - **Code:** 200 **Content:** `OK`
    - **Error Response:**
        - **Code:** 400 Bad Request       **Content:** `error string`
    - **Sample Call:**

        `https://hosted.rudderlabs.com/pixel/v1/track?writeKey=${writeKey}&context.library.name=Rudderstack AMP SDK&context.library.version=1.0.0&context.platform=AMP&anonymousId=${anonymousId}&context.locale=${browserLanguage}&context.userAgent=${userAgent}&context.page.path=${canonicalPath}&context.page.url=${canonicalUrl}&context.page.referrer=${documentReferrer}&context.page.title=${title}&context.screen.width=${screenWidth}&context.screen.height=${screenHeight}&event=${eventName}&properties.key1=value1&properties.key2=value2`