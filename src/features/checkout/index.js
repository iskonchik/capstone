import React from 'react'
import { connect } from 'react-redux'

 function Checkout(props) {
    return <div></div>
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(state){
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CHeckout)