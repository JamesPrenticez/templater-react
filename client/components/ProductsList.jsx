import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useParams, Redirect } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa'

import { setProducts } from '../actions'
import { getProducts } from '../api'

import ProductListItem from './ProductListItem'

class ProductsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showControls : false,
            toProductAdd: false
        }
        this.redirectToJobAdd = this.redirectToJobAdd.bind(this)
        this.showControls = this.showControls.bind(this)
        this.hideControls = this.hideControls.bind(this)
    }

    componentDidMount() {
        getProducts()
            .then(products => {
                this.props.dispatch(setProducts(products))
            })
            .catch(err => {
                console.log(err)
            })
    }

    showControls = () => {
        if (this.state.editing) return
        this.setState({showControls: true})
    }

    hideControls = () => {
        this.setState({showControls: false})
    }
// fix this
    redirectToJobAdd = () => {
        this.setState(() => ({
            toProductAdd: true
        }))
    }

    search() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("jobsTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1]; //Change index to select column
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

    render() {
        const {showControls} = this.state
        const addStyle = { color: 'green', height: '35px', width: '35px', cursor: 'pointer', float: 'right'}

        if (this.state.toJobAdd === true) {
            return <Redirect to={'/upload/'} /> //fix this
        }

        return (
            <>
                <div className='jobContainer'>
                    <fieldset>
                        <legend><h1>Products List</h1></legend>

                        <div style={{display: 'block', height: '35px', width: '100%', textAlign: 'right'}}>
                            {showControls ? 'Add new job' : ''}
                        </div>

                        <div style={{display: 'block', height: '25px', width: '100%'}}>
                            <input type="text" id="myInput" placeholder="Search by job name..." onChange={this.search} autoComplete='off'/>
                            <FaPlusCircle style={addStyle}
                                          onClick={this.redirectToJobAdd}
                                          role='button'
                                          onMouseEnter={this.showControls}
                                          onMouseLeave={this.hideControls}
                                          />
                        </div>

                        <div className='productsList'>
                            {this.props.products.map(product => <div className='card' key={product.id}><ProductListItem product={product} /></div>)}
                        </div>

                    </fieldset>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsList)