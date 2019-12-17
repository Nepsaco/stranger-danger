import React from 'react';
import Header from './components/Header'
import ScenarioCard from './components/ScenarioCard'
import './styles/app.css'
import WinLoseCard from './components/WinLoseCard';
const BASE_URL = 'http://localhost:3000'


class App extends React.Component{
    state ={
        currentPoints: 0,
        activeComponent: 'Start',
        scenarios: [],
        good: null,
        bad: null,
        activeCard: null
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

    getGoodScenario = array => {
        const randomIndex =  Math.floor(Math.random() * array.length)
        this.setState({
            good: array[randomIndex]
        })
    }

    getBadScenario = array => {
        const randomIndex =  Math.floor(Math.random() * array.length)
        this.setState({
            bad: array[randomIndex]
        })
    }

    handleStartClick = event => {
        this.getGoodScenario(this.state.scenarios[0])
        this.getBadScenario(this.state.scenarios[1])

        this.setState({
            activeComponent: 'ScenarioCard'
        })
    }

    handleActiveCard = scenarioCard => {
        this.setState({
            activeCard: scenarioCard,
            currentPoints: scenarioCard.points += this.state.currentPoints
        })

    }
    
    resetActiveCard = event => {
        this.getGoodScenario(this.state.scenarios[0])
        this.getBadScenario(this.state.scenarios[1])
        this.setState({
            activeCard: null
        })
    }

    render(){
        return (
            <div className="App">
                <Header points={this.state.currentPoints}/>
                {this.state.activeComponent === 'Start'
                    ? <button onClick={this.handleStartClick}>Start</button>
                    : null}
                {this.state.activeComponent === 'ScenarioCard' && !this.state.activeCard && this.state.currentPoints < 10
                    ?  <div className="scenario-card-container"> 
                        <ScenarioCard handleActiveCard={this.handleActiveCard} scenario={this.state.good} />
                        <ScenarioCard handleActiveCard={this.handleActiveCard} scenario={this.state.bad}/>
                    </div>
                    : null 
                }
                {this.state.activeCard && this.state.currentPoints < 10
                    ? <> <ScenarioCard activeCard={true} scenario={this.state.activeCard}/> 
                        <button onClick={this.resetActiveCard} >Continue Game</button>
                    </>
                    : null
                } 
                {this.state.currentPoints >= 10
                    ? <WinLoseCard currentPoints={this.state.currentPoints}/>
                    : null
                }
            </div>
        );
    }
}

export default App;
