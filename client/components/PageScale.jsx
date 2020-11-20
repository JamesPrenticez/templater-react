import React from 'react'
import SidebarContract from './SidebarContract'
import Coverpage from './Coverpage'
function PageScale() {

    const setScale = () => {
        var value = scaleSelect.options[scaleSelect.selectedIndex].value;
        document.getElementById("mainWrapper").style.transform = `scale(${value})`    
    }

    return (
        <>
        <SidebarContract />

        <div className="contractZoom">
            <select id="scaleSelect" title="Zoom" tabIndex="1" onChange={setScale}>
                    <option id="pageAutoOption" value="auto">Automatic Zoom</option>
                    <option id="pageActualOption" value="page-actual">Actual Size</option>
                    <option id="pageFitOption" value="page-fit">Page Fit</option>
                    <option id="50" value="0.25">50%</option>
                    <option id="75" value="0.50">75%</option>
                    <option id="100" value="0.75">100%</option>
                    <option id="125" value="1.00">125%</option>
            </select>
        </div>

        <div id="mainWrapper">
                <div className="page" id="page">
                    <div className="subpage">
                    <Coverpage />
                    </div>
                </div>
                <div className="page" id="page">
                    <div className="subpage">Page 2/10</div>
                </div>
                <div className="page" id="page">
                    <div className="subpage">Page 3/10</div>
                </div>
                <div className="page" id="page">
                    <div className="subpage">Page 4/10</div>
                </div>
                <div className="page" id="page">
                    <div className="subpage">Page 5/10</div>
                </div>
        </div>


        </>
    )
}


export default PageScale