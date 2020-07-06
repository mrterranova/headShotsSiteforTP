import React, { Component } from 'react'
import LineItem0 from './LineItem0'
import LineItem1 from './LineItem1'
import LineItem2 from './LineItem2'
import LineItem3 from './LineItem3'
import LineItem4 from './LineItem4_1'
import LineItem8 from './LineItem8'
import LineItem9 from './LineItem9'
import LineItem10 from './LineItem10'

class LineItems extends Component {
    render () {
    return (
        <div className="lineItems">
            <LineItem0/>
            <LineItem1/>
            <LineItem2/>
            <LineItem3/>
            <LineItem4/>
            <LineItem8/>
            <LineItem9/>
            <LineItem10/>
        </div>
        )
    }
}

export default LineItems