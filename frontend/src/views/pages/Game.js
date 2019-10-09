import React, {Component} from 'react';
import axios from 'axios';
import Config from '../../config';

import MainLayout from '../layouts/main';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Games: {},
            Game: {},
            NotFound: false
        }
    }

    async componentDidMount() {
        let params = this.props.match ? this.props.match.params : {};

        const storageData = JSON.parse(sessionStorage.getItem("Games")); //get cached data stored in sessionStorage, so we can refresh it right after
        this.setState({Games: storageData});

        this.setState({Game: storageData[params.gameId]});

        if (!storageData[params.gameId]) {
            this.setState({NotFound: true});
        }

        let resp = await axios.get(Config.Api + '/game/' + params.gameId)
            .catch(function (error) {
                // handle error
                alert(error);
            })

        let data = resp.data;
        
        let newdata = this.state.Games;
        newdata[params.gameId] = data;

        sessionStorage.setItem("Games", JSON.stringify(newdata));
        this.setState({Games: newdata});

        
    }

    render() {
        if (this.state.NotFound) {
            return <MainLayout>
                <h1 class="title is-1 container">404 Not Found</h1>
            </MainLayout>;
        }

        return <MainLayout>
            <div class="container game-page">
                <div class="columns">
                    <div class="column is-one-third">
                        <div class="box" style={{backgroundImage: "url('" + this.state.Game.image + "')", backgroundSize: "cover", backgroundPosition: "center center", height: "400px"}}>
                        
                        </div>
                    </div>
                    <div class="column">
                        <p class="title is-4">{this.state.Game.name}</p>
                        <p>Prijs: {this.state.Game.price}</p>
                        <p>Aantal spelers: {this.state.Game.minPlayers} tot {this.state.Game.maxPlayers}</p>
                        <p>Type: {this.state.Game.type}</p>
                        <p>Leeftijd: {this.state.Game.minAge} tot {this.state.Game.maxAge}</p>
                        <p>Spelduur: {this.state.Game.duration} Minuten</p>
                        <div class="price-special">
                            IN DE WINKEL: 
                            <span class="price">
                                {this.state.Game.price}
                            </span>
                        </div>
                    </div>

                    
                </div>
            </div>

           
        </MainLayout>
    }
}

export default Game;