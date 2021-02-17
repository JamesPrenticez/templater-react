import React from 'react'
import {connect} from 'react-redux'
import {FaCaretDown, FaArrowLeft} from 'react-icons/fa'

class SidebarSelections extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.dropDown()
    }

    // dropDown = () => {
    //     var dropDown = document.getElementsByClassName("dropdown-btn");

    //     for (let i = 0; i < dropDown.length; i++) {
    //         dropDown[i].addEventListener("click", () => {
    //             dropDown[i]?.classList.toggle("active");

    //         var dropdownContent = dropDown[i]?.nextElementSibling
    //         if (dropdownContent.style.display === "block") {
    //             dropdownContent.style.display = "none";
    //           } else {
    //             dropdownContent.style.display = "block";
    //           }

    //         })
    //     };
    // }
    render() {
        const { jobs } = this.props
        const { id } = this.props.match.params
        console.log(jobs)
        console.log(id)
    
        const backStyle = { color: 'DarkMagenta', height: '35px', width: '35px', marginLeft: '7px', cursor: 'pointer', position: 'absolute' }

        return (
            <>

                 <div className="sidebar">

                    {/*---------- Back Button ---------- */}
                    <div style={{height: '50px'}}>
                    <FaArrowLeft style={backStyle} onClick={this.props.view} />
                    </div>

                    {/*---------- Home---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.viewHome}>Home</button>
                    </div>
                    {/*---------- Preliminary and General---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.viewPreliminary}>P&G<FaCaretDown /></button>
                        <div className="dropdown-container" style={{ display: 'none' }}>
                            <a href="#">Building Consent</a>
                            <a href="#">Engineering</a>
                            <a href="#">Site Survey</a>
                            <a href="#">Temp Power</a>
                        </div>
                    </div>

                    {/*---------- Envelope ---------- */}
                    <div className="dropdown">
                        <button className="dropdown-btn" onClick={this.props.viewEnvelope}>Envelope<FaCaretDown /></button>
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
                        <button className="dropdown-btn" onClick={this.props.viewInterior}>Interior<FaCaretDown /></button>
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
                        <button className="dropdown-btn" onClick={this.props.viewServices}>Services<FaCaretDown /></button>
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
                        <button className="dropdown-btn" onClick={this.props.viewSiteworks}>Sitework<FaCaretDown /></button>
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


export default connect()(SidebarSelections)