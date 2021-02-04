import React from 'react'
import {connect} from 'react-redux'


class SelectionsPreliminary extends React.Component {
    render() {
        return (
            <>
                <h1 style={{marginBottom: "100px"}}className="selectionsHeader">Preliminary and General</h1>

                {/* ---------- Bulding Consent ----------*/}
                <div className="innerContainer">
                    <div className="imageContainer" style={{height: "250px"}}>
                        <img style={{height: "50%", width: "40%", margin: "40px"}}src={"../img/icons/document.png"}></img>
                    </div>
                    <form>
                        <div className="textContainer" style={{height: "250px"}}>
                                <h2>Building Consent</h2>
                                        <label>Building Consent</label>
                                        <select id="bc" name="bc" className="bc">
                                            <option value="Tasman District Council">Tasman District Council</option>
                                            <option value="Nelson City Council">Nelson City Council</option>
                                        </select>
                                        <label>Resource Consent</label>
                                        <select id="rc" name="rc" className="rc">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <label>Note</label>
                                        <input type="text"></input>
                        </div>
                    </form>
                </div>

                {/* ---------- Engineering ----------*/}
                    <div className="innerContainer">
                        <div className="imageContainer" style={{height: "250px"}}>
                            <img style={{height: "75%", width: "50%", margin: "30px"}}src={"../img/icons/engineer.png"}></img>
                        </div>
                    <form>
                        <div className="textContainer" style={{height: "250px"}}>
                                <h2>Engineering</h2>
                                        <label>Foundation requires specific engineers design (i.e Ribraft) </label>
                                        <select id="bc" name="bc" className="bc">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <label>Structural Engineer Fees (i.e Portal Frames)</label>
                                        <select id="se" name="se" className="se">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <label>Value:</label>
                                        <input type="text"></input>
                        </div>
                    </form>
                </div>

                {/* ---------- Surveyor ----------*/}
                    <div className="innerContainer">
                        <div className="imageContainer" style={{height: "250px"}}>
                            <img style={{height: "65%", width: "50%", margin: "30px"}}src={"../img/icons/surveyor.png"}></img>
                        </div>
                    <form>
                        <div className="textContainer" style={{height: "250px"}}>
                                <h2>Surveyor</h2>
                                        <label>Land Surveyor Fees</label>
                                        <select id="se" name="se" className="se">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <label>Value:</label>
                                        <input type="text"></input>
                        </div>
                    </form>
                </div>

                {/* ---------- Mains Cable and Temp Power ----------*/}
                    <div className="innerContainer">
                        <div className="imageContainer" style={{height: "250px"}}>
                            <img style={{height: "75%", width: "50%", margin: "30px"}}src={"../img/icons/electricity.png"}></img>
                        </div>
                    <form>
                        <div className="textContainer" style={{height: "250px"}}>
                                <h2>Mains Cable and Temp Power</h2>
                                        <label>Includes for the supply of temporary power for the duration of the build</label>
                                        <select id="tp" name="tp" className="tp">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        <label>Note:</label>
                                        <input type="text"></input>
                                        <label>Includes for a maximum of 20m of single phase mains cable</label>
                                        <select id="mc" name="mc" className="mc">
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                        </div>
                    </form>
                </div>                


                        
  
            </>
        )
    }
}

export default connect()(SelectionsPreliminary)
