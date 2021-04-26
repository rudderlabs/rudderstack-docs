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

## Global Parameters

<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Parameter name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>maxProcess</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Number of parallel threads used in server. Should be set to number of
        cores.</td>
      <td style="text-align:center">12</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>gwDBRetentionInHr</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in hours</code>
        </p>
        <p>The amount of time events are stored in gateway database after they have
          been processed</p>
      </td>
      <td style="text-align:center">0</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>routerDBRetention</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in seconds</code>
        </p>
        <p>The amount of time events are stored in router database after they have
          been processed</p>
      </td>
      <td style="text-align:center">0</td>
    </tr>
    <tr>
      <td style="text-align:left">4</td>
      <td style="text-align:left"><code>enableProcessor</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">A boolean that enables or disables the processor module. Will be set to
        false when running in degraded mode</td>
      <td style="text-align:center">true</td>
    </tr>
    <tr>
      <td style="text-align:left">5</td>
      <td style="text-align:left"><code>enableRouter</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">A boolean that enables or disables the router module. Will be set to false
        when running in degraded mode</td>
      <td style="text-align:center">true</td>
    </tr>
    <tr>
      <td style="text-align:left">6</td>
      <td style="text-align:left"><code>enableStats</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">A boolean that enables or disables stats.</td>
      <td style="text-align:center">true</td>
    </tr>
  </tbody>
</table>

## \[Gateway\]

<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Parameter name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>webPort</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The port on which the server runs.</td>
      <td style="text-align:center">8080</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>maxDBWriterProcess</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">As requests come in to the gateway and are batched, <code>maxDBWriterProcess</code> writers
        are run to send these batches to db and config-backend</td>
      <td style="text-align:center">64</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>CustomVal</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">For creation of a job in jobsDB, <code>CustomVal</code> i.e.<code>GW</code> will
        be assigned for the <code>CustomVal </code>column in jobsDB</td>
      <td style="text-align:center">&quot;GW&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">4</td>
      <td style="text-align:left"><code>maxBatchSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Batch size used in Gateway. Requests are batched up to size <code>maxBatchSize </code>before
        writing to DB.</td>
      <td style="text-align:center">32</td>
    </tr>
    <tr>
      <td style="text-align:left">5</td>
      <td style="text-align:left"><code>batchTimeoutInMS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in MilliSeconds</code>
        </p>
        <p>In case the request batches do not meet the <code>maxBatchSize</code>,
          every 20 milliseconds these request batches are are sent to db and config-backend.</p>
      </td>
      <td style="text-align:center">20</td>
    </tr>
    <tr>
      <td style="text-align:left">6</td>
      <td style="text-align:left"><code>maxReqSizeInKB</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">One example where an error message (&quot;Request size exceeds max limit&quot;)
        is thrown for a particular request is when its size in KB crosses <code>maxReqSizeInKB</code><em>.</em>
      </td>
      <td style="text-align:center">100000</td>
    </tr>
    <tr>
      <td style="text-align:left">7</td>
      <td style="text-align:left"><code>enableDedup</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">Enable or disable deduplication of events. We use <code>message_id</code> to
        de-dup. Duplicate events are dropped at the gateway.</td>
      <td style="text-align:center">false</td>
    </tr>
    <tr>
      <td style="text-align:left">8</td>
      <td style="text-align:left"><code>dedupWindowInS</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in Seconds</code>
        </p>
        <p>Events with the same message_id with in this time frame are considered
          duplicate and are dropped</p>
      </td>
      <td style="text-align:center">86400</td>
    </tr>
    <tr>
      <td style="text-align:left">9</td>
      <td style="text-align:left"><code>enableRateLimit</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">Rate limit the number of requests accepted by the gateway. Used for running
        hosted service</td>
      <td style="text-align:center">false</td>
    </tr>
  </tbody>
</table>

## \[SourceDebugger\]

<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Parameter name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>disableEventUploads</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">A bool to enable or disable event schema upload.</td>
      <td style="text-align:center">false</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>maxBatchSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Maximum size of the live events batch sent to config-backend.</td>
      <td
      style="text-align:center">32</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>maxESQueueSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Maximum size of the live events queue in the memory.</td>
      <td style="text-align:center">1024</td>
    </tr>
    <tr>
      <td style="text-align:left">4</td>
      <td style="text-align:left"><code>maxRetry</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Maximum number of attempts by the server to upload the request batches,
        in case of errors.</td>
      <td style="text-align:center">3</td>
    </tr>
    <tr>
      <td style="text-align:left">5</td>
      <td style="text-align:left"><code>batchTimeoutInS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in seconds</code>
        </p>
        <p>In case the request batches do not meet the <code>maxBatchSize</code>,
          every 2 seconds these request batches are uploaded to config-backend.</p>
      </td>
      <td style="text-align:center">2</td>
    </tr>
    <tr>
      <td style="text-align:left">6</td>
      <td style="text-align:left"><code>retrySleepInMS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in milliseconds</code>
        </p>
        <p>In case of error while uploading the request batches, the server instead
          of retrying continuously for <code>maxRetry </code>times will sleep for
          100 milliseconds before retrying.</p>
      </td>
      <td style="text-align:center">100</td>
    </tr>
  </tbody>
