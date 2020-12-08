

export default function Teams() {

    const teams = makePieces()

    function pieceConstructor(piece: string, color: string, column: number, row: number) {

        return { piece: piece, color: color, column: column, row: row, firstmove: true }
    }

    function makePieces() {
        const team = []
        let piece
        let color = 'White'

        for (let y = 1; y <= 8; y++) {

            if (y > 3) color = 'Black'

            if (y === 8 || y === 1) {
                for (let x = 1; x <= 8; x++) {
                    switch (x) {
                        case 1:
                        case 8:
                            piece = 'Rook'
                            break
                        case 2:
                        case 7:
                            piece = 'Knight'
                            break
                        case 3:
                        case 6:
                            piece = 'Bishop'
                            break
                        case 4:
                            piece = 'Queen'
                            break
                        case 5:
                            piece = 'King'
                            break
                        default:
                            piece = ''
                            break
                    }

                    const pieceObject = pieceConstructor(piece, color, x, y)

                    team.push(pieceObject)
                }
            } else if (y === 7 || y === 2) {
                for (let x = 1; x <= 8; x++) {
                    const pieceObject = pieceConstructor('Pawn', color, x, y)
                    team.push(pieceObject)
                }
            }
        }
        return team
    }

    return (
        teams
    )
}
