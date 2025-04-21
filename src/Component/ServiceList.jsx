import { ShieldCheck, Clock, Wrench } from 'lucide-react';
import "./serviceList.css"
function ServiceList(){
    
    return(
        <div className="servicelist-cont">
            <div className="servicelist-dis">
            <div className="services-header">
        <h1>Our Professional Services</h1>
        <p>Comprehensive Home Repair and Installation Solutions</p>
      </div>

      <div className="service-section">
        <h2>AC Repair & Maintenance</h2>
        <p>Expert cooling system diagnostics, repair, and maintenance. We handle all makes and models, ensuring your air conditioning runs efficiently and effectively.</p>
        <ul>
          <li>Comprehensive system diagnostics</li>
          <li>Refrigerant recharge</li>
          <li>Compressor and motor repairs</li>
          <li>Regular maintenance services</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Washing Machine Repair</h2>
        <p>From front-load to top-load machines, we diagnose and repair all types of washing machines efficiently and affordably.</p>
        <ul>
          <li>Drum and belt repairs</li>
          <li>Drainage and water inlet issues</li>
          <li>Electronic control diagnostics</li>
          <li>Routine cleaning and service</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Professional Installation</h2>
        <p>Ensure your appliances and systems are installed correctly and safely with our expert installation services.</p>
        <ul>
          <li>New appliance setup</li>
          <li>Electrical and plumbing integration</li>
          <li>Safe mounting and fitting</li>
          <li>Testing and demonstration</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Home Service Support</h2>
        <p>Our mobile service team brings expert assistance directly to your doorstep for all household repair needs.</p>
        <ul>
          <li>Doorstep diagnostics</li>
          <li>Quick fixes for common issues</li>
          <li>Spare parts availability</li>
          <li>Transparent service charges</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>TV & Entertainment System Repair</h2>
        <p>From smart TVs to home theaters, we restore your entertainment systems to peak performance.</p>
        <ul>
          <li>Screen and display repairs</li>
          <li>Audio issues and speaker replacement</li>
          <li>Motherboard and HDMI port fixes</li>
          <li>Wall-mount setup and calibration</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Computer & Laptop Services</h2>
        <p>Reliable solutions for hardware and software issues to keep your devices running smoothly.</p>
        <ul>
          <li>System formatting and OS installation</li>
          <li>Virus and malware removal</li>
          <li>Hardware upgrades</li>
          <li>Data recovery and backup</li>
        </ul>
      </div>
            </div>

            <div className="our-service-guranty">
                <div className="our-service-guranty-con">
                    <div className="guranty-item">
                    <section className="guarantee-section">
                        <h2 className="heading">Our Service Guarantee</h2>
                    <div className="card-container">
                        <div className="card">
                            <i className="fas fa-shield-alt icon"></i>
                            <p className="text">90-Day Service Warranty</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-clock icon"></i>
                            <p className="text">24/7 Emergency Support</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-tools icon"></i>
                            <p className="text">Expert Technicians</p>
                        </div>
             </div>
                </section>
                </div>
            </div>

        </div>
        </div>
    )
}
export default ServiceList;