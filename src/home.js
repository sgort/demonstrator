import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HOME</h2>
                <p>
                    <img src={require('./images/discipl-api-strategy.jpg')} alt="" />
                </p>
            </div>
        );
    }
}

export default Home;