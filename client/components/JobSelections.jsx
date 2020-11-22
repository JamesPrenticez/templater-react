import React from 'react'

export default class JobSelections extends React.Component {
render(){
    const {job, dispatch} = this.props

        return(
            <>
            <div className="jobContainer">

						<label htmlFor="GFA">GFA</label>
						<input type="text" name="gfa" id="gfa" placeholder="150" onChange={this.handleChange}></input>

						<label htmlFor="bedrooms">Bedrooms</label>
						<div>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="0" onChange={this.handleChange}></input><p>0</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="1" onChange={this.handleChange}></input><p>1</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="2" onChange={this.handleChange}></input><p>2</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="3" onChange={this.handleChange}></input><p>3</p>
						<input type="radio" name="bedrooms" id="bedroomsRadio" value="4" onChange={this.handleChange}></input><p>4</p>
						</div>						

            <h1>Preliminary</h1>
                <h4>Building Consent</h4>
                    <p>Provisional Sum $4,500</p>
                    <p>Excludes development contributions or service connection fees</p>
                    <p>Excludes Resource Consent Fees</p>

                <h4>Engineering</h4>
                    <p>Includes inspection fees for Ribraft floor system</p>
                    <p>Excludes any structural design fees</p>
                    <p></p>

                <h4>Survey</h4>
                    <p>Includes an allowance to provide a section survey</p>
                    <p></p>
                    <p></p>

                <h4>Mains Cable and Temp Power</h4>
                    <p>Includes for the supply of temporary power for the duration of the build</p>
                    <p>Includes for a maximum of 20m of single phase mains cable</p>
                    <p></p>

                <h4></h4>
                    <p></p>
                    <p></p>
                    <p></p>

                <h4></h4>
                    <p></p>
                    <p></p>
                    <p></p>

                <h1>Envelope</h1>
                    <h4>Floor System</h4>
                        <p>Ribraft Concrete Floor</p>
                        <p></p>
                        <p></p>

                    <h4>Framing</h4>
                        <p>90 x 45 H1.2 Radiata Pine Frames</p>
                        <p>2.4m High Ceilings Throughout</p>
                        <p>Hip Roof</p>
                        <p>Gabels Roof</p><p>Number of Gables</p>
                        <p>Monopitch Roof</p>

                    <h4>Cladding</h4>
                        <p>Rockcote </p>
                        <p>Rockcote with Graphex</p>
                        <p>Linea Weatherboard</p>
                        <p>Brick</p>

                    <h4>Aluminium Joinery</h4>
                        <p>Altherm Residential Suite</p>
                        <p>Lattitude Entry Door</p>
                        <p>Plasma Entry Door</p>
                        <p>Lock Set Windsor 133S-BN </p>
                        <p>Double Glazed Windows</p>
                        <p>Double Glazed Windows with Low E Max</p>
                        <p>Grey Tint</p>
                        <p>Single Glazing to garage</p>
                        <p>Obscure Glass to bathroom, ensuite and WC</p>

                    <h4>Skylights, Roof Lights and Soler Tubes</h4>
                        <p>None</p>

                    <h4>Garage Door</h4>
                        <p>Futura insulated double</p>
                        <p></p>
                        <p></p>

                    <h4>Roof, Fascia, Gutter</h4>
                        <p>Corrugate</p>
                        <p>5 Rib</p>
                        <p>6 Rib</p>
                        <p>Colorsteel fascia and gutter system</p>

                    <h4>Soffits</h4>
                        <p>Hardiflex 4.5mm</p>
                        <p></p>
                        <p></p>

                <h1>Interior</h1>
                    <h4>Roof Access</h4>
                        <p>Pre-fabricated manhole</p>
                        <p>Attic Ladder</p>

                    <h4>Insulation</h4>
                        <p>R2.6 Pink Batts to the exterior walls</p>
                        <p>R3.6 Pink Batts to the ceilings</p>
                        <p>No insulation to garage</p>

                    <h4>Interior Linings</h4>
                        <p>Standard GIB plasterboard to walls</p>
                        <p>Aqualine GIB plasterboard to wet areas </p>
                        <p>Plywood Linings to Garage</p>
                        <p></p>

                    <h4>Skirting, Scotia and Architraves</h4>
                        <p>60 x 12 Bevel edge skirting and architraves</p>
                        <p>40 x 20 Pine Scotia to wardrobes and plywood lined garage</p>
                        <p>55mm GIB Cove</p>

                    <h4>Interior Doors</h4>
                        <p>MDF Doors</p>
                        <p>HAG Doors</p>
                        <p>Cavity Sliders</p>
                        <p>Windsor Futura Hardware</p>

                    <h4>Painting</h4>
                        <p></p>

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

                    <h4>Painting</h4>
                        <p></p>
                        <p></p>
                        <p></p>

                <h1>Services</h1>
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

                    <h4>Plumbing & Drainage</h4>
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

                        <h6>Ensuite</h6>
                            <p>Shower</p>           <p>1400 x 1000  Tiled Shower with glass screen and two glass shelves</p>
                            <p>Vanity</p>           <p>900mm Athena Norfolk Classic wall hung cabinet with composite top</p>
                            <p>Bath</p>             <p>Athena Liquid 1675mm</p>
                            <p>Shower Mixer</p>     <p>Elementi Ion</p>
                            <p>Shower Slide</p>     <p>Splash three function</p>
                            <p>Basin Mixer</p>      <p>Elementi Ion</p>
                            <p>Bath Mixer</p>       <p>Elementi Ion</p>
                            <p>Bath Spout</p>       <p>Elementi Ion wall mounted</p>

                        <h6>Kitchen</h6>
                            <p>Sink Mixer</p>       <p>Elementi Uno Gooseneck</p>

                        <h6>Laundry</h6>
                            <p>Tub</p>              <p>Aquatica Laundra Tubbie</p>

                <h1>Siteworks</h1>
                    <h4>Driveways & Patios</h4>
                        <p></p>

                    <h4>Landscaping</h4>
                    

                    <h4>Timber Decking</h4>
                        <p></p>





            </div>
            </>
        )
    }
}