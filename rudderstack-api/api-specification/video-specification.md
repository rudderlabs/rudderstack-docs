---
description: >-
  Detailed technical description of the syntax and general conventions for
  sending events when tracking videos.
---

# Video Events

RudderStack's video specification lets you define how a customer engages with your videos and the related ad content. 

This documentation lists the conventions and best practices for sending events in case of video tracking videos. It will also clarify the overall structure and classification of these events.

{% hint style="warning" %}
Not all RudderStack destinations support video tracking. Refer to the individual destination's documentation to check if it supports this feature.
{% endhint %}

This guide is organized into the following three event categories:

* Playback
* Content
* Ads

## Playback

The playback events are associated with the actual playback of the video content and track the information about the video player.

For example, when a customer plays a video on your app, a `Video Playback Started` event is sent along with a unique `session_id`. All subsequent events generated from this session are tied to this same `session_id`. 

Suppose if you have a web page with two video players, you would have two separate sessions and `session_id` associated with them. On the other hand, two separate videos played on the same video player would still constitute a single session with two contents associated with it.

{% hint style="info" %}
All the playback events are tracked and recorded at the session level.
{% endhint %}

### Playback Events

This section details all the video playback events.

{% hint style="info" %}
For more information on each of the properties associated with these events, refer to the **Playback Event Properties** section.
{% endhint %}

#### Video Playback Started

This event is associated with the user action of pressing the play button on the video player to initiate the video playback.

A sample event is as shown below:

```javascript
{
    "action": "track",
    "event": "Video Playback Started",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "ad_asset_id": ["ad1", "ad0"],
      "ad_pod_id": ["adRudderA", "adRudderB"],
      "ad_type": ["mid-roll", "post-roll"],
      "position": 0,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Paused

This event corresponds to the user action of pausing the video playback.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Paused",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 0,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Interrupted

This event is sent when the video playback stops unintentionally. Network loss, user closing the browser, redirect, etc. are some of the common reasons. You can pass the cause within the property `method`.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Interrupted",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 0,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false,
      "method":"network loss"
    }
}
```

#### Video Playback Buffer Started

This corresponds to the event of buffering content or an advertisement.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Buffer Started",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 0,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Buffer Completed

This corresponds to the event when the playback finishes buffering the content or an advertisement.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Buffer Completed",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 0,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Seek Started

This event is sent when a user manually seeks a certain position of the video content or an advertisement in the playback. The `position` property indicates where the user is seeking from (time in seconds) and the `seek_position` indicates the position in the playback where the user is seeking to.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Seek Started",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 47,
      "seek_position": 120,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Seek Completed

This event is sent after a user manually seeks to a certain position of the video or ad in the playback. The `position` property indicates where the user resumes the playback.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Seek Completed",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 120,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Resumed

This event is sent after the user resumes the video playback after it was paused.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Resumed",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 120,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

#### Video Playback Completed

