import React, {Component} from 'react'
import WinLoseCard from './WinLoseCard'

export default class ScenarioCard extends Component {
    state={
        front: true
    }

    handleImageClick = event =>{
        this.props.handleActiveCard( this.props.scenario )
        this.setState({
            front: false
        })
    }

    render(){
        return(
            <div className='scenarioCard'>
                {this.props.activeCard
                    ? <div>
                        <p>{this.props.scenario.result}</p>
                        <img src={this.props.scenario.resultImage} alt="result" />
                    </div>
                    : <img src={this.props.scenario.image} alt='picture' onClick={this.handleImageClick} />
                }
            </div>
        )
    }
}


