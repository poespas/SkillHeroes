import React, {Component} from 'react';

class WelcomeSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    render() {
        return <section class="welcome-section hero is-medium is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <h2 class="subtitle">
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </h2>
          </div>
        </div>
      </section>
    }
}

export default WelcomeSection;