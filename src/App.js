import React from 'react';
import Header from './components/Header'
import ScenarioCard from './components/ScenarioCard'
import './styles/app.css'

class App extends React.Component{
    state ={
        currentPoints: 0,
        activeComponent: '',
        scenarios: []
    }

    componentDidMount(){
    }

    handleClick(){

    }

    render(){
        return (
            <div className="App">
                <Header points={this.state.currentPoints}/>
                <button onClick={}>Start</button>
            </div>
        );
    }
}

export default App;
