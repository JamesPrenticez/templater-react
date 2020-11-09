import React from 'react'

export default class StandardRange extends React.Component {

// Name plug
// namePlug = (count) => {
//     console.log("namePlug")
//     var jobName = ""
//     var coutner = count
//     var nameArray = ['alexandra', 'andrew', 'anne', 'catherine']
//     jobName = nameArray[coutner]   
// }

render(){
        const jobName = "andrew"
return(
    <>
            {/* <div className={jobName}>
                <div className="content">
                <img src={"./img/houses/" + `${jobName}` + "/" + `${jobName}` + ".png"} alt={jobName}></img>
                <h4>{jobName}</h4>
                <p>test</p>
                </div>
            </div> */}

            <div className="row alexandra">
                <div className="content">
                    <div className="text">
                        <h2>Alexandra</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                      </div>
                    <img src="./img/houses/alexandra/alexandra_elevation.png" alt="alexandra"></img>
                    <img src="./img/houses/alexandra/alexandra_3d.png" alt="alexandra"></img>
                    <img src="./img/houses/alexandra/alexandra_floor.png" alt="alexandra"></img>
                    <img src="./img/houses/alexandra/alexandra.png" alt="alexandra"></img>
                </div>
            </div>

            <div className="row andrew">
                <div className="content">
                    <div className="text">
                        <h2>Andrew</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/andrew/andrew_elevation.png" alt="andrew"></img>
                    <img src="./img/houses/andrew/andrew_3d.png" alt="andrew"></img>
                    <img src="./img/houses/andrew/andrew_plan.png" alt="andrew"></img>
                    <img src="./img/houses/andrew/andrew.png" alt="andrew"></img>
                </div>
            </div>

            <div className="row anne">
                <div className="content">
                    <div className="text">
                        <h2>anne</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/anne/anne_elevation.png" alt="anne"></img>
                    <img src="./img/houses/anne/anne_3d.png" alt="anne"></img>
                    <img src="./img/houses/anne/anne_plan.png" alt="anne"></img>
                    <img src="./img/houses/anne/anne.png" alt="anne"></img>
                </div>
            </div>

            <div className="row catherine">
                <div className="content">
                    <div className="text">
                        <h2>catherine</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/catherine/catherine_elevation.png" alt="catherine"></img>
                    <img src="./img/houses/catherine/catherine_3d.png" alt="catherine"></img>
                    <img src="./img/houses/catherine/catherine_plan.png" alt="catherine"></img>
                    <img src="./img/houses/catherine/catherine.png" alt="catherine"></img>
                </div>
            </div>

            <div className="row charles">
                <div className="content">
                    <div className="text">
                        <h2>charles</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/charles/charles_elevation.png" alt="charles"></img>
                    <img src="./img/houses/charles/charles_3d.png" alt="charles"></img>
                    <img src="./img/houses/charles/charles_plan.png" alt="charles"></img>
                    <img src="./img/houses/charles/charles.png" alt="charles"></img>
                </div>
            </div>

            <div className="row charlotte">
                <div className="content">
                    <div className="text">
                        <h2>charlotte</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/charlotte/charlotte_elevation.png" alt="charlotte"></img>
                    <img src="./img/houses/charlotte/charlotte_3d.png" alt="charlotte"></img>
                    <img src="./img/houses/charlotte/charlotte_plan.png" alt="charlotte"></img>
                    <img src="./img/houses/charlotte/charlotte.png" alt="charlotte"></img>
                </div>
            </div>

            <div className="row edward2">
                <div className="content">
                    <div className="text">
                        <h2>edward2</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/edward2/edward2_elevation.png" alt="edward2"></img>
                    <img src="./img/houses/edward2/edward2_3d.png" alt="edward2"></img>
                    <img src="./img/houses/edward2/edward2_plan.png" alt="edward2"></img>
                    <img src="./img/houses/edward2/edward2.png" alt="edward2"></img>
                </div>
            </div>

            <div className="row edward3">
                <div className="content">
                    <div className="text">
                        <h2>edward3</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/edward3/edward3_elevation.png" alt="edward3"></img>
                    <img src="./img/houses/edward3/edward3_3d.png" alt="edward3"></img>
                    <img src="./img/houses/edward3/edward3_plan.png" alt="edward3"></img>
                    <img src="./img/houses/edward3/edward3.png" alt="edward3"></img>
                </div>
            </div> 

            <div className="row edward4">
                <div className="content">
                    <div className="text">
                        <h2>edward4</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/edward4/edward4_elevation.png" alt="edward4"></img>
                    <img src="./img/houses/edward4/edward4_3d.png" alt="edward4"></img>
                    <img src="./img/houses/edward4/edward4_plan.png" alt="edward4"></img>
                    <img src="./img/houses/edward4/edward4.png" alt="edward4"></img>
                </div>
            </div> 

            <div className="row ernest">
                <div className="content">
                    <div className="text">
                        <h2>ernest</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/ernest/ernest_elevation.png" alt="ernest"></img>
                    <img src="./img/houses/ernest/ernest_3d.png" alt="ernest"></img>
                    <img src="./img/houses/ernest/ernest_plan.png" alt="ernest"></img>
                    <img src="./img/houses/ernest/ernest.png" alt="ernest"></img>
                </div>
            </div>     

            <div className="row george">
                <div className="content">
                    <div className="text">
                        <h2>george</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/george/george_elevation.png" alt="george"></img>
                    <img src="./img/houses/george/george_3d.png" alt="george"></img>
                    <img src="./img/houses/george/george_plan.png" alt="george"></img>
                    <img src="./img/houses/george/george.png" alt="george"></img>
                </div>
            </div>

            <div className="row james">
                <div className="content">
                    <div className="text">
                        <h2>james</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/james/james_elevation.png" alt="james"></img>
                    <img src="./img/houses/james/james_3d.png" alt="james"></img>
                    <img src="./img/houses/james/james_plan.png" alt="james"></img>
                    <img src="./img/houses/james/james.png" alt="james"></img>
                </div>
            </div>

            <div className="row louis">
                <div className="content">
                    <div className="text">
                        <h2>Louis</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/louis/louis_elevation.png" alt="louise"></img>
                    <img src="./img/houses/louis/louis_3d.png" alt="louise"></img>
                    <img src="./img/houses/louis/louis_plan.png" alt="louise"></img>
                    <img src="./img/houses/louis/louis.png" alt="louise"></img>
                </div>
            </div>

            <div className="row mary">
                <div className="content">
                    <div className="text">
                        <h2>mary</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/mary/mary_elevation.png" alt="mary"></img>
                    <img src="./img/houses/mary/mary_3d.png" alt="mary"></img>
                    <img src="./img/houses/mary/mary_plan.png" alt="mary"></img>
                    <img src="./img/houses/mary/mary.png" alt="mary"></img>
                </div>
            </div>

            <div className="row victoria">
                <div className="content">
                    <div className="text">
                        <h2>victoria</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/victoria/victoria_elevation.png" alt="victoria"></img>
                    <img src="./img/houses/victoria/victoria_3d.png" alt="victoria"></img>
                    <img src="./img/houses/victoria/victoria_plan.png" alt="victoria"></img>
                    <img src="./img/houses/victoria/victoria.png" alt="victoria"></img>
                </div>
            </div>

            <div className="row william">
                <div className="content">
                    <div className="text">
                        <h2>william</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/william/william_elevation.png" alt="william"></img>
                    <img src="./img/houses/william/william_3d.png" alt="william"></img>
                    <img src="./img/houses/william/william_plan.png" alt="william"></img>
                    <img src="./img/houses/william/william.png" alt="william"></img>
                </div>
            </div>
    </>
        )
    }
}