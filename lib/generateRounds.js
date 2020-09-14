
import shuffleArray from './shuffleArray'

export const generateRounds = (playerIds, totalRounds) => {
    let rounds = {};
    
    playerIds = shuffleArray(playerIds)

    for(let i = 0; i < totalRounds; i++) {
        rounds[i] = {
            option1: playerIds.shift(),
            option2: playerIds.shift(),
            guess: false,
        }
    }

    return rounds
}