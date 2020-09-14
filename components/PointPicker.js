import { useSelector, useDispatch } from 'react-redux'

import PlayerCard from './PlayerCard'

import { makeChoice } from '../_actions'


const usePointPicker = (round) => {
    const players = useSelector(state => state.data.players);
    const { rounds, currentRound, flags } = useSelector(state => state.game);
    const dispatch = useDispatch();

    let roundDetails = rounds[round]

    const chooseOption = (chosen) => {
        let other = roundDetails.options.filter(option => option != chosen)[0];

        return dispatch(makeChoice({
            selection: chosen,
            guess: players[chosen].fppg > players[other].fppg}
        ))

    }


    return {
        chooseOption,
        roundDetails,
        currentRound,
        flags
    }
}


const PointPicker = (props) => {
    const { chooseOption, roundDetails, currentRound, flags } = usePointPicker(props.round);

    return (
        <>
            {roundDetails.options.map(option =>
                <PlayerCard
                    key={option}
                    player={option}
                    disabled={!flags.gameStarted || parseInt(props.round) !== parseInt(currentRound)}
                    selected={roundDetails.selection == option ? roundDetails.guess ? 'correct' : 'incorrect' : 'no'}
                    choose={chooseOption}
                />
            )}
        </>
    )
}



export default PointPicker