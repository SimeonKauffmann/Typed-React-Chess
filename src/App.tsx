import React from 'react';
import Teams from './Teams'

function App() {
  const board = {
    rows: [1, 2, 3, 4, 5, 6, 7, 8],
    columns: [1, 2, 3, 4, 5, 6, 7, 8]
  }
  const teams = Teams() //useState
  const boardSquares = setBoard()
  interface Piece {
    piece: string,
    color: string,
    column: number,
    row: number,
    firstmove: boolean
  }


  function setBoard() {
    let x = 0
    const boardClasses = []
    for (let i = 0; i < board.columns.length; i++) {
      for (let j = 0; j < board.rows.length; j++) {
        const squareClass = { id: (board.rows[j] / 10) + board.columns[i], background: x % 2 ? 'grey' : 'white' }
        boardClasses.push(squareClass)
        x++
      }
      x++
    }
    return boardClasses
  }

  function prettyPieces(team: Piece) {

    let pieceIcon

    if (team.color === 'White') {
      switch (team.piece) {
        case 'King':
          pieceIcon = '♔'
          break
        case 'Queen':
          pieceIcon = '♕'
          break
        case 'Knight':
          pieceIcon = '♘'
          break
        case 'Rook':
          pieceIcon = '♖'
          break
        case 'Bishop':
          pieceIcon = '♗'
          break
        case 'Pawn':
          pieceIcon = '♙'
          break
        default:
          break
      }
    } else {
      switch (team.piece) {
        case 'King':
          pieceIcon = '♚'
          break
        case 'Queen':
          pieceIcon = '♛'
          break
        case 'Knight':
          pieceIcon = '♞'
          break
        case 'Rook':
          pieceIcon = '♜'
          break
        case 'Bishop':
          pieceIcon = '♝'
          break
        case 'Pawn':
          pieceIcon = '♟'
          break
        default:
          break
      }
    }
    return pieceIcon
  }

  function findPiece(key: number) {
    const columnNumber = Math.floor(key)
    const piece = teams.find(piece => (piece.column === Math.round((key - columnNumber) * 10) && piece.row === columnNumber))
    if (!piece) return ''
    return prettyPieces(piece)
  }


  return (
    <div id='frame'>
      {boardSquares.map(square => {
        return (
          <div className='square' key={square.id} style={{ backgroundColor: square.background }} >
            {findPiece(square.id)}
          </div>
        )
      })
      }
    </div >
  );
}

export default App;