This event is sent after the playback is complete and when the session is finished. Note that the `position` property has the same value as the `total_length` property. 

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Playback Resumed",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "content_asset_ids": ["0129370"],
      "content_pod_ids": ["RudderA", "RudderB"],
      "position": 300,
      "total_length": 300,
      "bitrate": 128,
      "framerate": 30.00,
      "video_player": "youtube",
      "sound": 68,
      "full_screen": true,
      "ad_enabled": true,
      "quality": "hd1080",
      "livestream": false
    }
}
```

### Playback Event Properties

All the playback events share the same properties that describe the current state of the video player. 

The following table lists all the properties of this playback event object in detail:

| **Property**                                                              | **Type**                           | **Description**                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session_id`                                                              | String                             | <p>A unique ID that ties all the events <br>generated from a specific playback session. <br><br>These events include playback, content, and<br>ad events.</p>                                                                                                                                                                                |
| <p><code>content_asset_id</code></p><p><code>content_asset_ids</code></p> | <p>String</p><p>Array [String]</p> | <p>Content asset ID/s of the video/s playing or </p><p>about to be played. </p><p></p><p>For <code>Video Playback Started</code> events, an array</p><p>of unique asset IDs should be sent. For other</p><p>playback events, a singular content asset ID<br>at the time of the event should be sent.</p>                                     |
| <p><code>content_pod_id</code></p><p><code>content_pod_ids</code></p>     | <p>String</p><p>Array [String]</p> | <p>Content pod ID/s of the video/s playing or</p><p>about to be played.</p><p></p><p>For <code>Video Playback Started</code> events, an array</p><p>of unique pod IDs should be sent. For other</p><p>playback events, a singular content pod ID<br>associated with the current content pod at the <br>time of the event should be sent.</p> |
| `ad_asset_id`                                                             | <p>String</p><p>Array [String]</p> | <p>Ad asset ID/s of the video/s playing or </p><p>about to be played. </p><p></p><p>For <code>Video Playback Started</code> events, an array</p><p>of unique ad asset IDs should be sent. For other</p><p>playback events, a singular ad asset ID<br>at the time of the event should be sent.</p>                                            |
| `ad_pod_id`                                                               | <p>String</p><p>Array [String]</p> | <p>Ad pod ID/s of the video/s playing or</p><p>about to be played.</p><p></p><p>For <code>Video Playback Started</code> events, an array</p><p>of unique ad pod IDs should be sent. For other</p><p>playback events, a singular content pod ID<br>associated with the current ad pod at the <br>time of the event should be sent.</p>        |
| `ad_type`                                                                 | Enum                               | <p>Denotes the type of ad playing at the time of the </p><p>event. The values can be '<code>pre-roll</code>', '<code>mid-roll</code>', and </p><p>'<code>post-roll</code>'.</p>                                                                                                                                                              |
| `position`                                                                | Integer                            | <p>Denotes the current index position of the playhead <br>in seconds. It includes the duration of any seen ads. <br><br>If the playback is a livestream, refer to the <br>documentation of the relevant destination for steps <br>on correctly passing the playhead position.</p>                                                            |
| `seek_position`                                                           | Integer                            | <p>Denotes the index position of the playhead where the </p><p>user is seeking to. </p><p></p><p>Only applicable on the <code>Video Playback Seek Started</code> <br>events. On Video Playback Seek Completed events, </p><p>the <code>seek_position</code> should be equal to <code>position</code>.</p>                                    |
| `total_length`                                                            | Integer                            | <p>Denotes the total duration of the video playback</p><p>in seconds. Includes the whole duration of all </p><p>the content and ads included in the session.</p><p></p><p>Set to <code>null</code> in case of a livestream playback.</p>                                                                                                     |
| `bitrate`                                                                 | Integer                            | Bit rate of the video playback, denoted in `kbps`                                                                                                                                                                                                                                                                                            |
| `framerate`                                                               | Float                              | <p>Denotes the average frame rate of the video <br>playback in <code>fps</code>.</p>                                                                                                                                                                                                                                                         |
| `video_player`                                                            | String                             | <p>Denotes the name of the video player used for</p><p>playback. Example: <code>youtube</code>, <code>vimeo</code>, etc.</p>                                                                                                                                                                                                                 |
| `sound`                                                                   | Integer                            | <p>Denotes the sound level of the video playback.</p><p></p><p>Range is from 0-100, where 0 represents mute </p><p>and 100 is full volume.</p>                                                                                                                                                                                               |
| `full_screen`                                                             | Boolean                            | <p>Set to <code>true</code> if the playback is in fullscreen <br>mode.</p>                                                                                                                                                                                                                                                                   |
| `ad_enabled`                                                              | Boolean                            | <p>Set to <code>false</code> if the user has any ad blockers.</p><p><br>If the user can view your video ads, it is set to</p><p><code>true</code>.</p>                                                                                                                                                                                       |
| `quality`                                                                 | String                             | <p>Specifies the quality of the video. <br><br>Examples:  'hd1080', 'highres'</p>                                                                                                                                                                                                                                                            |
| `method`                                                                  | String                             | <p>For the <code>Video Playback Interrupted</code> events, <br>you can send this property denoting how the</p><p>playback was interrupted. </p><p></p><p>Some examples include 'device lock', 'call', and </p><p>'browser redirect'.</p>                                                                                                     |
| `livestream`                                                              | Boolean                            | <p>Set to <code>true</code> in case the playback is a live stream,<br>else set to <code>false</code>. </p>                                                                                                                                                                                                                                   |

