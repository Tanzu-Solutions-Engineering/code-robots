import React, { Component } from 'react';
var rp = require('request-promise');

class SignOn extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(event) {
        this.setState({isLoggedIn: true,
                        userId: event.target.userId.value});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn;
        let display;

        if (isLoggedIn) {
            display = <AccountsSummary onClick={this.handleLogoutClick} userId={this.state.userId} />;
        } else {
            display = <form onSubmit={this.handleLoginClick}>
                        <div className="divTable">
                            <div className="divTableBody">
                                <div className="divTableRow">
                                    <div className="divTableCell">
                                        <input type="text" name="userId" defaultValue="User ID"/></div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell"><input type="text" defaultValue="Password"/></div>
                                </div>
                                <div className="divTableRow">
                                    <div className="divTableCell"><input type="submit" value="Sign On" /></div>
                                </div>
                            </div>
                        </div>
                    </form>;
        }

        return (
            <div>
                {display}
            </div>
        );
    }


}



function AccountsSummary(props) {

    var options = {
        uri: 'http://localhost:3001/api/account/123',
        json: true // Automatically parses the JSON string in the response
    };

    rp(options).then(function (res) {
        alert(res);
    }).catch(function (err) {
        alert(err);
    });


    return (
        <div>
        <h1>Accounts go here</h1>
            <h3>Welcome back {props.userId}</h3>
        <button onClick={props.onClick}>
            Logout
        </button>
        </div>
    );
}

function printObject(o) {
    var out = '';
    for (var p in o) {
        out += p + ': ' + o[p] + '\n';
    }
    alert(out);
}

export default SignOn;