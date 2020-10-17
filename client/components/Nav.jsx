import React from 'react'

export default class JobListItem extends React.Component {
render(){
        return(
            <>
            <div className='nav'>
	    	<h4 className="navTitle">Menu</h4>
                <ul id="menu">
                <li data-menuanchor="0thPage" class="active"><a href="#0thPage">Zero</a></li>
                <li data-menuanchor="1stPage"><a href="#1stPage">First</a></li>
                <li data-menuanchor="2ndPage"><a href="#2ndPage">Second</a></li> 
                <li data-menuanchor="3rdPage"><a href="#3rdPage">Third</a></li> 
                <li data-menuanchor="4thPage"><a href="#4thPage">Fourth</a></li> 
                <li data-menuanchor="5thPage"><a href="#5thPage">Fifth</a></li>
                <li data-menuanchor="6thPage"><a href="#6thPage">Sixth</a></li> 
                <li data-menuanchor="7thPage"><a href="#7thPage">Seventh</a></li> 
                <li data-menuanchor="8thPage"><a href="#8thPage">Eigth</a></li> 
                <li data-menuanchor="9thPage"><a href="#9thPage">Ninth</a></li> 
                <li data-menuanchor="10thPage"><a href="#10thPage">Tenth</a></li> 
                </ul>	
        	</div>
            </>
        )
    }
}