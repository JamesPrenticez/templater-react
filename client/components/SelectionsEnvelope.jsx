import React from 'react'
import {connect} from 'react-redux'
import { setSelectionsEnvelope } from '../actions'
import { getSelectionsEnvelope } from '../api'
import { setProductsEnvelope } from '../actions'
import { getProductsEnvelope } from '../api'

class SelectionsEnvelope extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }

    componentDidMount() {
        getSelectionsEnvelope()
            .then(selections => {
                this.props.dispatch(setSelectionsEnvelope(selections))
            })
            .catch(err => {
                console.log(err)
            })
        // getProductsEnvelope()
        //     .then(products => {
        //         this.props.dispatch(setProductsEnvelope(products))
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    render() {
        const {selections} = this.props

        console.log(selections[0])



        // console.log(selections[0]?.description)
        return (
            <>
                    <h1 className="selectionsHeader">Envelope</h1>

                    <form>
                {/* ---------- Bulding Consent ----------*/}
                        <h3>Floor System</h3>
                        {/* <blockquote>{selections[0].description}</blockquote> */}

                        {/* <input type='radio' id='floorSytemA' name='floorSytemA' value='Tasman District Council'/>
                        <label for= 'floorSytemA'>{}</label><br/>

                        {selections[0].options.map(options => <li>{options}</li>)} */}

                        <br />
                </form>


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
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        selections: state.selections
    }
}

export default connect(mapStateToProps)(SelectionsEnvelope)