## Content

A content **pod **refers to a part / group / segment of the video content or the advertisement within the playback.

Suppose a video playback session has a video and one mid-roll advertisement. This means that the mid-roll ad splits the playback in two separate content pods. The mid-roll ad is included within a single ad pod. 

The flow is as follows:

* User starts and completes the first content pod
* User starts and completes the ad
* User starts and completes the second content pod

{% hint style="info" %}
All of these events within the flow happen within one video playback.
{% endhint %}

### Content Events

This section details all the video content events.

{% hint style="info" %}
For more information on each of the properties associated with these events, refer to the **Content Event Properties** section.
{% endhint %}

#### Video Content Started

This event is sent once the user starts playing video content segment within a playback.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Content Started",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "asset_id": "123",
      "pod_id": "RudderA",
      "program": "Planet of the Apes",
      "title": "Introduction",
      "description": "Sample description",
      "season": "3",
      "position": 0,
      "total_length": 300,
      "genre": "Fantasy",
      "publisher": "Amazon",
      "full_episode": true,
      "keywords": ["apes", "forests", "zoo"]
    }
}
```

#### Video Content Playing

These events are sent as heartbeats every after a set interval to indicate the length of video viewed by the user, determined by the `position` property.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Content Playing",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "asset_id": "123",
      "pod_id": "RudderA",
      "program": "Planet of the Apes",
      "title": "Introduction",
      "description": "Sample description",
      "season": "3",
      "position": 234,
      "total_length": 300,
      "genre": "Fantasy",
      "publisher": "Amazon",
      "full_episode": true,
      "keywords": ["apes", "forests", "zoo"]
    }
}
```

#### Video Content Completed

This event is sent once the video segment within the playback is completed. Note that the `position` property has the same value as the `total_length` property.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Content Completed",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "asset_id": "123",
      "pod_id": "RudderA",
      "program": "Planet of the Apes",
      "title": "Introduction",
      "description": "Sample description",
      "season": "3",
      "position": 300,
      "total_length": 300,
      "genre": "Fantasy",
      "publisher": "Amazon",
      "full_episode": true,
      "keywords": ["apes", "forests", "zoo"]
    }
}
```

### Content Event Properties

All the content events share the same properties that describe the current state of the video content that is viewed by the user during the playback. 

The following table lists all the properties of this playback event object in detail:

| **Property**   | **Type**                          | **Description**                                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session_id`   | String                            | <p>A unique ID that ties all the events <br>generated from a specific playback session. <br><br>These events include playback, content, and<br>ad events.</p>                                                                                                                                 |
| `asset_id`     | String                            | Denotes the unique ID of the video content asset.                                                                                                                                                                                                                                             |
| `pod_id`       | String                            | Denotes the unique ID of the video content pod.                                                                                                                                                                                                                                               |
| `title`        | String                            | Denotes the title of the video content.                                                                                                                                                                                                                                                       |
| `description`  | String                            | Describes the video content asset in short.                                                                                                                                                                                                                                                   |
| `keywords`     | Array \[String]                   | <p>Denotes the relevant keywords associated with the </p><p>categorizing the video content</p>                                                                                                                                                                                                |
| `season`       | String                            | Denotes the season number, if applicable.                                                                                                                                                                                                                                                     |
| `episode`      | String                            | Denotes the episode number, if applicable.                                                                                                                                                                                                                                                    |
| `genre`        | String                            | Denotes the genre of the video content asset.                                                                                                                                                                                                                                                 |
| `program`      | String                            | <p>Denotes the name of the program / show of which </p><p>the video content is a part.</p>                                                                                                                                                                                                    |
| `publisher`    | String                            | <p>Denotes the publisher / creator / author of the </p><p>video content asset.</p>                                                                                                                                                                                                            |
| `channel`      | String                            | <p>Denotes the channel in which the video content </p><p>is playing.</p>                                                                                                                                                                                                                      |
| `full_episode` | Boolean                           | Set to `true` the video content asset is a full episode.                                                                                                                                                                                                                                      |
| `livestream`   | Boolean                           | <p>If the video content is a live stream, this is set to </p><p><code>true</code>.</p>                                                                                                                                                                                                        |
| `airdate`      | <p>ISO 8601</p><p>Date String</p> | <p>Denotes the original date of airing / publishing </p><p>the video content.</p>                                                                                                                                                                                                             |
| `position`     | Integer                           | <p>Denotes the current playhead position into the </p><p>video content in seconds. This does not include</p><p>any ads played in this duration.</p><p></p><p>In case of live streams, refer to the relevant <br>destination's documentation for details on how to <br>pass this property.</p> |
| `total_length` | Integer                           | <p>The total duration of the video content in </p><p>seconds. This does not include any ads included</p><p>in the playback of this content asset.</p><p></p><p>For livestream playback, this should be set to <code>null</code>.</p>                                                          |
| `bitrate`      | Integer                           | Denotes the current bit rate in `kbps`.                                                                                                                                                                                                                                                       |
| `framerate`    | Float                             | Denotes the frame rate in `fps`.                                                                                                                                                                                                                                                              |

