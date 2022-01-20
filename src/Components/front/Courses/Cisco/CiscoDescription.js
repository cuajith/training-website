import React from 'react'
import "./CiscoDescription.css"

const CiscoDescription = () =>
{
    return (
        
            <section className="service-sec1" id="agmnt">
                <h2 className='s-heading'>CISCO Training</h2>
                    <div className="container">
                        <div className="faqtabs">
                            <div className="faqtab">
                                <input type="checkbox" id="chck2"/>
                                <label className="faqtab-label" htmlFor="chck2">Network Fundamentals </label>
                                <div className="faqtab-content">
                                <p>Compare and contrast OSI and TCP/IP models</p>
                                <p>Compare and contrast TCP and UDP protocols</p>
                                <p>Describe the impact of infrastructure components in an enterprise network</p>
                                <ul className='faqtab-list'>
                                    <li>Firewalls</li>
                                    <li>Access points</li>
                                    <li>Wireless controllers</li>
                                </ul>
                                <p>Describe the effects of cloud resources on enterprise network architecture</p>
                                <ul className='faqtab-list'>
                                    <li>Traffic path to internal and external cloud services</li>
                                    <li>Virtual services</li>
                                    <li>Basic virtual network infrastructure</li>
                                </ul>
                                <p>Describe the effects of cloud resources on enterprise network architecture</p>
                                <p>Compare and contrast network topologies</p>
                                <ul className='faqtab-list'>
                                    <li>Star</li>
                                    <li>Mesh</li>
                                    <li>Hybrid</li>
                                </ul>
                                <p>Apply troubleshooting methodologies to resolve problems</p>
                                <ul className='faqtab-list'>
                                    <li>Perform and document fault isolation</li>
                                    <li>Resolve or escalate</li>
                                    <li>Verify and monitor resolution</li>
                                </ul>
                                <p>Configure, verify, and troubleshoot IPv4 addressing and subnetting</p>
                                <p>Compare and contrast IPv4 address types</p>
                                <ul className='faqtab-list'>
                                    <li>Unicast</li>
                                    <li>Broadcast</li>
                                    <li>Multicast</li>
                                </ul>
                                <p> Describe the need for private IPv4 addressing</p>
                                <p> Identify the appropriate IPv6 addressing scheme to satisfy addressing requirements in a LAN/WAN environment</p>
                                <p>Configure, verify, and troubleshoot IPv6 addressing</p>
                                <p>Configure and verify IPv6 Stateless Address Auto Configuration</p>
                                <p>Compare and contrast IPv6 address types</p>
                                <ul className='faqtab-list'>
                                    <li>Global unicast</li>
                                    <li>Unique local</li>
                                    <li>Link local</li>
                                    <li>Multicast</li>
                                    <li>Modified EUI 64</li>
                                    <li>Autoconfiguration</li>
                                    <li>Anycast</li>
                                </ul>
                                </div>
                            </div>
                            <div className="faqtab">
                                <input type="checkbox" id="chck2"/>
                                <label className="faqtab-label" htmlFor="chck2">LAN Switching Technologies </label>
                                <div className="faqtab-content">
                                    <p>Describe and verify switching concepts</p>
                                    <ul className='faqtab-list'>
                                    <li>MAC learning and aging</li>
                                    <li>Frame switching</li>
                                    <li>Frame flooding</li>
                                    <li>MAC address table</li>
                                </ul>
                                <p>Interpret Ethernet frame format</p>
                                <p>Troubleshoot interface and cable issues (collisions, errors, duplex, speed)</p>
                                <p>Configure, verify, and troubleshoot VLANs (normal/extended range) spanning multiple switches</p>
                                <p>Configure, verify, and troubleshoot interswitch connectivity</p>
                                <p>Configure, verify, and troubleshoot STP protocols</p>
                                <p>Configure, verify and troubleshoot STP related optional features</p>
                                <ul className='faqtab-list'>
                                    <li>PortFast</li>
                                    <li>BPDU guard</li>
                                </ul>
                                </div>
                            </div>
                            <div className="faqtab">
                                <input type="checkbox" id="chck2"/>
                                <label className="faqtab-label" htmlFor="chck2">Routing Technologies</label>
                                <div className="faqtab-content">
                                  <p>Describe the routing concepts</p>
                                  <ul className='faqtab-list'>
                                    <li>Packet handling along the path through a network</li>
                                    <li>Forwarding decision based on route lookup</li>
                                    <li>Frame rewrite</li>
                                </ul>
                                <p>Interpret the components of a routing table</p>
                                <ul className='faqtab-list'>
                                    <li>Prefix</li>
                                    <li>Network mask</li>
                                    <li>Next hop</li>
                                    <li>Routing protocol code</li>
                                    <li> Administrative distance</li>
                                    <li>Metric</li>
                                    <li>Gateway of last resort</li>
                                </ul>
                                <p>Describe how a routing table is populated by different routing information sources</p>
                                <p>Configure, verify, and troubleshoot inter-VLAN routing</p>
                                <p>Compare and contrast static routing and dynamic routing</p>
                                </div>
                                </div>
                        </div>
                        {/*<div className="faqtabs">
                            <div className="faqtab">
                                <input type="checkbox" id="chck2"/>
                                <label className="faqtab-label" htmlFor="chck2">Question or content</label>
                                <div className="faqtab-content">
                                <p>Answer or detail brief . . . . . .. . . . . .. . . . . .. . . . . . .. . . . </p>
                                </div>
                            </div>
                        </div>
                        <div className="faqtabs">
                            <div className="faqtab">
                                <input type="checkbox" id="chck2"/>
                                <label className="faqtab-label" htmlFor="chck2">Question or content</label>
                                <div className="faqtab-content">
                                <p>Answer or detail brief . . . . . .. . . . . .. . . . . .. . . . . . .. . . . </p>
                                </div>
                            </div>
                        </div>*/}
                 </div>
                </section>
        
    )
}

export default CiscoDescription
