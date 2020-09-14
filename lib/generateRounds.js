
import shuffleArray from './shuffleArray'

export const generateRounds = (playerIds, totalRounds) => {
    let rounds = {};
    
    playerIds = shuffleArray(playerIds)

    for(let i = 0; i < totalRounds; i++) {
        rounds[i] = {
            options: [ playerIds.shift(), playerIds.shift() ],
            selection: false,
            guess: false,
        }
    }

    return rounds
}