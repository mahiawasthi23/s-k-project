import "./Service.css"
import ServiceList from "./ServiceList";
function Service() {
    return (
        <div className="service-con">
            <div className="service-background">
                <div className="service-heding">
                <h1>Our Professional Services</h1>
                <p>Comprehensive Home Repair and Installation Solutions</p>
                </div>
            </div>
            <ServiceList/>
        </div>
    );
}
export default Service;

