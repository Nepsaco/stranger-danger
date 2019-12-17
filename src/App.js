import React from 'react';
import Header from './components/Header'
import ScenarioCard from './components/ScenarioCard'
import './styles/app.css'
const BASE_URL = 'http://localhost:3000'


class App extends React.Component{
    state ={
        currentPoints: 0,
        activeComponent: 'Start',
        scenarios: []
    }

    componentDidMount(){
        Promise.all([fetch(`${BASE_URL}/good_choices`), fetch(`${BASE_URL}/bad_choices`)])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) => {
                this.setState({
                    scenarios: [res1, res2]
                })
            });
    }

    handleStartClick = (event) => {

        this.setState({
            activeComponent: 'ScenarioCard'
        })
    }

    render(){
        return (
            <div className="App">
                <Header points={this.state.currentPoints}/>
                {this.state.activeComponent === 'Start'
                    ? <button onClick={this.handleStartClick}>Start</button>
                    : null}
                {this.state.activeComponent === 'ScenarioCard' 
                    ?  <> 
                        <ScenarioCard />
                        <ScenarioCard />
                    </>
                    : null}
            </div>
        );
    }
}

export default App;
