import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div style={{
                    position: 'fixed',
                    bottom: '0px', 
                    left: '0px',
                    backgroundColor:'darkslateblue', 
                    color:'white', 
                    width:'100%', 
                    height:'50px', 
                }}>
                    <p class="text-center">Maria Evangelica</p>
                </div>
            </div>
        )
    }
}

export default FooterComponent