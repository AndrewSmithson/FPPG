// import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeChoice } from '../_actions'


const usePointPicker = () => {
    const players = useSelector(state => state.data.players);
    const { rounds, currentRound, } = useSelector(state => state.game);
    const dispatch = useDispatch();

    let options = rounds[currentRound].options

    const chooseOption = (chosen) => {
        let other = options.filter(option => option != chosen)[0];

        return dispatch(makeChoice(players[chosen].fppg > players[other].fppg))

    }


    return {
        chooseOption,
        options,
    }
}


const PointPicker = () => {
    const { chooseOption, options } = usePointPicker();

    return (
        <div>
            {options.map(option => <button onClick={() => {chooseOption(option)}}>{option}</button>)}
        </div>
    )
}



export default PointPicker