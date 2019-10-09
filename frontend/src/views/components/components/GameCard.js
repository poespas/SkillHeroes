import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class GameCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Games: {}
        }
    }

    render() {
        if (!this.props.Game.price) {
            return <div>Loading..</div>
        }

        return <Link to={"/game/" + this.props.Game.id}>
            <div class="card game-card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={this.props.Game.image} alt={this.props.Game.name} />
                        <div class="price">{'\u20AC' + this.props.Game.price.toFixed(2)}</div>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{this.props.Game.name}</p>
                            <p class="subtitle is-6">Type: {this.props.Game.type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    }
}

export default GameCard;