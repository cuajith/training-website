import React, { Component } from 'react'
import './MissionVission.css'

export class MissionVision extends Component {

    render() {
        return (
            <section>
                
                <div className='democss'>
                    <div className='bluecss'>
                        <img src="./images/missionconverted.jpg" />
                    </div>
                    <div className='redcss'>
                        <h1> MISSION</h1>
                        <p>Our  mission is to provide customized service that suite our clients requirements and to become trusted adviser to our client rather than just remain as service provider.</p>
                    </div>
                </div>
            
                <div className="demo2css">
                    <div className='visioncontentcss'>
                        <h1 className='visionheader'>VISION</h1>
                        <p>Our vision is to change with the time and create history along the way. To build and consolidate its leadership position through successful collaborations, market intelligence and through research and development.</p>
                    </div>
                    <div className='visionimagecss'>
                        <img src="./images/visionconverted.jpg"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default MissionVision
