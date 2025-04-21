import "./Service.css"
import ServiceList from "./ServiceList";

function Service() {
    return (
        <div className="service-con">
            <div className="service-background">
            <video
            className="service-img"
            autoPlay
            loop
            muted
            playsInline
        >
        <source 
            src="https://cdn.dribbble.com/userupload/17658826/file/original-e90b2a314b04f85dfbbf198359ab5098.mp4" 
            type="video/mp4" 
        />
        Your browser does not support the video tag.
        </video>

                <div className="service-heding">
                <h2 className="service-heading">Our Professional Services</h2>
                <p className="service-sol">Comprehensive Home Repair and Installation Solutions</p>
                </div>
                
            </div>
            <ServiceList/>
        </div>
    );
}

export default Service;

