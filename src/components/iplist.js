import React from 'react'

export default function Iplist() {
  return (
    <><h2>IPs to be allowlisted</h2>
    <p>To enable network access to RudderStack, you will need to allowlist the following RudderStack IPs:</p>
    <ul>
      <li>3.216.35.97</li>
      <li>23.20.96.9</li>
      <li>18.214.35.254</li>
      <li>54.147.40.62</li>
      <li>34.198.90.241</li>
      <li>100.20.239.77</li>
      <li>52.38.160.231</li>
      <li>34.211.241.254</li>
      <li>44.236.60.231</li>
      <li>3.66.99.198</li>
      <li>3.64.201.167</li>
    </ul>
    
    <div class="infoBlock">
      If you have your deployment in the EU region, you can allowlist only the following two IPs:
      <ul>
      <li>3.66.99.198</li>
      <li>3.64.201.167</li>
      </ul>
    </div>

    <div class="infoBlock">
    All the outbound traffic is routed through these RudderStack IPs.
    </div></>
  )
}

