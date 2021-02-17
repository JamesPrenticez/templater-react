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
            toProductAdd: false,
            active: 'show'
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
        this.filterSelection("all")
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

    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
    filterSelection(catagory) {
        var x, i;
        x = document.getElementsByClassName('card');
        console.log(x)
        //https://www.google.com/search?q=how+to+traverse+htmlcollection&rlz=1C1GCEA_enNZ920NZ920&oq=how+to+traverse+a+html&aqs=chrome.1.69i57j0i22i30l4.8887j0j7&sourceid=chrome&ie=UTF-8
        console.log(x[0])
        if (catagory == 'all') catagory = '';
        for (i = 0; i < x.length; i++) {
            this.RemoveClass(x[i], 'show');
            if (x[i].className.indexOf(catagory) > -1) this.AddClass(x[i], 'show');
        }
    }

    AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += ' ' + arr2[i];}
        }
      }

    RemoveClass(element, name) {
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

    handelChange() {
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("productNavButton");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
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

                        <div id="myBtnContainer">
                            <button className="productNavButton active" onClick={this.filterSelection('all')} onChange={this.handelChange}>Show all</button>
                            <button className="productNavButton" onClick={this.filterSelection('preliminary')} onChange={this.handelChange}>Preliminary</button>
                            <button className="productNavButton" onClick={this.filterSelection('envelope')} onChange={this.handelChange}>Envelope</button>
                            <button className="productNavButton" onClick={this.filterSelection('interior')} onChange={this.handelChange}>Interior</button>
                            <button className="productNavButton" onClick={this.filterSelection('services')} onChange={this.handelChange}>Services</button>
                            <button className="productNavButton" onClick={this.filterSelection('siteworks')} onChange={this.handelChange}>Siteworks</button>
                        </div>

                        <div className='productsContainer'>
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