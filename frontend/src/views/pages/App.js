import React, {Component} from 'react';
import MainLayout from '../layouts/main';

import WelcomeSection from '../components/static/Welcome';
import GameIndex from '../components/GameIndex';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        
    }

    render() {
        return <MainLayout>
                    <WelcomeSection/>
                    <GameIndex />
                </MainLayout>
    }
}

export default App;