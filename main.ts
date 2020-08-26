/**
 * Return json of game score.
 * 
 * @param {number}  player1     player 1 score.
 * @param {number}  player2     player 2 score.
 * @return {Object} json of each player score.
*/
export function updateGameScore(player1: number, player2: number) {
    const json = {
        "player1Points": player1,
        "player2Points": player2
    }
    return json
}

/**
 * Return game winner
 * 
 * @param {Object}  game    json of each player score
 * @return {String} winner of the game
*/
export function decideGameWinner(game: Object) {
    const player1Points = game['player1Points']
    const player2Points = game['player2Points']
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

/**
 * Return score
 * 
 * @param {Array<number>} score     Array of player 1 and player 2 score
 * @return {String} print score of players
*/
export function printScore(score: Array<number>) {
    const runningScore = ['love', 'fifteen', 'thirty', 'forty']
    const player1Points = score[0]
    const player2Points = score[1]
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