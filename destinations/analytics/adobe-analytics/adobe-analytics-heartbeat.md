---
description: >-
  Detailed technical documentation on using the Adobe Analytics heartbeat events
  with RudderStack for measuring streaming media.
---

# Adobe Analytics Heartbeat Measurement

\*\*\*\*[**Adobe Analytics for Streaming Media**](https://experienceleague.adobe.com/docs/media-analytics/using/media-overview.html) is an add-on that offers measurement tools for different types of media such as audio, video, and advertisements.

Adobe Analytics uses “heartbeats” to collect different metrics related to the video during playback. These heartbeats are sent to the Adobe heartbeat tracking server every ten seconds to measure the time the video is played.

{% hint style="info" %}
For sending the heartbeat events to Adobe Analytics, you will need the Heartbeat Tracking Server URL. To get this URL, contact your Adobe representative. Also, you will need to map your RudderStack events with the type of Adobe heartbeat event you want to send.
{% endhint %}

{% hint style="info" %}
The [**RudderStack dashboard settings**](setting-up-adobe-analytics-in-rudderstack.md) also has a toggle for SSL which, if enabled, will send the Heartbeat Tracking URL in the HTTPS mode.
{% endhint %}

## Playback Head

For sending video heartbeat events to Adobe Analytics through RudderStack's Web \(JavaScript\) SDK, Adobe's Media Heartbeat SDK needs a playhead update at least once every second for the main content. The video/ad start and heartbeat update playhead type of events update this playhead using the `position` property.

To stop triggering this event for every second, the playhead to the window needs to be set. This can be done by setting `window.rudderHBPlayheads` to the key-value pair of the current content’s `session_id` and `position` as shown:

```text
window.rudderHBPlayheads = {
  "session_id": position value
}
```

RudderStack sends the Adobe heartbeat events as per the following categories:

## Initialize Heartbeat

* Adobe Analytics Method Triggered: `trackSessionStart`
* Description: This is used for initializing all the heartbeat calls. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Video Start

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackPlay`, `trackEvent(ChapterStart)`
* Description: This is used when a video is started. The Context Data is set as mapped in settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |
| `chapter_name` | Sent for creating `createChapterObject`. | "no chapter name" |
| `position` | Sent for creating `createChapterObject`. | 1 |
| `length` | Sent for creating `createChapterObject`. | 6000 |
| `start_time` | Sent for creating `createChapterObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Video Paused

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackPause`
* Description: This is used when a video is paused. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Video Complete

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackEvent(ChapterComplete)`
* Description: This is used when a video is completed. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Session End

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackComplete`, `trackSessionEnd`
* Description: This is used when a session ends. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Ad Started

* Adobe Analytics Method Triggered: `trackEvent(AdBreakStart)`, `trackEvent(AdStart)`.
* Description: This is used when an ad is started. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `session_id` | To check if present in `window.rudderHBPlayheads`. | "default" |
| `title` | Sent for creating `AdObject`. | "no title" |
| `asset_id` | Sent for creating `AdObject`. | "default ad" |
| `position` | Sent for creating `AdObject` and `AdBreakObject`. | 1 |
| `total_length` | Sent for creating `MediaObject`. | 0 |
| `type` | Sent for creating `AdBreakObject`. | "unknown" |
| `content` | Sent for `trackEvent`. | empty JSON |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Ad Completed

* Adobe Analytics Method Triggered: `trackEvent(AdComplete)`, `trackEvent(AdBreakComplete)`. If an ad break is in progress, then `trackEvent(AdBreakStart)` and `trackEvent(AdStart)` are also triggered.
* Description: This is used when an ad is completed. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `session_id` | To check if present in `window.rudderHBPlayheads`. | "default" |
| `title` | Sent for creating `AdObject`. | "no title" |
| `asset_id` | Sent for creating `AdObject`. | "default ad" |
| `position` | Sent for creating `AdObject` and `AdBreakObject`. | 1 |
| `total_length` | Sent for creating `MediaObject`. | 0 |
| `type` | Sent for creating `AdBreakObject`. | "unknown" |
| `content` | Sent for `trackEvent`. | empty JSON |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Ad Skipped

* Adobe Analytics Method Triggered: `trackEvent(AdSkip)`, `trackEvent(AdBreakComplete)`. If an ad break is in progress, then `trackEvent(AdBreakStart)` and `trackEvent(AdStart)` are also triggered.
* Description: This is used when an ad is skipped. The Context Data is set as mapped in the settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `session_id` | To check if present in `window.rudderHBPlayheads`. | "default" |
| `title` | Sent for creating `AdObject`. | "no title" |
| `asset_id` | Sent for creating `AdObject`. | "default ad" |
| `position` | Sent for creating `AdObject` and `AdBreakObject`. | 1 |
| `total_length` | Sent for creating `MediaObject`. | 0 |
| `type` | Sent for creating `AdBreakObject`. | "unknown" |
| `content` | Sent for `trackEvent`. | empty JSON |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Seek Started

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackEvent(SeekStart)`
* Description: This is used when a video seek is started. The Context Data is set as mapped in settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Seek Completed

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackEvent(SeekComplete)`
* Description: This is used when a video seek is completed. The Context Data is set as mapped in settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Buffer Started

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackEvent(BufferStart)`
* Description: This is used when a video buffer has started. The Context Data is set as mapped in settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Buffer Completed

* Adobe Analytics Method Triggered: `trackSessionStart`, `trackEvent(BufferComplete)`
* Description: This is used when a video buffer has completed. The Context Data is set as mapped in settings.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `channel` | Needs to be set for media heartbeat property channel or an empty string will be sent. | - |
| `video_player` | Needs to be set for media heartbeat property playerName or "unknown" will be sent. | - |
| `session_id` | To check if present in `window.rudderHBPlayheads` | "default" |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | Sent for creating `QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |
| `livestream` | Sent for creating `MediaObject` | - |
| `title` | Sent for creating `MediaObject`. | "no title" |
| `asset_id` | Sent for creating `MediaObject`. | "default ad" |
| `total_length` | Sent for creating `MediaObject`. | 0 |

{% hint style="info" %}
The properties mapped in the **Standard Video Metadata** section below will also be set.
{% endhint %}

## Heartbeat Quality Updated

* Description: The quality of experience tracking includes both quality of service \(QoS\) and error tracking. These are optional elements and are not required for the core media tracking implementations. You can use the media player's API to identify the variables related to QoS and error tracking.
* Properties used:

| RudderStack property | Description | Default Value |
| :--- | :--- | :--- |
| `bitrate` | Sent for creating `QoSObject`. | 0 |
| `startupTime` | `Sent for creating QoSObject`. | 0 |
| `fps` | Sent for creating `QoSObject` . | 0 |
| `droppedFrames` | Sent for creating `QoSObject`. | 0 |

## Heartbeat Playhead Update

* Description: This changes the playhead position. Initially, the playhead is set to 0. While initializing the heartbeat, it is set to the `position` value of that `session_id` in `window.rudderHBPlayheads`.

## Standard Video Metadata

The following RudderStack properties must also be sent for mapping to the standard video metadata:

| RudderStack property | Standard Video Adobe Metadata |
| :--- | :--- |
| `program` | `MediaHeartbeat.VideoMetadataKeys.SHOW` |
| `season` | `MediaHeartbeat.VideoMetadataKeys.SEASON` |
| `episode` | `MediaHeartbeat.VideoMetadataKeys.EPISODE` |
| `assetId` | `MediaHeartbeat.VideoMetadataKeys.ASSET_ID` |
| `contentAssetId` | `MediaHeartbeat.VideoMetadataKeys.ASSET_ID` |
| `genre` | `MediaHeartbeat.VideoMetadataKeys.GENRE` |
| `airdate` | `MediaHeartbeat.VideoMetadataKeys.FIRST_AIR_DATE` |
| `publisher` | `MediaHeartbeat.VideoMetadataKeys.ORIGINATOR` |
| `channel` | `MediaHeartbeat.VideoMetadataKeys.NETWORK` |
| `rating` | `MediaHeartbeat.VideoMetadataKeys.RATING` |

## Contact Us

For more information on any of the sections covered in this documentation, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

