import React, {Component} from 'react';

import GameCard from './components/GameCard';
import axios from 'axios';

import Config from '../../config';

class GameIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Games: {}
        }
    }

    async componentDidMount() {
        const storageData = JSON.parse(sessionStorage.getItem("Games")); //get cached data stored in sessionStorage, so we can refresh it right after
        this.setState({Games: storageData});
        let resp = await axios.get(Config.Api + '/games')
            .catch(function (error) {
                // handle error
                alert(error);
            })
            .finally(function () {
                // always executed
            });

        let data = resp.data;
        let newdata = {};

        //convert array to object
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            
            newdata[item.id] = item;
        }

        sessionStorage.setItem("Games", JSON.stringify(newdata));

        this.setState({Games: newdata});
    }
    
    render() {

        return <div class="container">
                <div class="has-text-centered is-size-3">Ons spellenaanbod:</div>
                <div class="colomns">
                    { 
                    Object.values(this.state.Games || {}).length == 0 ? <div>Loading</div> :
                        Object.values(this.state.Games).map(function(Game) {
                            return (<div class="column card-colomn is-one-third">
                                <GameCard Game={Game} />
                            </div>);
                        })
                    }
                </div>
            </div>
    }
}

export default GameIndex;