import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";


class MainLayout extends Component {
    


    componentDidMount() {
        if (!sessionStorage.getItem("Games"))
            sessionStorage.setItem("Games", JSON.stringify({})) //if it doesnt contain any info, put default data in it
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar is-link is-link-hr" role="navigation" aria-label="main navigation">
                    <div className="container is-fluid">
                        <div className="navbar-brand">
							<Link to={"/"} className="navbar-item">
								<img src="https://via.placeholder.com/28" width="28" height="28" />
                                <b>Spellenboot</b>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="main-content">
                    {this.props.children}
                </div>
                <footer class="footer">
                    <div class="content has-text-centered">
                        <p>
                            <strong>Gemaakt Door</strong> <a href="https://poespas.me">Jonathan Visser</a>. Als deelname voor de <b>SkillHeroes</b>.
                        </p>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default MainLayout;