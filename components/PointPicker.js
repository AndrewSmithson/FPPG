// import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeChoice } from '../_actions'


const usePointPicker = () => {
    const players = useSelector(state => state.data.players)
    const game = useSelector(state => state.game)

    return { players, game }
}


const PointPicker = () => {
    const { players, game } = usePointPicker();

    console.log(game)

    return (
        <div>
            <button onClick={() => {}}>1</button>
            <button onClick={() => {}}>2</button>
        </div>
    )
}



export default PointPicker