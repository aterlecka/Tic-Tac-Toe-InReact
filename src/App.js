import React from 'react';
import logo from './logo.svg';
import './App.css';


function Square(props) {
    return (
        <button id="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    };

    handleClick(positionInSquare) {
        const squares = this.state.squares.slice();
        if (calculateWinner((squares) || squares[positionInSquare])) {
            return;
        }
        squares[positionInSquare] = this.state.xIsNext ? '❌' : '⭕';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(positionInSquare) {
        return (
            <Square
                value={this.state.squares[positionInSquare]}
                onClick={() => this.handleClick(positionInSquare)}
            />
        );
    }
    render() {
        let winner = calculateWinner(this.state.squares);
        let title = "TIC- TAC- TOE"
        let onlyAsk = "Who is next?";
        let status1 = "The next is:  " + (this.state.xIsNext ? '❌' : '⭕');
        let status = '';

        if (winner) {
            status = 'WINNER IS ' + winner + "GRATULATION !!!";
        }
        return (
            <div>
                <div>
                    <div id="title">{title}</div>
                    <div id='onlyAsk'>{onlyAsk}</div>
                    <div id='status1'>{status1}</div>
                    <div id="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div id="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div id="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                    <div id="status">{status}</div>
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return (
            <div id={"allDivs"}>
                <div>
                    <input type="button" id={"buttonName"} value={"START GAME"} onClick={changeDisplayInBoardAndButton}/>
                </div>
                <div id="myDIV">
                    <div id="game">
                        <div id="gameBoard">
                            <Board/>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Game;

function changeDisplayInBoardAndButton() {
    let x = document.getElementById("myDIV");
    let y = document.getElementById("buttonName");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