## Ads

### Ad Events

This section details all the ad events.

{% hint style="info" %}
For more information on each of the properties associated with these events, refer to the **Ad Event Properties** section.
{% endhint %}

#### Video Ad Started

This event is sent when an advertisement starts playing within the video playback.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Ad Started",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "asset_id": "123",
      "pod_id": "RudderA",
      "type": "mid-roll",
      "title": "Raw is War!",
      "position": 0,
      "total_length": 25,
      "publisher": "WWE",
      "load_type": "linear"
    }
}
```

#### Video Ad Playing

This event is sent between set intervals when the video ad is playing and is determined by the `position` property.

A sample event is as shown:

```javascript
{
    "action": "track",
    "event": "Video Ad Playing",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "asset_id": "123",
      "pod_id": "RudderA",
      "type": "pre-roll",
      "title": "Raw is War!",
      "position": 3,
      "total_length": 25,
      "publisher": "WWE",
      "load_type": "linear"
    }
}
```

#### Video Ad Completed

This event is sent after the user has viewed the video ad completely. Note that the `position` property has the same value as the `total_length` property.

```javascript
{
    "action": "track",
    "event": "Video Ad Completed",
    "userId": "user12345",
    "properties": {
      "session_id": "12345",
      "asset_id": "123",
      "pod_id": "RudderA",
      "type": "pre-roll",
      "title": "Raw is War!",
      "position": 25,
      "total_length": 25,
      "publisher": "WWE",
      "load_type": "linear"
    }
}
```

### Ad Event Properties

All the ad events share the same properties that describe the current state of the video ad content that a user is interacting with during the playback. 

The following table lists all the properties of this playback event object in detail:

| Property       | Type    | Description                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session_id`   | String  | <p>A unique ID that ties all the events <br>generated from a specific playback session. <br><br>These events include playback, content, and<br>ad events.</p>                                                                                                                                                                 |
| `asset_id`     | String  | Denotes the unique ID of the ad asset.                                                                                                                                                                                                                                                                                        |
| `pod_id`       | String  | Denotes the unique ID of the ad pod.                                                                                                                                                                                                                                                                                          |
| `pod_position` | Integer | <p>Denotes the position of the ad asset relative </p><p>to other ads in the same pod.</p>                                                                                                                                                                                                                                     |
| `pod_length`   | Integer | <p>Denotes the number of ad assets in the current </p><p>ad pod.</p>                                                                                                                                                                                                                                                          |
| `type`         | Enum    | <p>Denotes the type of ad. Values can be either of </p><p>'<code>pre-roll</code>', '<code>mid-roll</code>', or '<code>post-roll</code>'.</p>                                                                                                                                                                                  |
| `title`        | String  | Denotes the title of the ad.                                                                                                                                                                                                                                                                                                  |
| `publisher`    | String  | Denotes the author/ creator/ publisher of the ad.                                                                                                                                                                                                                                                                             |
| `position`     | Integer | <p>The current playhead position in relation to the </p><p>total length of the ad, in seconds.</p>                                                                                                                                                                                                                            |
| `total_length` | Integer | Denotes the total length of the ad asset in seconds.                                                                                                                                                                                                                                                                          |
| `load_type`    | Enum    | <p>Denotes if the ads are loaded dynamically or if </p><p>they are the same for all the users. <br><br>Values can be either '<code>dynamic</code>' or '<code>linear</code>'.</p>                                                                                                                                              |
| `content`      | Object  | <p>Some destinations require the content metadata </p><p>to be sent with the ad events. </p><p></p><p>You can send all the metadata as a Content Event <br>Object under this property.</p>                                                                                                                                    |
| `quartile`     | Integer | <p>For the <code>Video Ad Playing</code> event, this property </p><p>can be used to indicate when a specific ad quartile </p><p>is reached.</p><p></p><p>If you are using a client-side library to track your </p><p>video events, this property is optional as RudderStack </p><p>automatically tracks the ad quartiles.</p> |

