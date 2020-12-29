---
description: >-
  Solutions to the generally asked questions related to the RudderStack data
  warehouse integrations
---

# Warehouse FAQs

### When does Rudderstack load data into the data warehouse/s? 

Rudderstack gives you the flexibility to choose when to sync the latest data into the warehouse. The default option is 30 minutes, but you can choose to extend this value to go up to 24 hours. You can also configure the time at which the data is to be loaded.

### Is there a way to force my data load into the warehouses?

Yes, there is! You could do that by configuring below values in `config.toml` file.

```text
warehouseSyncFreqIgnore = true #if set true this will ignore syncFrequency and syncStartingAt values which are configured in UI. By default this is false
uploadFreqInS=1800 #This field lets you control syncPeriod if above field set to true
```

### Where can I view the status of my data load?

The warehouse upload status can be viewed in Live Events section of the destination on the RudderStack dashboard, as shown:

![Live Events Option in the RudderStack Dashboard](../.gitbook/assets/live-events.png)

### How can I change the schema and the namespace name of my data warehouse?

The default namespace will be the source name with some modifications to the name. However, RudderStack also provides an option in the dashboard to change the namespace of the dataset. 

Please refer to the warehouse-specific destination settings for configuring the namespace in the RudderStack UI.

### Which IPs should be whitelisted?

If you are using the hosted RudderStack service, the following IPs need to be whitelisted in your destination's security configuration:

* **`3.216.35.97`**
* **`34.198.90.241`**
* **`54.147.40.62`**

### How can I speed-up my warehouse uploads

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>RSERVER_WAREHOUSE_REDSHIFT_MAX_PARALLEL_LOADS</code>
      </td>
      <td style="text-align:left">
        <p>Defines the number of concurrent tables that are synced to redshift in
          a given upload.</p>
        <p>Increase this as per your infra capability.</p>
      </td>
      <td style="text-align:left">3</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>RSERVER_WAREHOUSE_STAGING_FILES_BATCH_SIZE</code>
      </td>
      <td style="text-align:left">
        <p>Defines the number of staging files that are batched and synced in a single
          upload.</p>
        <p>Increase this to batch together more files and reduce the number of uploads
          needed for a given volume of data</p>
      </td>
      <td style="text-align:left">960`</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>RSERVER_WAREHOUSE_NO_OF_WORKERS</code>
      </td>
      <td style="text-align:left">Number of concurrent uploads to a warehouse. Eg. 8 uploads to different
        schemas in redshift can be done simultaneously</td>
      <td style="text-align:left">8</td>
    </tr>
    <tr>
      <td style="text-align:left">[k8s] <code>warehouse_slave.replicaCount</code> 
      </td>
      <td style="text-align:left">
        <p>Number of warehouse slaves (responsible for load file generation) when
          warehouse is run as separate service in k8s.</p>
        <p>Increase this for speeding up the load file generation step of the upload</p>
      </td>
      <td style="text-align:left">2</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>RSERVER_WAREHOUSE_NO_OF_SLAVE_WORKER_ROUTINES</code>
      </td>
      <td style="text-align:left">
        <p>Number of go-routines creating load files in a warehouse slave process.</p>
        <p>Increase/Decrease this as per memory allocated to the warehouse slave
          pod</p>
      </td>
      <td style="text-align:left">4</td>
    </tr>
  </tbody>
</table>

## Contact Us

In case you have any other queries related to using the RudderStack data warehouse integrations, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel and start a conversation with us any time. We will be happy to help you. 

