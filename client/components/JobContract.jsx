import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import Coverpage from './Coverpage'

export default class JobContract extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <div className='main'>
            <div className='nav'>
                <ul id="menu">
                <h4 className="navTitle">Menu</h4>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/edit`}>Edit Details</Link></li>
                    <li><Link to={`/products`}>Add Products</Link></li>
                <h4 className="navTitle">Sections</h4>
                    <li ><Link to={`#page0`} class="active">Zero</Link></li> 
                    <li ><Link to={`#page1`}>First</Link></li> 
                    <li ><Link to={`#page2`}>Second</Link></li> 
                    <li ><Link to={`#page3`}>Third</Link></li> 
                    <li ><Link to={`#page4`}>Fourth</Link></li> 
                    <li ><Link to={`#page5`}>Fifth</Link></li> 
                    <li ><Link to={`#page6`}>Sixth</Link></li> 
                    <li ><Link to={`#page7`}>Seventh</Link></li> 
                    <li ><Link to={`#page8`}>Eighth</Link></li> 
                    <li ><Link to={`#page9`}>Ninth</Link></li> 
                    <li ><Link to={`#page10`}>Tenth</Link></li> 
                    </ul>	
                </div>
  
            <div className='pages'>
                <div className="page" id="page0"><Coverpage/></div>
                <div className="page" id="page1">Page 1</div>
                <div className="page" id="page2">Page 2</div>
                <div className="page" id="page3">Page 3</div>
                <div className="page" id="page4">Page 4</div>
                <div className="page" id="page5">Page 5</div>
                <div className="page" id="page6">Page 6</div>
                <div className="page" id="page7">Page 7</div>
                <div className="page" id="page8">Page 8</div>
                <div className="page" id="page9">Page 9</div>
                <div className="page" id="page10">Page 10</div>
            </div>

            </div>
            </>
        )
    }
}