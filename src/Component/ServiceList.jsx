import { ShieldCheck, Clock, Wrench } from 'lucide-react';
import "./serviceList.css"
function ServiceList(){
    
    return(
        <div className="servicelist-cont">
            <div className="servicelist-dis">
            <div className="services-header">
      </div>

      <div className="service-section">
          <h2>AC Services and Maintenance</h2>
          <p>We provide diagnostics, servicing, and repair for all types of AC systems.</p>
          <ul>
            <li>Types of AC: Split AC, Duct AC, CASSETTE AC, Cold Room, Window AC, VRF/VRV</li>
            <li>AC Servicing: Air filter cleaning, cooling coil clearing, panel cleaning, gas pressure check, ampere check, condenser coil cleaning</li>
            <li>Repair: Gas charging, linkage rectification, compressor replacement, cooling/condenser coil repair, motor replacement</li>
          </ul>
        </div>

        <div className="service-section">
          <h2>Professional AC Installation</h2>
          <p>Installation services for all major AC types by certified professionals.</p>
          <ul>
            <li>Split AC Installation</li>
            <li>CASSETTE AC Installation</li>
            <li>Ductable AC Installation</li>
            <li>VRV / VRF Installation</li>
            <li>AHU Copper Piping Installation</li>
          </ul>
        </div>

        <div className="service-section">
          <h2>Home Service Support</h2>
          <p>Reliable and fast doorstep services for both home and commercial requirements.</p>
          <ul>
            <li>On-site repair services</li>
            <li>Emergency technical support</li>
            <li>Comprehensive technical solutions</li>
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
                            <p className="text">Hours - Mon - Sat 9:30 am to 6:00 pm</p>
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
       
          

        <div className="service-story">
          <h2 className='our-story'>Our Story</h2>
          <p className='our-story-headline'>Established in 2018, S.K. Enterprises has been delivering reliable home and commercial services under the blessing of Sadguru Krupa.</p>
          
        </div>

      </div>
    )
}
export default ServiceList;