</table>

## \[JobsDB\]

<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Parameter name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>jobDoneMigrateThres</code>
      </td>
      <td style="text-align:left"><code>float64</code>
      </td>
      <td style="text-align:left">If (<code>deletedJobsCount </code>/ <code>totalJobsCount</code>) &gt; <code>jobDoneMigrateThres</code>,
        migrate the table of the jobs that have been processed.</td>
      <td style="text-align:center">0.8</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>jobStatusMigrateThres</code>
      </td>
      <td style="text-align:left"><code>float64</code>
      </td>
      <td style="text-align:left">
        <p>If (<code>statusCount </code>/ <code>totalCount</code>) &gt; <code>jobStatusMigrateThres</code>,</p>
        <p>migrate the table of jobs that have been processed.</p>
      </td>
      <td style="text-align:center">5</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>maxDSSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The maximum size of a table. If the maximum size is reached, migrate all
        the jobs in that table.</td>
      <td style="text-align:center">100000</td>
    </tr>
    <tr>
      <td style="text-align:left">4</td>
      <td style="text-align:left"><code>maxMigrateOnce</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The maximum number of tables that can be migrated together.</td>
      <td style="text-align:center">10</td>
    </tr>
    <tr>
      <td style="text-align:left">5</td>
      <td style="text-align:left"><code>maxTableSizeInMB</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Maximum size of tables in MB. Tables are migrated if they cross this limit.</td>
      <td
      style="text-align:center">300</td>
    </tr>
    <tr>
      <td style="text-align:left">6</td>
      <td style="text-align:left"><code>migrateDSLoopSleepDurationInS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left"><code>Time in seconds </code>
        <br />Time to sleep before migrating datasets.</td>
      <td style="text-align:center">30</td>
    </tr>
    <tr>
      <td style="text-align:left">7</td>
      <td style="text-align:left"><code>maxMigrateDSProbe</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">The maximum number of tables probed to find if they can be migrated.</td>
      <td
      style="text-align:center">10</td>
    </tr>
    <tr>
      <td style="text-align:left">8</td>
      <td style="text-align:left"><code>addNewDSLoopSleepDurationInS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left"><code>Time in seconds </code>
        <br />Time to sleep before adding a dataset.</td>
      <td style="text-align:center">5</td>
    </tr>
    <tr>
      <td style="text-align:left">9</td>
      <td style="text-align:left"><code>backupCheckSleepDurationIns</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left"><code>Time in seconds </code>
        <br />Time interval to sleep before checking if a dataset needs backing up or
        not.</td>
      <td style="text-align:center">2</td>
    </tr>
    <tr>
      <td style="text-align:left">10</td>
      <td style="text-align:left"><code>enableBackup</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">Enables/Disables backup. This is set to false in degraded mode.</td>
      <td
      style="text-align:center">true</td>
    </tr>
  </tbody>
</table>

## \[Router\]

| No. | Parameter name | Type | Description | Default |
| :--- | :--- | :--- | :--- | :---: |
| 1 | `jobQueryBatchSize` | `int` | The size of a batch of jobs to get from database. A list of retry list, processing list or unprocessed list or executed list. | 10000 |
| 2 | `updateStatusBatchSize` | `int` | The minimum size needed to update the status of a batch of jobs. | 1000 |
| 3 | `readSleepInMS` | `int64` | `Time in milliseconds`  The time to wait for before the next iteration of the loop.  In case the length of unprocessed and retry list is zero, sleep for 10  __milliseconds. Else add it to another list.  | 10 |
| 4 | `noOfWorkers` | `int` | The total number of workers that are started to send events to destinations.  | 64 |
| 5 | `noOfJobsPerChannel` | `int`  | The number of jobs a channel in each worker can contain. So, each worker gets 1000 jobs. | 1000 |
| 6 | `ser` | `int` |  | 3 |
| 7 | `maxSleepInS` | `int64` | `Time in seconds`  The time to sleep when response status code is not 200. This is to give time before the next retry. | 60 |
| 8 | `minSleepInS` | `int64` | `Time in seconds`  Time to sleep when response status code is 200. | 0 |
| 9 | `maxStatusUpdateWaitInS` | `int64` | `Time in seconds`  Time to sleep before ending one round of stat collection. | 5 |
| 11 | `useTestSink` | `bool` | Run internal tests. | false |
| 12 | `maxFailedCountForJob` | `int` | The maximum number of times a job can fail before marking it as aborted. | 8 |
| 13 | `guaranteeUserEventOrder` | `bool` | Maintain the user events order | true |
| 14 | `retryTimeWindowInMins` | `int` | Minimum retry window in case of errors like 5XX, 429 | 180 |
| 15 | `minRetryBackoffInS` | `int` | Minimum time in seconds before the next retry in case of errors like 5XX, 429 | 10 |
| 16 | `maxRetryBackoffInS` | `int` | Maximum time in seconds between errors in case of errors like 5XX, 429 | 300 |

