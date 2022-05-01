import React, { Component } from 'react'

class headerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-secondary">
                        <a class="navbar-brand" style={{marginLeft:"50%", marginRight:"50%"}}>CRUD</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default headerComponent