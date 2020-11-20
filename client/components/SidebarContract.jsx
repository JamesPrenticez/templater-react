import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


export default class ImageViewer extends React.Component {
//Filter Selection    
filterSelection = (c) => {
    var x, i;
    x = document.getElementsByClassName("row");
console.log(x)
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
    this.w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
    }
}

// Show filtered elements
w3AddClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

// Hide elements that are not selected
w3RemoveClass = (element, name) => {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}
render(){
    return (
        <>
            {/* <div className="sidebar">
                <button className="btn" onClick={() => this.filterSelection('all')}> Show all</button>
                <button className="btn" onClick={() => this.filterSelection('alexandra')}> Alexandra</button>

                <button className="btn" onClick={() => { this.filterSelection('andrew'); this.namePlug("1");}}>Andrew x2</button>

                <button className="btn" onClick={() => this.filterSelection('andrew')}>Andrew</button>
                <button className="btn" onClick={() => this.filterSelection('anne')}> Anne</button>
                <button className="btn" onClick={() => this.filterSelection('catherine')}> Cathrine</button>
                <button className="btn" onClick={() => this.filterSelection('charles')}> Anne</button>
                <button className="btn" onClick={() => this.filterSelection('charlotte')}> Charlotte</button>
                <button className="btn" onClick={() => this.filterSelection('edward2')}> Edward2</button>
                <button className="btn" onClick={() => this.filterSelection('edward3')}> Edward3</button>
                <button className="btn" onClick={() => this.filterSelection('edward4')}> Edward4</button>
                <button className="btn" onClick={() => this.filterSelection('ernest')}> Ernest</button>
                <button className="btn" onClick={() => this.filterSelection('george')}> George</button>
                <button className="btn" onClick={() => this.filterSelection('james')}> James</button>
                <button className="btn" onClick={() => this.filterSelection('louis')}> Louis</button>
                <button className="btn" onClick={() => this.filterSelection('mary')}> Mary</button>
                <button className="btn" onClick={() => this.filterSelection('victoria')}> Victoria</button>
                <button className="btn" onClick={() => this.filterSelection('william')}> William</button>
            </div> */}

                <div className='sideNav'>
                    <ul>
                        <h4 className="sideNavTitle">Sections</h4>
                        <li ><Link to={`#page0`} className="active">Zero</Link></li> 
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
        </>
    )
}
}
