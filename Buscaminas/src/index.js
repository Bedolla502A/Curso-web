import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Tablero';
import './index.css';

class Game extends React.Component {

    state = {
        height: 9,
        width: 9,
        mines: 10,
    };

    handleGameStart = () => {
        let difficulty = document.querySelector("#level_select");
        if (difficulty.value === "Inicia") {
            this.setState({
                height: 9,
                width: 9,
                mines: 10,
            });
        }
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className="game">
                <div className="game-info">
                    <h4>sStart"start"</h4>
                    <span className="info">Level:
                        <select id="level_select">
                            <option value="beginner"> Inicia </option>
                        </select>
                    </span>
                    <button onClick={this.handleGameStart}>Start</button>
                </div>

                <Board height={height} width={width} mines={mines} />
                
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
