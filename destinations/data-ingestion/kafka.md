---
description: Step-by-step guide to send event data from RudderStack to Apache Kafka
---

# Apache Kafka

Apache Kafka is a popular distributed streaming platform. It allows you to handle large-scale workloads with high throughput and low latency. Apache Kafka is highly available and is used across the world for building real-time data pipelines and streaming applications.

RudderStack allows you to configure Apache Kafka as a destination to which you can send your event data seamlessly.

{% hint style="success" %}
**Find the open-source transformer code for this destination in our** [**GitHub repo**](https://github.com/rudderlabs/rudder-transformer/tree/master/v0/destinations/kafka)**.**
{% endhint %}

## Getting Started

In order to enable dumping data to Kafka, you will first need to add it as a destination to the source from which you are sending event data. Once the destination is enabled, events from RudderStack will start flowing to Kafka. 

Before configuring your source and destination on the [dashboard](https://app.rudderestack.com), please check whether the platform you are working on is supported by Apache Kafka. Please refer to the table below:

| **Connection Mode** | **Web** | **Mobile** | **Server** |
| :--- | :--- | :--- | :--- |
| **Device mode** | - | - | - |
| **Cloud** **mode** | **Supported** | **Supported** | **Supported** |

{% hint style="info" %}
 To know more about the difference between Cloud mode and Device mode in RudderStack, read the [RudderStack connection modes](https://docs.rudderstack.com/get-started/rudderstack-connection-modes) guide.
{% endhint %}

Once you have confirmed that the platform supports sending events to Kafka, perform the steps below:

* Choose a source to which you would like to add Kafka as a destination.

{% hint style="info" %}
Please follow our guide on [How to Add a Source and Destination in RudderStack](https://docs.rudderstack.com/how-to-guides/adding-source-and-destination-rudderstack) to add a source and destination in RudderStack.
{% endhint %}

* Select the destination as **Kafka** to your source. Give your destination a name and then click on **Next**.
* Next, in the **Connection Settings**, ****fill all the fields with the relevant information and click **Next**

![Kafka Connection Settings](../../.gitbook/assets/screenshot-2020-05-17-at-4.34.38-pm.png)

* **Host Name**: Your Kafka server broker's host name goes here.
* **Port:** The port to connect to the broker goes here.
* **Topic Name**: Provide the topic name, to which you want to send data.
* **SSL Enabled**: Enable this option if you have enabled SSL to connect to your broker.
* **CA Certificate**: If you have enabled SSL, provide the CA certificate in this field.
* **Enable SASL with SSL**: If you have enabled SSL, you can optionally use SASL for client authentication.
* **Username**: Provide the username as configured in Kafka for authenticating clients with SASL.
* **Password**: Provide the password as configured in Kafka for authenticating clients with SASL.

{% hint style="info" %}
Enable SSL to use SASL authentication, i.e use SASL_SSL.
{% endhint %}

![SASL Connection Settings](../../.gitbook/assets/kafka-sasl.png)

RudderStack currently supports the following SASL types:

* **PLAIN**
* **SCRAM SHA-256**
* **SCRAM SHA-512**

{% hint style="info" %}
For more information on the Apache Kafka SASL authentication, visit the [official docs](https://kafka.apache.org/documentation/#security_sasl).
{% endhint %}


## Partition Key

We use `userId` as the partition key of message. 

{% hint style="info" %}
If `userId` is not present in payload, then `anonymousId` is used instead.
{% endhint %}

So, if you have a multi-partitioned topic, then the records of the same `userId` \(or `anonymousId` in absence of `userId`\) will always go to the same partition.

## FAQ

#### **Does my Kafka server require Client Authentication?**

If you have enabled 2-way SSL, i.e. your server requires client authentication, then you need to have our CA certificate and put that in the Truststore of your server.

#### **How can I enable the 2-way SSL in Kafka and connect to RudderStack?**

Please follow the steps below that make use of Java's **keytool** utility.

1. **Generate Key and Certificates:**     `keytool -keystore kafka.server.keystore.jks -alias localhost -keyalg RSA -genkey` 
2. **Create your own CA**
   1. Generate a CA that is simply a public-private key pair and certificate, and it is intended to sign other certificates. **You need to put this certificate at the RudderStack Web App as CA certificate**.   


      `openssl req -new -x509 -keyout ca-key -out ca-cert -days {validity}`

   2. Add the generated CA to the **broker's truststore** so that the brokers can trust this CA. 

      `keytool -keystore kafka.server.truststore.jks -alias CARoot -importcert -file ca-cert` 
3. **Sign the certificates**
   1. Export the certificate from the keystore, like so:   `keytool -keystore kafka.server.keystore.jks -alias localhost -certreq -file cert-file`  
   2. Sign it with the CA:  `openssl x509 -req -CA ca-cert -CAkey ca-key -in cert-file -out cert-signed -days {validity} -CAcreateserial -passin pass:{ca-password}`  
   3. Import both the certificate of the CA and the signed certificate into the broker keystore:  `1. keytool -keystore kafka.server.keystore.jks -alias CARoot -import -file ca-cert  2. keytool -keystore kafka.server.keystore.jks -alias localhost -import -file cert-signed` 

By following all the steps described above, the script to create the CA and broker and client truststores and keystores is as shown:

```markup
keytool -keystore kafka.server.keystore.jks -alias localhost -keyalg RSA -validity {validity} -genkey
openssl req -new -x509 -keyout ca-key -out ca-cert -days {validity}
keytool -keystore kafka.server.truststore.jks -alias CARoot -importcert -file ca-cert
keytool -keystore kafka.server.keystore.jks -alias localhost -certreq -file cert-file
openssl x509 -req -CA ca-cert -CAkey ca-key -in cert-file -out cert-signed -days {validity} -CAcreateserial -passin pass:{ca-password}
keytool -keystore kafka.server.keystore.jks -alias CARoot -import -file ca-cert
keytool -keystore kafka.server.keystore.jks -alias localhost -import -file cert-signed
```

* Put the below parameters in your `server.properties` 

```markup
ssl.keystore.location=<keystore location>
ssl.keystore.password=<keystore password>
ssl.key.password=<ca key password>
ssl.truststore.location=<truststore location>
ssl.truststore.password=<truststore password>
ssl.client.auth=required
ssl.enabled.protocols=TLSv1.2,TLSv1.1,TLSv1
ssl.truststore.type=JKS
ssl.keystore.type=JKS
```

* You also need to put RudderStack's CA certificate to your truststore, as shown: ****

```bash
keytool -keystore kafka.server.truststore.jks -alias CARootRudder -import -file ca-cert-rudder
// here ca-cert-rudder is the rudder CA certificate
```

Here is the CA certificate that you need to add to your trust store:

```bash
-----BEGIN CERTIFICATE-----
MIIEDzCCAvegAwIBAgIUByH8aYuRqjCyz5yZZ91fcJOsW+0wDQYJKoZIhvcNAQEL
BQAwgZYxCzAJBgNVBAYTAklOMRQwEgYDVQQIDAtXZXN0IEJlbmdhbDEQMA4GA1UE
BwwHS29sa2F0YTEUMBIGA1UECgwLUnVkZGVyc3RhY2sxCzAJBgNVBAsMAklUMRQw
EgYDVQQDDAtSdWRkZXJzdGFjazEmMCQGCSqGSIb3DQEJARYXY29udGFjdEBydWRk
ZXJzdGFjay5jb20wHhcNMjAwNTE5MTA1OTEwWhcNMjEwNTE5MTA1OTEwWjCBljEL
MAkGA1UEBhMCSU4xFDASBgNVBAgMC1dlc3QgQmVuZ2FsMRAwDgYDVQQHDAdLb2xr
YXRhMRQwEgYDVQQKDAtSdWRkZXJzdGFjazELMAkGA1UECwwCSVQxFDASBgNVBAMM
C1J1ZGRlcnN0YWNrMSYwJAYJKoZIhvcNAQkBFhdjb250YWN0QHJ1ZGRlcnN0YWNr
LmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMkLBYbfhvhm2wpJ
FZSr9AGyrJUEh2e6YaY83xLRDuOYC1cvqlmCNxltc4W+ACyyi9zqSvhrrNb2C/Yh
Ig4gvvplImAAmv5Ua4ZiB2XSrn9ZvR+baRyezPgKI1+iU5ovDciUkeZP3p7hEmLw
ktayyFrWV5IEuGnfGBN4O077tgUiCm8zq3cHC0e5JBTUtelnwj6u1Ye6zZfIx/rC
Ikf0l1LGZqV1DHZefCqPl3l9awVnA4rbllL9a+mLNe44BT2H4UG6OaZxnAEqVQ9x
lMvvDAYSzaSI334qGw/AAeBUE3mHyEbE9PtS0p+qOdRiq4b5m+usW5VbZBFSvT4A
FR2Xa2cCAwEAAaNTMFEwHQYDVR0OBBYEFF71gmg4bAdft9PF3Sj9QMrxwoFMMB8G
A1UdIwQYMBaAFF71gmg4bAdft9PF3Sj9QMrxwoFMMA8GA1UdEwEB/wQFMAMBAf8w
DQYJKoZIhvcNAQELBQADggEBAFvXp77ZQXwqB0vQZXAr4JfiNZueNP4OlpxltiLd
qt0UwLJzCZ/ik65jmGGcoxZeFQc3dF8InheH+zvanPWBq385TDSyF9/vomKbu7+R
b7ndgDtWGpJm6vCUgC6m15KRKzjlHmiWu227hed4ZNrl5EJwqqFhKzSQ62wv66uM
xHaTVaC1ThV5MmecsC7kS3mNCkhO1IVxy5KAJCftYzjni+O0U0wkcmUnZjJyN0l9
hAegB6VLwodW3FqFJ7hMlSZOxE9hYjl9/FlqDdS3KPtn8qh9uliq9V8NELK2jROh
vWJxTpadFmHwCTtKNrfnm2PgokxX3pVtkFu7xQhl26+87RQ=
-----END CERTIFICATE-----
```

**How can you connect to RudderStack if your Kafka server is running in a Kubernetes cluster?**

You will need to expose one public address, to which RudderStack connects. We recommend using SSL for that. Please note that you should allow **only the authenticated clients** for this exposed address. If you use `PLAINTEXT` for your internal services within your cluster, you might have the same. 

Open this address with SSL in addition to that. For that, you need to update `advertised.listeners` in your `server.properties`. 

A sample entry is as shown below:

```text
# Hostname and port the broker will advertise to producers and consumers.
# here the INTERNAL listerner is your cluster kafka service host for kafka server
# and the EXTERNAL is public loadbalancer for kafka server 
advertised.listeners=INTERNAL://kafka-0.kafka-headless.kafka-test-1.svc.cluster.local:9092,EXTERNAL://ab7e36e84991c11ea8a930ebf847c1ef-555780507.us-east-1.elb.amazonaws.com:19092

# Maps listener names to security protocols, the default is for them to be the same. See the config documentation for more details
listener.security.protocol.map=INTERNAL:PLAINTEXT,EXTERNAL:SSL
```


**Is SASL_PLAINTEXT supported?**

RudderStack does not support **SASL_PLAINTEXT**. You can use **SASL_SSL** instead. The [official Kafka documentation](https://kafka.apache.org/documentation/#security_sasl) recommends using SASL with SSL in production.

## Contact Us

If you come across any issues while configuring or using Kafka with RudderStack, please feel free to [contact us](mailto:%20docs@rudderstack.com). You can also start a conversation on our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) channel; we will be happy to talk to you!

