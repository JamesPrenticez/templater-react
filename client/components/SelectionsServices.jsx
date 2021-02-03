import React from 'react'
import {connect} from 'react-redux'

class SelectionsServices extends React.Component {
    render() {
        return (
            <>
                    <h1 className="selectionsHeader">Envelope</h1>

                    <h4>Electrical</h4>
                        <p>PDL 300 Series points and switches</p>
                        <p>LED Downlights</p>
                        <p>Double Data Points</p>
                        <p>Primary TV Points</p>
                        <p>Secondary TV Points</p>
                        <p>Audio visual communications hub</p>
                        <p></p>
                        <p>7 Rail chrome towel ladders to bathroom and ensuite</p>
                        <p>Serene wall heaters to bathroom and ensuite</p>
                        <p>In-line extraction fans to bathroom, ensuite and laundry</p>
                        <p></p>
                        <p></p>
                        <p></p>

                    <h4>Heat Pump</h4>
                        <p></p>

                    <h4>Gas</h4>
                        <p></p>
                        <p></p>
                        <p></p>

                    <h4>Appliances</h4>
                        <p>Oven – F & P Pyrolytic Wall Oven OB60SC7CEPX1</p>
                        <p>Cooktop ¬– F & P Induction Cooktop CI604CTB1 </p>
                        <p>Rangehood ¬– F & P Designer Rangehood HC90DCXB3</p>
                        <p>Dishwasher – F & P Dishwasher DW60FC6X1</p>
                        <p>Waste Disposal – F & P Waste Disposal GD75IA1</p>
                        <p>Canopy rangehood to be vented to the exterior through the roof</p>

                    <h4>Plumbing</h4>
                        <p>180L - 250L Mains Pressure HWC</p>
                        <p>Standard - Fusiotherm Pipework</p>
                        <p>Exterior Hose Taps x3</p>

                    <h4>Plumbing Fittings and Fixtures</h4>
                            
                        <h6>Bathroom</h6>
                            <p>Shower</p>           <p>1000mm x 1000mm Athena Soul white round corner moulded wall shower unit</p>
                            <p>Vanity</p>           <p>900mm Athena Norfolk Classic wall hung cabinet with composite top</p>
                            <p>Bath</p>             <p>Athena Liquid 1675mm</p>
                            <p>Shower Mixer</p>     <p>Elementi Ion</p>
                            <p>Shower Slide</p>     <p>Splash three function</p>
                            <p>Basin Mixer</p>      <p>Elementi Ion</p>
                            <p>Bath Mixer</p>       <p>Elementi Ion</p>
                            <p>Bath Spout</p>       <p>Elementi Ion wall mounted</p>
                            <p>Toilet</p>           <p>Elementi Uno</p>
                            <p>Toilet Roll Holder</p><p>Alexander Tetris</p>

                        <h6>WC</h6>
                            <p>Vanity</p>           <p>500mm Athena Norfolk Classic wall hung cabinet with composite top</p>
                            <p>Basin Mixer</p>      <p>Elementi Ion</p>                            
                            <p>Toilet</p>           <p>Elementi Uno</p>
                            <p>Toilet Roll Holder</p><p>Alexander Tetris</p>

                        <h6>Ensuite</h6>
                            <p>Shower</p>           <p>1400 x 1000  Tiled Shower with glass screen and two glass shelves</p>
                            <p>Vanity</p>           <p>900mm Athena Norfolk Classic wall hung cabinet with composite top</p>
                            <p>Bath</p>             <p>Athena Liquid 1675mm</p>
                            <p>Shower Mixer</p>     <p>Elementi Ion</p>
                            <p>Shower Slide</p>     <p>Splash three function</p>
                            <p>Basin Mixer</p>      <p>Elementi Ion</p>
                            <p>Bath Mixer</p>       <p>Elementi Ion</p>
                            <p>Bath Spout</p>       <p>Elementi Ion wall mounted</p>
                            <p>Toilet</p>           <p>Elementi Uno</p>
                            <p>Toilet Roll Holder</p><p>Alexander Tetris</p>

                        <h6>Kitchen</h6>
                            <p>Sink Mixer</p>       <p>Elementi Uno Gooseneck</p>

                        <h6>Laundry</h6>
                            <p>Tub</p>              <p>Aquatica Laundra Tubbie</p>
                    
                    <h4>Drainage</h4>
                        <p>5K Prov Sum</p>
                        <p>Sump</p>

            </>
        )
    }
}

export default connect()(SelectionsServices)
