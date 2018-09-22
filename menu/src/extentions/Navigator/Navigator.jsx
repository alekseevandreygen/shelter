import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { pageAbout, pageContacts, pagePortfolio, pageProcess, pageStart } from '../../actions/page.js';
import logo from '../../images/logo.png';
import { Li, Logo, Nav, Ul } from './styled.js';

class NavigatorBlock extends React.Component {
    constructor() {
        super();
    }

    checkingUrl = () => {
        let { dispatchPageType } = this.props;
        let href = window.location.pathname;

        switch (href) {
            case ("/"):
                dispatchPageType("start");
                break;
            case ("/portfolio"):
                dispatchPageType("portfolio");
                break;
            case ("/process"):
                dispatchPageType("process");
                break;
            case ("/about"):
                dispatchPageType("about");
                break;
            case ("/contacts"):
                dispatchPageType("contacts");
                break;
            default:
                break;
        }
    }

    render() {
        let { dispatchPageType } = this.props;

        return <div>
            <Nav>
                <Ul>
                    <Li onClick={this.checkingUrl}>
                        <Link to="/" activeClassName="active">
                            <Logo src={logo} />
                        </Link>
                    </Li>
                    <Li onClick={this.checkingUrl}>
                        <Link to="/portfolio" activeClassName="active">Portfolio</Link>
                    </Li>
                    <Li onClick={this.checkingUrl}>
                        <Link to="/process" activeClassName="active">Process</Link>
                    </Li>
                    <Li onClick={this.checkingUrl}>
                        <Link to="/about" activeClassName="active">About</Link>
                    </Li>
                    <Li onClick={this.checkingUrl}>
                        <Link to="/contacts" activeClassName="active">Contacts</Link>
                    </Li>
                </Ul> 
            </Nav>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchPageType: (page) => {
            switch (page) {
                case "start":
                    return dispatch(pageStart());
                case "portfolio":
                    return dispatch(pagePortfolio());
                case "process":
                    return dispatch(pageProcess());
                case "about":
                    return dispatch(pageAbout());
                case "contacts":
                    return dispatch(pageContacts());
                default:
                    return dispatch(pageStart());
            }
        }
    }
}

const Navigator = connect(mapStateToProps, mapDispatchToProps)(NavigatorBlock);

export default Navigator;