import React from 'react'
import {connect} from 'react-redux'


class SelectionsInterior extends React.Component {
    render() {
        return (
            <>
                    <h1 className="selectionsHeader">Interior</h1>

                    <h4>Interior Linings</h4>
                        <p>Standard GIB plasterboard to walls</p>
                        <p>Aqualine GIB plasterboard to wet areas </p>
                        <p>Plywood Linings to Garage</p>
                        <p></p>

                    <h4>Skirting, Scotia and Architraves</h4>
                        <p>60 x 12 Bevel edge skirting and architraves</p>
                        <p>40 x 20 Pine Scotia to wardrobes and plywood lined garage</p>
                        <p>55mm GIB Cove</p>

                    <h4>Ceiling Access</h4>
                        <p>Pre-fabricated manhole</p>
                        <p>Attic Ladder</p>

                    <h4>Insulation</h4>
                        <p>R2.6 Pink Batts to the exterior walls</p>
                        <p>R3.6 Pink Batts to the ceilings</p>
                        <p>No insulation to garage</p>

                    <h4>Painting</h4>
                        <p></p>

                    <h4>Interior Doors</h4>
                        <p>MDF Doors</p>
                        <p>HAG Doors</p>
                        <p>Cavity Sliders</p>
                        <p>Windsor Futura Hardware</p>


                    <h4>Wardrobes</h4>
                        <p>Melamine shelves, full and double hang walk in wardrobe</p>
                        <p>Melamine single shelf & pole to wardrobes</p>
                        <p>Melamine bank of shelves to cupboards</p>
                        <p>Wire four shelves HWC</p>

                    <h4>Kitchen</h4>
                        <p>Kitchen Bench - Prime Cost Sum of $15,000.00</p>
                        <p>Pantry/Scullery - Prime Cost Sum of $3,000.00 - none</p>
                        <p>Designed by Trends Kitchens</p>
                        <p></p>
                        <p></p>
                        <p></p>

                    <h4>Other joinery</h4>
                        <p>Laundry Joinery - none</p>
                        <p>Shelving to Garage - none</p>
                        <p>Window seating - none</p>
                        <p>Desks and Selves to Living - none</p>
                    
                    <h4>Carpet</h4>
                        <p>Carpet - Provisional Sum $6,000.00</p>   
                        <p>Supply and Install by Hubbers - quote send by ____ on the _____</p>

                    <h4>Vinyl</h4>
                        <p>Vinyl - Provisional Sum $3,000.00</p>   
                        <p>Supply and Install by Hubbers - quote send by ____ on the _____</p>  

                    <h4>Tiles</h4>
                        <p>Tiles - Provisional Cost Sum $6,000.00</p>   
                        <p>Supply and Install by Hubbers - quote send by ____ on the _____</p>
                        <p>Includes a tiles splash, apron and cradle to the bath</p>  
                        <p>Includes flat laid tiling to the following areas - Ensuite, Bathroom, Kitchen, Entry</p>

            </>
        )
    }
}

export default connect()(SelectionsInterior)
