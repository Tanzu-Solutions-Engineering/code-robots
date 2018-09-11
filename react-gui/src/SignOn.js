import React, {Component} from 'react';
import CurrencyFormat from 'react-currency-format';

var request = require('request');

class SignOn extends Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleArchitectureClick = this.handleArchitectureClick.bind(this);
        this.handleWebGatewayGet = this.handleWebGatewayGet.bind(this);
        this.state = {
            isLoggedIn: false,
            isArchitectureSelected: false,
            checking: new Object(),
            investments: new Object(),
            linesofcredit: new Object()
        };
    }

    handleWebGatewayGet(error, response, body) {
        this.setState({checking: body.checking});
        this.setState({investments: body.investments});
        this.setState({linesofcredit: body.lines_of_credit});
    }

    handleLoginSubmit(event) {
        this.setState({
            isLoggedIn: true,
            userId: event.target.userId.value
        });
        var options = {
            uri: 'http://localhost:3001/api/account/' + event.target.userId.value,
            json: true // Automatically parses the JSON string in the response
        };

        request.get(options, this.handleWebGatewayGet);
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        this.setState({isArchitectureSelected: false});
    }

    handleArchitectureClick() {
        this.setState({isArchitectureSelected: true});
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn;
        const isArchitectureSelected = this.state.isArchitectureSelected;

        let display;

        if (isLoggedIn) {
            display = <AccountsSummary onLogoutClick={this.handleLogoutClick}
                                       userId={this.state.userId}
                                       checking={this.state.checking}
                                       investments={this.state.investments}
                                       linesofcredit={this.state.linesofcredit}/>;
        }

        else if (isArchitectureSelected) {
            display = <ArchitectureImage onLogoutClick={this.handleLogoutClick} />;
        }

        else {
            display = <LoginForm onSubmit={this.handleLoginSubmit}
                                 onArchitectureClick={this.handleArchitectureClick}/>;
        }

        return (
            <div>
                {display}
            </div>
        );
    }

}

function AccountsSummary(props) {

    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h3 className="display-5">Account Summary</h3>
                <p className="lead">Quickly see all of your account balances in one place</p>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{props.checking.name}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                <CurrencyFormat value={props.checking.balance} displayType={'text'}
                                                thousandSeparator={true} prefix={'$'}/>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{props.checking.description}</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary"
                                    onClick={props.onLogoutClick}>Details
                            </button>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{props.investments.name}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                <CurrencyFormat value={props.investments.balance} displayType={'text'}
                                                thousandSeparator={true} prefix={'$'}/>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{props.investments.description}</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary"
                                    onClick={props.onLogoutClick}>Details
                            </button>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{props.linesofcredit.name}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                <CurrencyFormat value={props.linesofcredit.balance} displayType={'text'}
                                                thousandSeparator={true} prefix={'$'}/>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{props.linesofcredit.description}</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-primary"
                                    onClick={props.onLogoutClick}>Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}


function LoginForm(props) {

    return (
        <div class="text-center">
            <form onSubmit={props.onSubmit} class="form-signin">
                <input type="text" name="userId" className="form-control" placeholder="User ID" required="true"/>
                <input type="password" className="form-control" placeholder="Password" />
                <br/>
                <input type="submit" value="Sign On" className="btn btn-lg btn-block btn-outline-primary"/>
                <input type="button" value="Architecture" className="btn btn-lg btn-block btn-outline-primary"
                       onClick={props.onArchitectureClick}/>
            </form>
        </div>
    );
}

function ArchitectureImage(props) {

    return (
        <div class="pretty-pic">
            <h1>PRETTY PICTURE</h1>
            <input
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
                value="Back"
                onClick={props.onLogoutClick}/>

        </div>);
}

export default SignOn;