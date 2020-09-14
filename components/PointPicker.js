import { useSelector, useDispatch } from 'react-redux'

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
    // console.log(!flags.gameStarted )
    // console.log(parseInt(props.round) !== parseInt(currentRound))
    // console.log(!flags.gameStarted && parseInt(props.round) !== parseInt(currentRound))
    return (
        <>
            {roundDetails.options.map(option =>
                <button
                    key={option}
                    disabled={!flags.gameStarted || parseInt(props.round) !== parseInt(currentRound)}
                    style={{
                        // backgroundColor: roundDetails.selection ? roundDetails.selection == option && roundDetails.guess ? 'green' : 'red' : ''
                        backgroundColor: roundDetails.selection == option ? roundDetails.guess ? 'green' : 'red' : ''
                    }}
                    onClick={() => {chooseOption(option)}}
                >
                    {option}
                </button>
            )}
        </>
    )
}



export default PointPicker