## \[BatchRouter\]

| No. | Parameter name | Type | Description | Default |
| :--- | :--- | :--- | :--- | :---: |
| 1 | `mainLoopSleepInS` | `int64` | Timeout in seconds while running main loop. | 30 |
| 2 | `noOfWorkers` | `int` | The number of workers to batch jobs before deletion. | 8 |
| 3 | `jobQueryBatchSize` | `int` | Number of events picked up from batch router's jobsdb in each query  | 100000 |
| 4 | `uploadFreqInS` | `int` | The Frequency with which batch router dumps events to storage destinations. | 30 |
| 5 | `maxFailedCountForJob` | `int` | The maximum number of times a job can fail before marking it as aborted. | 128 |

## \[Warehouse\]

You can ignore these settings if you don't have any warehouses \(like Redshift, BigQuery, etc.\) enabled in your config.



<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Parameter name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>stagingFilesTable</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Table name of staging files.</td>
      <td style="text-align:center">wh_staging_files</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>loadFilesTable</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Table name of load files.</td>
      <td style="text-align:center">wh_load_files</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>uploadsTable</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Table name of uploads.</td>
      <td style="text-align:center">wh_uploads</td>
    </tr>
    <tr>
      <td style="text-align:left">4</td>
      <td style="text-align:left"><code>schemasTable</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Table name of schemas.</td>
      <td style="text-align:center">wh_schemas</td>
    </tr>
    <tr>
      <td style="text-align:left">5</td>
      <td style="text-align:left"><code>uploadFreqInS</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Frequency of upload in seconds</td>
      <td style="text-align:center">1800</td>
    </tr>
    <tr>
      <td style="text-align:left">6</td>
      <td style="text-align:left"><code>noOfWorkers</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Number of concurrent writes to the warehouse</td>
      <td style="text-align:center">8</td>
    </tr>
    <tr>
      <td style="text-align:left">7</td>
      <td style="text-align:left"><code>mainLoopSleepInS</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in Seconds</code> 
        </p>
        <p>Time to wait between multiple warehouse writes</p>
      </td>
      <td style="text-align:center">600</td>
    </tr>
    <tr>
      <td style="text-align:left">8</td>
      <td style="text-align:left"><code>stagingFilesBatchSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Batch size of staging files</td>
      <td style="text-align:center">240</td>
    </tr>
  </tbody>
</table>

## \[Processor\]

