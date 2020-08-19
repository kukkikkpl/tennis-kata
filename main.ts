export function updateGameScore(player1: number, player2: number) {
    var json = {
        "player1Points": player1,
        "player2Points": player2
    }
    return json
}

export function decideGameWinner(game: Object) {
    var player1Points = game['player1Points']
    var player2Points = game['player2Points']
    if (player1Points >= 4 || player2Points >= 4) {
        if (player1Points - player2Points >= 2) {
            return 'Player 1'
        } else if (player2Points - player1Points >= 2) {
            return 'Player 2'
        } else {
            return 'No winner, keep playing!'
        }
    } else {
        return 'No winner, keep playing!'
    }
}

export function printScore(score: Array<number>) {
    var runningScore = ['love', 'fifteen', 'thirty', 'forty']
    var player1Points = score[0]
    var player2Points = score[1]
    if (player1Points === player2Points) {
        if (player1Points === 3 && player2Points === 3)
            return 'deuce'
        else
            return runningScore[player1Points] + ' - ' + runningScore[player2Points]
    } else if (player1Points > player2Points) {
        return 'advantage player 1'
    } else
        return 'advantage player 2'

}