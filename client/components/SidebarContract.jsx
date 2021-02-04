import React from 'react'
import {connect} from 'react-redux'
import {FaCaretDown} from 'react-icons/fa'

class SidebarContract extends React.Component {
    componentDidMount() {
        this.dropDown()
    }

    dropDown = () => {
        var dropDown = document.getElementsByClassName("dropdown-btn");

        for (let i = 0; i < dropDown.length; i++) {
            dropDown[i].addEventListener("click", () => {
                dropDown[i]?.classList.toggle("active");

            var dropdownContent = dropDown[i]?.nextElementSibling;
            // var computedStyle = window.getComputedStyle(dropdownContent, null).getPropertyValue("display")
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
              } else {
                dropdownContent.style.display = "block";
              }

            })
        };
    }
    render() {
        console.log(this.props.parentProps.currentPage)
        return (
            <>
                 <div className="sidebar">
                    {/*---------- Preliminary and General---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.parentProps.viewPreliminary}>P&G<FaCaretDown /></button>
                        <div className="dropdown-container" style={{ display: 'none' }}>
                            <a href="#">Building Consent</a>
                            <a href="#">Engineering</a>
                            <a href="#">Site Survey</a>
                            <a href="#">Temp Power</a>
                        </div>
                    </div>

                    {/*---------- Envelope ---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.parentProps.viewEnvelope}>Envelope<FaCaretDown /></button>
                        <div className="dropdown-container" style={{ display: 'none' }}>
                            <a href="#">Floor System</a>
                            <a href="#">Framing</a>
                            <a href="#">Cladding</a>
                            <a href="#">Aluminium Joinery</a>
                            <a href="#">Skylights</a>
                            <a href="#">Garage Door</a>
                            <a href="#">Roof, Fascia, Gutter</a>
                            <a href="#">Soffits</a>
                        </div>
                    </div>
                    {/*---------- Interior ---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.parentProps.viewInterior}>Interior<FaCaretDown /></button>
                        <div className="dropdown-container" style={{ display: 'none' }}>
                            <a href="#">Interior Linings</a>
                            <a href="#">Skirting, Architrave & Scotia</a>
                            <a href="#">Ceiling Access</a>
                            <a href="#">Insulation</a>
                            <a href="#">Painting</a>
                            <a href="#">Interior Doors</a>
                            <a href="#">Wardrobes</a>
                            <a href="#">Kitchen & Pantry</a>
                            <a href="#">Other Joinery</a>
                            <a href="#">Carpet</a>
                            <a href="#">Vinyl</a>
                            <a href="#">Tiles</a>
                        </div>
                    </div>  
                    {/*---------- Services --------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.parentProps.viewServices}>Services<FaCaretDown /></button>
                        <div className="dropdown-container" style={{ display: 'none' }}>
                            <a href="#">Electrical</a>
                            <a href="#">Heatpump</a>
                            <a href="#">Gas</a>
                            <a href="#">Appliances</a>
                            <a href="#">Plumbing</a>
                            <a href="#">Fittings & Fixtures</a>
                            <a href="#">Drainage</a>
                        </div>
                    </div> 
                    {/*---------- Site Work ---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.parentProps.viewSiteworks}>Sitework<FaCaretDown /></button>
                        <div className="dropdown-container" style={{ display: 'none' }}>
                            <a href="#">Driveways & Patios</a>
                            <a href="#">Landscaping</a>
                            <a href="#">Timber Decking</a>
                            <a href="#">Sundry</a>
                        </div>
                    </div> 
                                                  
                </div>
            </>
        )
    }
}


export default connect()(SidebarContract)