<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Variable name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>loopSleepInMS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in MilliSeconds</code>
        </p>
        <p>In case the length of user jobs process queue is zero or the sum of unprocessed
          and retry list is empty, sleep for 10 milliseconds is called.</p>
      </td>
      <td style="text-align:center">10</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>maxLoopSleepInMS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">Max processor loop sleep time in milli seconds</td>
      <td style="text-align:center">5000</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>dbReadBatchSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The total number of events to get as a batch from the database.</td>
      <td
      style="text-align:center">10000</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>transformBatchSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Batch size of events added to request queue before sending to transformation
        server.</td>
      <td style="text-align:center">10</td>
    </tr>
    <tr>
      <td style="text-align:left">4</td>
      <td style="text-align:left"><code>userTransformBatchSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Batch size of events added to request queue before sending to custom transformation
        server. Only used when user transformation functions are connected to a
        destination.</td>
      <td style="text-align:center">200</td>
    </tr>
    <tr>
      <td style="text-align:left">5</td>
      <td style="text-align:left"><code>sessionThresholdEvents</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The minimum number of events needed to be process further.</td>
      <td style="text-align:center">20</td>
    </tr>
    <tr>
      <td style="text-align:left">6</td>
      <td style="text-align:left"><code>sessionThresholdInS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left"><code>Time in seconds </code>
        <br />Minimum time needed before a new session is created.</td>
      <td style="text-align:center">10</td>
    </tr>
    <tr>
      <td style="text-align:left">7</td>
      <td style="text-align:left"><code>maxChanSize</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The maximum channel size for request and response queue in transformer.</td>
      <td
      style="text-align:center">2048</td>
    </tr>
    <tr>
      <td style="text-align:left">8</td>
      <td style="text-align:left"><code>processSessions</code>
      </td>
      <td style="text-align:left"><code>bool</code>
      </td>
      <td style="text-align:left">If <code>processSessions </code>is marked true, the status of the job in
        db is updated.</td>
      <td style="text-align:center">false</td>
    </tr>
    <tr>
      <td style="text-align:left">9</td>
      <td style="text-align:left"><code>numTransformWorker</code>
      </td>
      <td style="text-align:left"><code>int</code> 
      </td>
      <td style="text-align:left">The number of go transform workers.</td>
      <td style="text-align:center">8</td>
    </tr>
    <tr>
      <td style="text-align:left">10</td>
      <td style="text-align:left"><code>maxRetry</code>
      </td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">The maximum number of times a transformer can retry hitting the API in
        case of an error</td>
      <td style="text-align:center">30</td>
    </tr>
    <tr>
      <td style="text-align:left">11</td>
      <td style="text-align:left"><code>retrySleepInMS</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left"><code>Time in milliseconds</code>
        <br />Sleep time in case of an error by transformer while hitting the API, before
        trying to hit the API again</td>
      <td style="text-align:center">100</td>
    </tr>
  </tbody>
</table>

## \[BackendConfig\]

| No. | Variable name | Type | Description | Default |
| :--- | :--- | :--- | :--- | :---: |
| 1 | `pollIntervalInS` | `int64` | `Time in seconds` Frequency of updating data from config-backend .  | 5 |
| 2 | `configFromFile` | `bool` | Reads backend workspace config from a JSON file instead of fetching form api. | false |
| 3 | `configJSONPath` | `string` | Path of the JSON file which contains the backend workspace config | ./workspaceConfig.json |

## \[RateLimiting\]

<table>
  <thead>
    <tr>
      <th style="text-align:left">No.</th>
      <th style="text-align:left">Variable name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:center">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">1</td>
      <td style="text-align:left"><code>eventLimit</code>
      </td>
      <td style="text-align:left"><code>int64</code>
      </td>
      <td style="text-align:left">Max number of events to be allowed in a time interval</td>
      <td style="text-align:center">1000</td>
    </tr>
    <tr>
      <td style="text-align:left">2</td>
      <td style="text-align:left"><code>rateLimitWindowInMins</code>
      </td>
      <td style="text-align:left"><code>int32</code>
      </td>
      <td style="text-align:left">
        <p><code>Time in minutes</code> 
        </p>
        <p>Rolling time interval used to limit number of events allowed</p>
      </td>
      <td style="text-align:center">60</td>
    </tr>
    <tr>
      <td style="text-align:left">3</td>
      <td style="text-align:left"><code>noOfBucketsInWindow</code>
      </td>
      <td style="text-align:left"><code>int32</code>
      </td>
      <td style="text-align:left">Number of buckets <code>rateLimitWindowInMins</code> is broken down into</td>
      <td
      style="text-align:center">12</td>
    </tr>
  </tbody>
</table>

## \[Diagnosis\]

| No. | Parameter name | Type | Description | Default |
| :--- | :--- | :--- | :--- | :---: |
| 1 | `enableDiagnosis` | `bool` | Boolean to send server diagnostics report to us. Disabling this will disable sending all diagnostics information. | true |
| 2 | `gatewayTimePeriodInS` | `int32` | Time interval to send gateway requests report in seconds | 60 |
| 3 | `routerTimePeriodInS` | `int32` | Time interval to send router requests report in seconds | 60 |
| 4 | `batchRouterTimePeriodInS` | `int32` | Time interval to send batch router requests report in seconds | 600 |
| 5 | `enableServerStartMetric` | `bool` | Boolean to send server start event | true |
| 6 | `enableConfigIdentifyMetric` | `bool` | Boolean to send workspace config received event | true |
| 7 | `enableServerStartedMetric` | `bool` | Boolean to send server successfully started event | true |
| 8 | `enableConfigProcessedMetric` | `bool` | Boolean to send workspace config details | true |
| 9 | `enableGatewayMetric` | `bool` | Boolean to send gateway request metrics | true |
| 10 | `enableRouterMetric` | `bool` | Boolean to send router request metrics | true |
| 11 | `enableBatchRouterMetric` | `bool` | Boolean to send batch router request metrics | true |
| 12 | `enableDestinationFailuresMetric` | `bool` | Boolean to send destination failures metrics | true |

