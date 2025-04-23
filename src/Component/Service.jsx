import "./Service.css"
import ServiceList from "./ServiceList";

function Service() {
    return (
        <div className="service-con">
            <div className="service-background">
                <img src="/servicelogo.gif" alt="Animated background" className="service-img"/>
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

