## Adobe Heartbeat Events

Adobe Analytics for Streaming Media is an add-on to Adobe Analytics that provides powerful measurement tools for audio, video, and advertisements. Adobe Analytics is part of the Adobe Experience Platform.

For sending heartbeat events to develop first you need the heartbeat tracking server url. You can contact your Adobe representative for the url. Second, you need to map your rudder events with the type of adobe heartbeat event you want to send as. There is a toggle for ssl which if turned on will send heartbeat tracking url as https.

Playback head:

For sending video heartbeats event to Adobe through js sdk , Media heartbeat SDK needs a playhead update at least once per second for the main content. The Video/Ad start and heartbeat update playhead type of events updates this playhead using the position property. To stop triggering this event for every second, the playhead to the window needs to be set. This can be done by setting window.rudderHBPlayheads to the key-value pair of the current content’s session_id and position:

window.rudderHBPlayheads = { "session_id": position value }


Rudder Categorises Adobe heartbeat Events into the following:

1. ## Initialise Heartbeat
    
    Adobe Analytics Method Triggered: trackSessionStart
      
    This is used for initialising all kinds of heartbeat calls.

    Context Data is set as mapped in settings.

    Properties that are used
           | Rudder property| Description |
           | :--- | :--- |
           | channel | Needs to be set for media heartbeat property channel or empty string will be sent |
           | video_player  | Needs to be set for media heartbeat property playerName or "unknown" will be sent |
           | session_id | To check if present in window.rudderHBPlayheads or sets to "default" |
           | bitrate | Sent for creating QoSObject. Default value: 0|
           | startupTime | Sent for creating QoSObject. Default value: 0 |
           | fps | Sent for creating QoSObject . Default value: 0|
           | droppedFrames | Sent for creating QoSObject. Default value: 0 |
           | livestream | Sent for creating MediaObject |
           | title | Sent for creating MediaObject. Default value: "no title" |
           | asset_id | Sent for creating MediaObject. Default value: "default ad" |
           | total_length | Sent for creating MediaObject. Default value: 0 |

    Standard Video Metadata whose mapping is explained below will also be set.
   
2. ## Heartbeat Video Start

    Adobe Analytics Method Triggered: trackSessionStart, trackPlay, trackEvent(ChapterStart).

    This is used when a video is started.

    Context Data is set as mapped in settings.

    All properties of Initialise Heartbeat along with the below mentioned

           | Rudder property| Description |
           | :--- | :--- |
           | chapter_name | Sent for creating createChapterObject. Default value: "no chapter name" |
           | position  | Sent for creating createChapterObject. Default value: 1 |
           | length | Sent for creating createChapterObject. Default value: 6000 |
           | start_time | Sent for creating createChapterObject. Default value: 0 |

    Standard Video Metadata whose mapping is explained below will also be set.

3. ## Heartbeat Video Paused
    Adobe Analytics Method Triggered: trackSessionStart, trackPause

    This is used when a video is paused.

    Context Data is set as mapped in settings.

    All properties of Initialise Heartbeat to be set.

    Standard Video Metadata whose mapping is explained below will also be set.  

4. ## Heartbeat Video Complete
    Adobe Analytics Method Triggered: trackSessionStart, trackEvent(ChapterComplete).

    This is used when a video is completed.

    Context Data is set as mapped in settings.

    All properties of Initialise Heartbeat to be set.

    Standard Video Metadata whose mapping is explained below will also be set.

5. ## Heartbeat Session End

    Adobe Analytics Method Triggered: trackSessionStart, trackComplete,trackSessionEnd.

    This is used when a session ends.

    Context Data is set as mapped in settings.

    All properties of Initialise Heartbeat to be set.

    Standard Video Metadata whose mapping is explained below will also be set.
6. ## Heartbeat Ad Start

    Adobe Analytics Method Triggered: trackEvent(AdBreakStart), trackEvent(AdStart).

    This is used when a ad is started.

    Context Data is set as mapped in settings.

    
    Properties that are used
           | Rudder property| Description |
           | :--- | :--- |
           | session_id | To check if present in window.rudderHBPlayheads or sets to "default" |
           | title | Sent for creating AdObject. Default value: "no title" |
           | asset_id | Sent for creating AdObject. Default value: "default ad" |
           | position | Sent for creating AdObject and AdBreakObject. Default value: 1 |
           | total_length | Sent for creating MediaObject. Default value: 0 |
           | type | Sent for creating AdBreakObject. Default value: "unknown" |
           | content | Sent for trackEvent. Default value: empty json |

    Standard Video Metadata whose mapping is explained below will also be set.

