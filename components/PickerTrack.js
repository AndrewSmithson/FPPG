import { useSelector, useDispatch } from 'react-redux'

import PointPicker from './PointPicker'

import { startGame, resetGame, endGame } from '../_actions'


const usePickerTrack = () => {
    const players = useSelector(state => state.data.players);
    const { rounds, flags } = useSelector(state => state.game);
    const dispatch = useDispatch();


    const start = () => dispatch(startGame())
    const end = () => dispatch(endGame())
    const reset = () => dispatch(resetGame(players))

    // let options = rounds[round].options

    // const chooseOption = (chosen) => {
    //     let other = options.filter(option => option != chosen)[0];

    //     return dispatch(makeChoice(players[chosen].fppg > players[other].fppg))

    // }


    return {
        rounds,
        flags,
        start,
        end,
        reset
    }
}


const PickerTrack = (props) => {
    const { rounds, flags, start, end, reset } = usePickerTrack();



    return (
        <>
            {!flags.gameStarted && <button onClick={start}>Start Game</button>}
            {Object.keys(rounds).map(round => <PointPicker key={round} round={round} />)}
            {flags.gameStarted && flags.gameComplete && <button onClick={reset}>Restart Game</button>}
        </>
    )
}



export default PickerTrack