import React, { Component } from 'react'
import LineItem0 from './LineItem0'
import LineItem1 from './LineItem1'
import LineItem2 from './LineItem2'
import LineItem3 from './LineItem3'
import LineItem4 from './LineItem4'
import LineItem5 from './LineItem5'
import LineItem6 from './LineItem6'
import LineItem7 from './LineItem7'


class LineItems extends Component {
    render () {
    return (
        <div className="lineItems">
            <LineItem0/>
            <LineItem1/>
            <LineItem2/>
            <LineItem3/>
            <LineItem4/>
            <LineItem5/>
            <LineItem6/>
            <LineItem7/>
        </div>
        )
    }
}

export default LineItems