7. ## Heartbeat Ad Completed

    Adobe Analytics Method Triggered: trackEvent(AdComplete), trackEvent(AdBreakComplete) 

    If adbreak is in progress then trackEvent(AdBreakStart), trackEvent(AdStart) are also triggered.

    This is used when a Ad is complete.

    Context Data is set as mapped in settings.

    All properties of Heartbeat Ad started to be set.

    Standard Video Metadata whose mapping is explained below will also be set.

8. ## Heartbeat Ad Skipped

    Adobe Analytics Method Triggered: trackEvent(AdSkip), trackEvent(AdBreakComplete) 

    If adbreak is in progress then trackEvent(AdBreakStart), trackEvent(AdStart) are also triggered.

    This is used when a Ad is skipped.

    Context Data is set as mapped in settings.

    All properties of Heartbeat Ad started to be set.

    Standard Video Metadata whose mapping is explained below will also be set.

9. ## Heartbeat Seek Started
    Adobe Analytics Method Triggered: trackSessionStart, trackEvent(SeekStart)

    This is used when a seek is started.

    Context Data is set as mapped in settings.

    All properties of Initialise Heartbeat to be set.

    Standard Video Metadata whose mapping is explained below will also be set.  

10. ## Heartbeat Seek Completed

     Adobe Analytics Method Triggered: trackSessionStart, trackEvent(SeekComplete)

     This is used when a seek is complete.

     Context Data is set as mapped in settings.

     All properties of Initialise Heartbeat to be set.

     Standard Video Metadata whose mapping is explained below will also be set.

11. ## Heartbeat Buffer Started

     Adobe Analytics Method Triggered: trackSessionStart, trackEvent(BufferStart)

     This is used when a buffer has started.

     Context Data is set as mapped in settings.

     All properties of Initialise Heartbeat to be set.

     Standard Video Metadata whose mapping is explained below will also be set.
12. ## Heartbeat Buffer Completed

     Adobe Analytics Method Triggered: trackSessionStart, trackEvent(BufferComplete)

     This is used when a buffer has completed.

     Context Data is set as mapped in settings.

     All properties of Initialise Heartbeat to be set.

     Standard Video Metadata whose mapping is explained below will also be set.

13. ## Heartbeat Quality Updated

   Quality of experience tracking includes quality of service (QoS) and error tracking, both are optional elements and are not required for core media tracking implementations. You can use the media player API to identify the variables related to QoS and error tracking. 

        Properties that are used

           | bitrate | Sent for creating QoSObject. Default value: 0|
           | startupTime | Sent for creating QoSObject. Default value: 0 |
           | fps | Sent for creating QoSObject . Default value: 0|
           | droppedFrames | Sent for creating QoSObject. Default value: 0 |

14. ## Heartbeat Playhead Update
     
     This changes the playhead position.
     Initially playhead is set to 0. During initilising heartbeat it is set to the position value of that session_id in window.rudderHBPlayheads.


## Standard Video Metadata

Under rudder properties must be sent to map to standard video metadata

           | Rudder property| Standard Video Adobe Metadata |
           | :--- | :--- |
           | program | MediaHeartbeat.VideoMetadataKeys.SHOW |
           | season  | MediaHeartbeat.VideoMetadataKeys.SEASON|
           | episode | MediaHeartbeat.VideoMetadataKeys.EPISODE |
           | assetId | MediaHeartbeat.VideoMetadataKeys.ASSET_ID |
           | contentAssetId | MediaHeartbeat.VideoMetadataKeys.ASSET_ID |
           | genre | MediaHeartbeat.VideoMetadataKeys.GENRE |
           | airdate | MediaHeartbeat.VideoMetadataKeys.FIRST_AIR_DATE |
           | publisher | MediaHeartbeat.VideoMetadataKeys.ORIGINATOR |
           | channel | MediaHeartbeat.VideoMetadataKeys.NETWORK |
           | rating | MediaHeartbeat.VideoMetadataKeys.RATING |
           