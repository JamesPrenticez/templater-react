import React from 'react'
import {connect} from 'react-redux'


class SelectionsPreliminary extends React.Component {
    render() {
        return (
            <>
                <h2 className='selectionsHeader'>Preliminary and General</h2><br />
                
                {/* ---------- Image Dump (will probs delete) ----------*/}
                {/* <div className="imageContainer" style={{height: "250px"}}>
                    <img style={{height: "50%", width: "40%", margin: "40px"}}src={"../img/icons/document.png"}></img>
                </div>

                <div className="imageContainer" style={{height: "250px"}}>
                    <img style={{height: "75%", width: "50%", margin: "30px"}}src={"../img/icons/engineer.png"}></img>
                </div>

                <div className="imageContainer" style={{height: "250px"}}>
                    <img style={{height: "65%", width: "50%", margin: "30px"}}src={"../img/icons/surveyor.png"}></img>
                </div>

                <div className="imageContainer" style={{height: "250px"}}>
                    <img style={{height: "75%", width: "50%", margin: "30px"}}src={"../img/icons/electricity.png"}></img>
                </div> */}

                <form>
                {/* ---------- Bulding Consent ----------*/}
                        <h3>Building Consent</h3>
                        <input type='radio' id='TDC' name='buildingConsent' value='Tasman District Council'/>
                        <label for= 'TDC'>Tasman District Council</label><br/>
                        <input type='radio' id='NCC' name='buildingConsent' value='Nelson City Council'/>
                        <label for='NCC'>Nelson City Council</label><br/>
                        <input type='radio' id='Other' name='buildingConsent' value='Other'/>
                        <label for='Other'>Other</label><br/>
                        <br />

                        <h3>Resource Consent</h3>
                        <input type='radio' id='rcyes' name='resourceConsent' value='Yes'/>
                        <label for= 'rcyes'>Yes</label><br/>
                        <input type='radio' id='rcno' name='resourceConsent' value='No'/>
                        <label for= 'rcno'>No</label><br/>
                        <label for= 'rcvalue'>Value</label>
                        <input type='text' id='rcvalue' name='resourceConsent' value='' placeholder='$0.00'/><br/>
                        <br />

                    {/* ---------- Engineering ----------*/}
                        <h3>Engineering</h3><br />

                        <h4>Foundation</h4>
                        <input type='radio' id='ribraft' name='foundation' value='ribraft'/>
                        <label for='Ribraft'>Ribraft</label><br/>
                        <input type='radio' id='3604Timber' name='foundation' value='3604Timber'/>
                        <label for='NZS3604 Timber Floor'>NZS3604 Timber Floor</label><br/>
                        <input type='radio' id='3604Concrete' name='foundation' value='3604Concrete'/>
                        <label for='NZS3604 Concrete Slab'>NZS3604 Concrete Slab</label><br/>
                        <label for= 'Other'>Other</label>
                        <input type='text' id='foundationOther' name='foundation' value='' placeholder='foundationOther'/><br/>
                        <br />

                        <h4>Structural Steel</h4>
                        <input type='radio' id='ssyes' name='structuralSteel' value='Yes'/>
                        <label for= 'ssyes'>Yes</label><br/>
                        <input type='radio' id='ssno' name='structuralSteel' value='No'/>
                        <label for= 'ssno'>No</label><br/>
                        <label for= 'ssNotes'>Notes</label>
                        <input type='text' id='rcvalue' name='resourcestructuralSteel' value='' placeholder='i.e Portal Frame'/><br/>
                        <br />
                    {/* ---------- Surveyor ----------*/}                       
                        <h3>Surveyor</h3><br />

                        <h4>Land Surveyor Fees</h4>
                        <input type='radio' id='landSurveyorYes' name='landSurveyor' value='Yes'/>
                        <label for= 'ssyes'>Yes</label><br/>
                        <input type='radio' id='landSurveyorNo' name='landSurveyor' value='No'/>
                        <label for= 'ssno'>No</label><br/>
                        <br />

                    {/* ---------- Mains Cable and Temp Power ----------*/}
                        <h3>Mains Cable and Temp Power</h3><br />

                        <h4>Include temporary power for the duration of the build</h4>
                        <input type='radio' id='tempPowerYes' name='tempPower' value='Yes'/>
                        <label for= 'tempPowerYes'>Yes</label><br/>
                        <input type='radio' id='tempPowerNo' name='tempPower' value='No'/>
                        <label for= 'tempPowerNo'>No</label><br/>
                        <label for= 'tempPowerNotes'>Notes</label>
                        <input type='text' id='tempPowerNotes' name='tpNotes' value='' placeholder='i.e Owners Care'/><br/>
                        <br />

                        <h4>Includes for a maximum of 20m of single phase mains cable</h4>
                        <input type='radio' id='mainsCableYes' name='mainsPower' value='Yes'/>
                        <label for= 'mainsCableYes'>Yes</label><br/>
                        <input type='radio' id='mainsCableNo' name='mainsPower' value='No'/>
                        <label for= 'mainsCableNo'>No</label><br/>
                        <label for= 'mainsCableNotes'>Notes</label>
                        <input type='text' id='mainsCableNotes' name='mainsPower' value='' placeholder='i.e Only need 15m'/><br/>

                </form>   
            </>
        )
    }
}

export default connect()(SelectionsPreliminary)