## Resuming Playback

Every `Video Playback Resumed` the event should be followed by a heartbeat event (`Video Content Playing` or a  `Video Ad Playing` event, depending on what asset the playback resumes to. 

## Video Quality

RudderStack also lets you track and analyze the performance and quality of your video content during the playback. 

Whenever a user changes the video quality during playback, you can track a Video Quality Updated event along with the following properties:

* `bitrate`: Denotes the updated bit rate in `kbps`.
* `framerate`: Denotes the updated frame rate in `fps`.
* `startupTime`: Denotes the time when the video quality was changed by the user.
* `droppedFrames`: Indicates if any frames were dropped during the video quality change. 

## Events Lifecycle

The following event flow demonstrates how you can implement the RudderStack video specification:

#### 1. User presses play on a video player

```javascript
rudderanalytics.track('Video Playback Started', {
  session_id: '12345',
  content_asset_ids: ['123'],
  content_pod_ids: ['RudderA'],
  ad_asset_ids: [ 'ad1' ],
  ad_pod_ids: ['adRudderA'],
  ad_types: ['mid-roll'],
  position: 0,
  total_length: 300,
  bitrate: 128,
  video_player: 'youtube',
  sound: 66,
  full_screen: true,
  ad_enabled: false,
  quality: 'hd1080'
});
```

#### 2. Video playback starts playing the content

```javascript
rudderanalytics.track('Video Content Started', {
  session_id: '12345',
  asset_id: '123',
  pod_id: 'RudderA',
  title: 'Raw is War!!',
  description: 'Sample description',
  keywords: ['wrestling', 'entertainment'],
  season: '1',
  episode: '90',
  genre: 'entertainment',
  program: 'WWE',
  publisher: 'WWE',
  position: 0,
  total_length: 300,
  channel: 'ten',
  full_episode: true,
  livestream: false,
  airdate: '2020-04-23'
});
```

#### 3. User views the content for 10 seconds followed by a 10 second heartbeat

```javascript
rudderanalytics.track('Video Content Playing', {
  session_id: '12345',
  asset_id: '123',
  pod_id: 'RudderA',
  title: 'Raw is War!!',
  description: 'Sample description',
  keywords: ['wrestling', 'entertainment'],
  season: '1',
  episode: '90',
  genre: 'entertainment',
  program: 'WWE',
  publisher: 'WWE',
  position: 10,
  total_length: 300,
  channel: 'ten',
  full_episode: true,
  livestream: false,
  airdate: '2020-04-23'
});
```

#### 4. Video playback is paused

```javascript
rudderanalytics.track('Video Playback Paused', {
  session_id: '12345',
  content_asset_id: '123',
  content_pod_id: 'RudderA',
  ad_asset_id: null,
  ad_pod_id: null,
  ad_type: null,
  position: 11,
  total_length: 300,
  video_player: 'youtube',
  sound: 66,
  bitrate: 128,
  full_screen: true,
  ad_enabled: false,
  quality: 'hd1080'
});
```

#### 5. User resumes the video playback.

```javascript
rudderanalytics.track('Video Playback Resumed', {
  session_id: '12345',
  content_asset_id: '123',
  content_pod_id: 'RudderA',
  ad_asset_id: null,
  ad_pod_id: null,
  ad_type: null,
  position: 11,
  total_length: 300,
  video_player: 'youtube',
  sound: 66,
  bitrate: 128,
  full_screen: true,
  ad_enabled: false,
  quality: 'hd1080'
});
```

#### 6. Ad (mid-roll) starts playing after user resumes playback

```javascript
rudderanalytics.track('Video Ad Started', {
  session_id: '12345',
  asset_id: 'ad1',
  pod_id: 'adRudderA',
  type: 'mid-roll',
  title: 'Thums Up',
  publisher: 'Coca Cola',
  position: 0,
  total_length: 15,
  load_type: 'linear'
});
```

#### 7. User watches the complete 15 second advertisement. RudderStack also tracks the 10 second heartbeats.

```javascript
rudderanalytics.track('Video Ad Playing', {
  session_id: '12345',
  asset_id: 'ad1',
  pod_id: 'adRudderA',
  type: 'mid-roll',
  title: 'Thums Up',
  publisher: 'Coca Cola',
  position: 10,
  total_length: 15,
  load_type: 'linear'
});
```

#### 8. Video ad plays completely.

```javascript
rudderanalytics.track('Video Ad Completed', {
  session_id: '12345',
  asset_id: 'ad1',
  pod_id: 'adRudderA',
  type: 'mid-roll',
  title: 'Thums Up',
  publisher: 'Coca Cola',
  position: 15,
  total_length: 15,
  load_type: 'linear'
});
```

#### 9. Video content resumes playing. Heartbeats are sent every 10 seconds.

```javascript
rudderanalytics.track('Video Content Playing', {
  session_id: '12345',
  asset_id: '123',
  pod_id: 'RudderA',
  title: 'Raw is War!!',
  description: 'Sample description',
  keywords: ['wrestling', 'entertainment'],
  season: '1',
  episode: '90',
  genre: 'entertainment',
  program: 'WWE',
  publisher: 'WWE',
  position: 11,
  total_length: 300,
  channel: 'ten',
  full_episode: true,
  livestream: false,
  airdate: '2020-04-23'
});
```

#### 10. User finishes watching the entire video content.

```javascript
rudderanalytics.track('Video Content Completed', {
  session_id: '12345',
  asset_id: '123',
  pod_id: 'RudderA',
  title: 'Raw is War!!',
  description: 'Sample description',
  keywords: ['wrestling', 'entertainment'],
  season: '1',
  episode: '90',
  genre: 'entertainment',
  program: 'WWE',
  publisher: 'WWE',
  position: 300,
  total_length: 300,
  channel: 'ten',
  full_episode: true,
  livestream: false,
  airdate: '2020-04-23'
});
```

#### 11. Video playback finishes.

```javascript
rudderanalytics.track('Video Playback Completed', {
  session_id: '12345',
  content_asset_id: null,
  content_pod_id: null,
  ad_asset_id: 'ad1',
  ad_pod_id: 'adRudderA',
  ad_type: null,
  position: 300,
  total_length: 300,
  sound: 66,
  bitrate: 128,
  full_screen: true,
  video_player: 'youtube',
  ad_enabled: false,
  quality: 'hd1080'
});
```

## FAQs

#### What are pre-roll, mid-roll, and post-roll ads?

* Ads that appear before the start of the video playback are called pre-roll ads.
* Ads that appear in the middle of the playback are mid-roll ads.
* Ads that appear after the video playback are called post-roll ads.

These ads can be a promotional video by the sponsors or a piece of content offered by the content provider.

## Contact Us

For more information on the RudderStack video spec, feel free to [**contact us**](mailto:%20docs@rudderstack.com). You can also start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
