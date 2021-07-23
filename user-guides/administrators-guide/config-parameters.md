---
description: >-
  Various types of configuration parameters explained with their types,
  descriptions, and default values
---

# Configuration Parameters

This document describes the various configuration parameters for the [**`config.yaml`**](https://github.com/rudderlabs/rudder-server/blob/master/config/config.yaml) file. You can fine-tune them to suit your application's needs.

{% hint style="info" %}
These configuration parameters are also applicable for the **`config.toml`** file, in case you have an older RudderStack deployment.
{% endhint %}

{% hint style="success" %}
To best understand some of the terms covered in this guide, we recommend going through the [**RudderStack architecture**](https://docs.rudderstack.com/get-started/rudderstack-architecture) first.
{% endhint %}

## Global Parameters

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `maxProcess` | Int | Number of parallel threads used in server. Should be set to number of cores. | `12` |
| `gwDBRetention` | String | The time for which the events are stored in the Gateway database after they have been processed. Examples: `1h`, `30m`, `35s`, etc. | `0h` |
| `routerDBRetention` | String | The time for which the events are stored in the Router database after they have been processed. Examples: `1h`, `30m`, `45s`, etc. | `0h` |
| `enableProcessor` | Boolean | This variable enables or disables the Processor module. It will be set to `false` when running in [**Degraded mode**](https://docs.rudderstack.com/user-guides/administrators-guide/high-availability#rudderstack-server-running-modes). | `true` |
| `enableRouter` | Boolean | This variable enables or disables the Router module. Will be set to `false` when running in [**Degraded mode**](https://docs.rudderstack.com/user-guides/administrators-guide/high-availability#rudderstack-server-running-modes). | `true` |
| `enableStats` | Boolean | This variable enables or disables stats.  | `true` |

{% hint style="info" %}
For more information on the Processor, Gateway, and Router modules of the RudderStack backend, refer to the [**Architecture**](../../get-started/rudderstack-architecture.md).
{% endhint %}

## \[Gateway\]

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `webPort` | Int | The port on which the RudderStack server runs. | `8080` |
| `maxUserWebRequestWorkerProcess` | Int | RudderStack spawns this specified number of processes to consume the events at a user level. | `64` |
| `maxDBWriterProcess` | Int | As requests come in to the Gateway and are batched, RudderStack runs the `maxDBWriterProcess` writers to send these batches to the database and the [**Configuration Backend**](https://gblobscdn.gitbook.com/assets%2F-Lq5Ea6fHVg3dSxMCgyQ%2F-MMKu5yWZaG2je_wYlsz%2F-MMKuDE6q6eLgf3xbyqE%2FRudderStack%20Architecture.png?alt=media&token=12ea0835-c074-4478-9527-486932630b80). | `256` |
| `CustomVal` | String | For the creation of a job in the backend PostgreSQL database \(jobsDB\), the value of this variable will be assigned to the `CustomVal` column. | `GW` |
| `maxBatchSize` | Int | The batch size used in the Gateway. The requests are batched up to this size before writing to the database. | `32` |
| `batchTimeout` | String | In case the request batches do not meet the `maxBatchSize`, the batches are are sent to the database and the Configuration Backend in this interval. | `20ms` |
| `maxReqSizeInKB` | Int | An error message \("**Request size exceeds max limit**"\) is thrown for a particular request is when its size in KB crosses this value_._ | `4000` |
| `enableDedup` | Boolean | Enables or disables deduplication of events. RudderStack uses `message_id` to de-dup. The duplicate events are dropped at the Gateway.  | `false` |
| `dedupWindow` | String | Events with the same `message_id` within this timeframe are considered duplicate and are dropped. | `3600s` |
| `enableRateLimit` | Boolean | Rate limits the number of requests accepted by the Gateway. This is used for running the RudderStack-hosted service. | `false` |

## \[SourceDebugger\]

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `disableEventUploads` | Boolean | Enables or disables the event schema upload. | `false` |
| `maxBatchSize` | Int | The maximum size of the live events batch sent to the Configuration Backend. | `32` |
| `maxESQueueSize` | Int | The maximum size of the live events queue in the memory. | `1024` |
| `maxRetry` | Int | The maximum number of attempts RudderStack makes to upload the request batches, in case of any errors. | `3` |
| `batchTimeout` | String | In case the request batches do not meet the `maxBatchSize`,  the request batches are uploaded to Configuration Backend in this time interval. | `2s` |
| `retrySleep` | String | In case of errors while uploading the request batches, RudderStack waits for this time interval before retrying. This is done until the `maxRetry` limit is reached. | `100ms` |

## \[JobsDB\]

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>jobDoneMigrateThres</code>
      </td>
      <td style="text-align:left">Float64</td>
      <td style="text-align:left">If (<code>deletedJobsCount </code>/ <code>totalJobsCount</code>) &gt; <code>jobDoneMigrateThres</code>,
        RudderStack migrates the table of the jobs that have been processed.</td>
      <td
      style="text-align:center"><code>0.8</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>jobStatusMigrateThres</code>
      </td>
      <td style="text-align:left">Float64</td>
      <td style="text-align:left">
        <p>If (<code>statusCount </code>/ <code>totalCount</code>) &gt; <code>jobStatusMigrateThres</code>,</p>
        <p>RudderStack migrates the table of jobs that have been processed.</p>
      </td>
      <td style="text-align:center"><code>5</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>maxDSSize</code>
      </td>
      <td style="text-align:left">Int</td>
      <td style="text-align:left">The maximum size of a table. If the maximum size is reached, RudderStack
        migrates all the jobs in that table.</td>
      <td style="text-align:center"><code>100000</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>maxMigrateOnce</code>
      </td>
      <td style="text-align:left">Int</td>
      <td style="text-align:left">The maximum number of tables that can be migrated together.</td>
      <td style="text-align:center"><code>10</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>maxTableSizeInMB</code>
      </td>
      <td style="text-align:left">Int</td>
      <td style="text-align:left">The maximum size of the tables in MB. The tables are migrated if they
        cross this limit.</td>
      <td style="text-align:center"><code>300</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>migrateDSLoopSleepDuration</code>
      </td>
      <td style="text-align:left">String</td>
      <td style="text-align:left">
        <br />The time RudderStack waits before migrating the datasets.</td>
      <td style="text-align:center"><code>30s</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>maxMigrateDSProbe</code>
      </td>
      <td style="text-align:left">Int64</td>
      <td style="text-align:left">The maximum number of tables probed to find if they can be migrated.</td>
      <td
      style="text-align:center"><code>10</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>addNewDSLoopSleepDuration</code>
      </td>
      <td style="text-align:left">Int64</td>
      <td style="text-align:left">The time RudderStack waits before adding a dataset.</td>
      <td style="text-align:center"><code>5s</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>backupCheckSleepDuration</code>
      </td>
      <td style="text-align:left">Int64</td>
      <td style="text-align:left">RudderStack waits for this time interval before checking if a dataset
        needs backing up.</td>
      <td style="text-align:center"><code>5s</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>enableBackup</code>
      </td>
      <td style="text-align:left">Boolean</td>
      <td style="text-align:left">Enables or disables the backup. This is set to <code>false</code> in the
        <a
        href="https://docs.rudderstack.com/user-guides/administrators-guide/high-availability#rudderstack-server-running-modes"><b>Degraded</b>
          </a>mode.</td>
      <td style="text-align:center"><code>true</code>
      </td>
    </tr>
  </tbody>
</table>

## \[Router\]

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `jobQueryBatchSize` | Int | The size of a jobs batch to get from the database. This includes the retry list, processing list, unprocessed list, or executed list. | `10000` |
| `updateStatusBatchSize` | Int | The minimum size needed to update the status of a batch of jobs. | `1000` |
| `readSleep` | Int64 | The time RudderStack waits before fetching the next jobs batch from the database, in case the length of unprocessed and retry list is 0. | `1000ms` |
| `noOfWorkers` | Int | RudderStack starts this number of workers to send events to the destinations. | `64` |
| `noOfJobsPerChannel` | Int  | The number of jobs a channel in each worker can contain. | `1000` |
| `maxSleep` | Int64 | The time to wait when the response status code is not **200**. This is to give RudderStack some time before the next retry. | `60s` |
| `minSleep` | Int64 | The time to sleep when the response status code is **200**. | `0s` |
| `maxStatusUpdateWait` | Int64 | The time to sleep before ending one round of stats collection. | `5s` |
| `useTestSink` | Boolean | Runs internal tests if set to `true`. | `false` |
| `maxFailedCountForJob` | Int | The maximum number of times a job can fail before it is marked as aborted. | `8` |
| `guaranteeUserEventOrder` | Boolean | RudderStack maintains the order of user events if set to `true`. | `true` |
| `retryTimeWindow` | Int | The minimum retry window in case of **5XX**, **429** errors. | `180m` |
| `minRetryBackoff` | Int | The minimum time before the next retry in case of **5XX**, **429** errors. | `10s` |
| `maxRetryBackoff` | Int | The maximum allowed time between the errors in case of **5XX**, **429** errors. | `300s` |

## \[BatchRouter\]

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `mainLoopSleep` | String | The timeout while running the main loop. | `2s` |
| `noOfWorkers` | Int | The number of workers to batch jobs before deletion. | `8` |
| `jobQueryBatchSize` | Int | The number of events picked up from the batch router's database \(Jobs DB\) in each query. | `100000` |
| `uploadFreq` | Int | The frequency with which the batch router dumps the events to the storage destinations. | `30s` |
| `maxFailedCountForJob` | Int | The maximum number of times a job can fail before marking it as aborted. | `128` |

## \[Warehouse\]

{% hint style="info" %}
You can ignore these settings if you don't have any [**warehouse destinations**](../../data-warehouse-integrations/) configured in RudderStack.
{% endhint %}

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `stagingFilesTable` | String | Table name of the staging files. | `wh_staging_files` |
| `loadFilesTable` | String | Table name of load files. | `wh_load_files` |
| `uploadsTable` | String | Table name of uploads. | `wh_uploads` |
| `schemasTable` | String | Table name of schemas. | `wh_schemas` |
| `uploadFreq` | String | The frequency of the upload in seconds. | `1800s` |
| `noOfWorkers` | Int | Number of concurrent writes to the warehouse. | `8` |
| `mainLoopSleep` | String | The time RudderStack waits between multiple warehouse writes. | `5s` |
| `stagingFilesBatchSize` | Int | The batch size of the staging files. | `960` |

## \[Processor\]

| Variable name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `loopSleep` | Int64 | In case the length of the user jobs process queue is 0 or the unprocessed and retry list is empty, RudderStack sleeps for this specified time. | `10ms` |
| `maxLoopSleep` | Int64 | Maximum loop sleep time for the Processor. | `5000ms` |
| `dbReadBatchSize` | Int | The total number of events to get as a batch from the database. | `10000` |
| `transformBatchSize` | Int | Batch size of the events added to the request queue before sending them for transformation. | `100` |
| `userTransformBatchSize` | Int | Batch size of the events added to request queue before sending them to the custom transformation server. **Note**: This is used  only when a user transformation function is connected to a destination. | `200` |
| `sessionThresholdEvents` | Int | The minimum number of events needed to be process further. | `20` |
| `sessionThreshold` | String | The minimum time needed before a new session is created. | `10s` |
| `maxChanSize` | Int | The maximum channel size for the  request and response queue in the transformer. | `2048` |
| `processSessions` | Boolean |  If set to `true`, the status of the job in the database is updated. | `false` |
| `numTransformWorker` | Int  | Specifies the number of Go transform workers. | `8` |
| `maxRetry` | Int | The maximum number of times a transformer retries hitting the API in case of an error. | `30` |
| `retrySleep` | String | The sleep time in case of a transformer error while hitting the API, before retrying. | `100ms` |

## \[BackendConfig\]

| Variable name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `pollInterval` | `Int64` |  The frequency of updating data from the Configuration Backend.  | `5s` |
| `configFromFile` | `Boolean` | When set to `true`, RudderStack reads the backend workspace configuration from a JSON file instead of fetching it from the API. | `false` |
| `configJSONPath` | `String` | The path of the JSON file which contains the backend workspace configuration. | `/etc/rudderstack /workspaceConfig.json` |

## \[RateLimit\]

| Variable name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `eventLimit` | Int64 | The maximum number of events to be allowed in a time interval. | `1000` |
| `rateLimitWindow` | Int32 | The rolling time interval used to limit the allowed number of events. | `60m` |
| `noOfBucketsInWindow` | Int32 | The number of buckets `rateLimitWindow` is broken down into.  | `12` |

## \[Diagnostics\]

| Parameter name | Type | Description | Default value |
| :--- | :--- | :--- | :---: |
| `enableDiagnosis` | Boolean | RudderStack sends the server diagnostics report to the user. Disabling this will disable sending all diagnostics information. | `true` |
| `gatewayTimePeriod` | Int32 | The time interval to send the Gateway requests report | `60s` |
| `routerTimePeriod` | Int32 | The time interval to send the Router requests report. | `60s` |
| `batchRouterTimePeriod` | Int32 | The time interval to send the Batch router requests report. | `10m` |
| `enableServerStartMetric` | Boolean | Sends the server start event. | `true` |
| `enableConfigIdentifyMetric` | Boolean | Sends the workspace config received event. | `true` |
| `enableServerStartedMetric` | Boolean | Sends the successful server start event. | `true` |
| `enableConfigProcessedMetric` | Boolean | Sends the workspace config details. | `true` |
| `enableGatewayMetric` | Boolean | Sends the Gateway request metrics. | `true` |
| `enableRouterMetric` | Boolean | Sends the Router request metrics. | `true` |
| `enableBatchRouterMetric` | Boolean | Sends the Batch Router request metrics. | `true` |
| `enableDestinationFailuresMetric` | Boolean | Sends the destination failures metrics. | `true` |

## Contact Us

For more information on any of the configuration parameters discussed in this guide, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.

