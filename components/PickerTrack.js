import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import PointPicker from './PointPicker'
import { Button } from './_styled/Button'

import { startGame, resetGame, } from '../_actions'

const Container = styled.div`
    position: relative;
    width: 1000%;
    max-width: 600px;
    margin: 0 auto;
    background-color: #1f375b;
    height: 100vh;
    display: grid;
    grid-template-areas: 
        "explanation"
        "track";
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
`

const Explanation = styled.div`
    grid-area: explanation;
    text-align: center;
    color: #FFF;
    padding: 1rem;
`

const Track = styled.div`
    grid-area: track;
    background-color: red ;
    position: relative;
`

const StartOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;

const StartButton = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translateX(-50%) translateY(-50%);

    &:hover {
        transform: translateX(-50%) translateY(-50%) scale(1.1);
    }
    
`;


const usePickerTrack = () => {
    const players = useSelector(state => state.data.players);
    const { rounds, flags } = useSelector(state => state.game);
    const dispatch = useDispatch();


    const start = () => dispatch(startGame())
    const reset = () => dispatch(resetGame(players))

    return {
        rounds,
        flags,
        start,
        reset
    }
}


const PickerTrack = (props) => {
    const { rounds, flags, start, reset } = usePickerTrack();



    return (
        <Container>
            <Explanation>
                <h1>Guess the Points</h1>
                <p>You will be shown details about two players, your task is to decide which of the players has then higher FanDuel Points Per Game score.</p>
            </Explanation>
            <Track>
                {!flags.gameStarted && 
                    <StartOverlay>
                        <StartButton onClick={start}>Start Game</StartButton>
                    </StartOverlay>
                }

                {Object.keys(rounds).map(round => <PointPicker key={round} round={round} />)}
                {flags.gameStarted && flags.gameComplete && <button onClick={reset}>Restart Game</button>}
            </Track>
        </Container>
    )
}



export default PickerTrack