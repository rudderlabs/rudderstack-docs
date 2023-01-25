import React from 'react'

export default function Iplist() {
  return (
    <><p>To enable network access to RudderStack, allowlist the following RudderStack IPs depending on your region and <a href="https://www.rudderstack.com/pricing">RudderStack Cloud plan</a>:</p>

    <table>
      <tr>
        <th>Plan</th>
        <th colspan="2"><center>Region</center></th>
      </tr>
      <tr>
        <td></td>
        <td><b><center>US</center></b></td>
        <td><b><center>EU</center></b></td>  
      </tr>
      <tr>
        <td>Free, Starter, and Growth</td>
        <td><ul><li>23.20.96.9</li><li>18.214.35.254</li><li>52.38.160.231</li><li>34.211.241.254</li></ul></td>
        <td><ul><li>18.198.90.215</li><li>18.196.167.201</li></ul></td>
      </tr>
      <tr>
        <td>Enterprise</td>
        <td><ul><li>34.198.90.241</li><li>54.147.40.62</li><li>3.216.35.97</li><li>100.20.239.77</li><li>44.236.60.231</li></ul></td>
        <td><ul><li>3.66.99.198</li><li>3.64.201.167</li></ul></td>
      </tr>
    </table>

    <div class="infoBlock">
    All the outbound traffic is routed through these RudderStack IPs.
    </div></>
  )
}

