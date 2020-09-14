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
    box-shadow: 0 4px 6px rgba(0, 0, 0, .4);
`

const Explanation = styled.div`
    grid-area: explanation;
    text-align: center;
    color: #FFF;
    padding: 1rem;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, .4); */
`

const Track = styled.div`
    grid-area: track;
    background-color: #FFF ;
    position: relative;
    overflow: hidden;
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

const Pairs = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    transform: ${({maxRounds, currentRound}) => {
        let cardHeight = 100 / maxRounds;
        return `translateY(-${(cardHeight * currentRound) + (cardHeight / 2)}%)`
    }};
`

const Pair = styled.div`
    display: grid;
    grid-template-areas:
        ". left . right .";
    grid-template-rows: 1fr;
    grid-template-columns: 1rem 1fr 1rem 1fr 1rem;
    width: 100%;

    transform: scale(${props => props.active ? 1 : 0.8});

    > *:first-child {
        grid-area: left;
    }
    > *:last-child {
        grid-area: right;
    }
`


const usePickerTrack = () => {
    const players = useSelector(state => state.data.players);
    const { rounds, flags, currentRound, maxRounds } = useSelector(state => state.game);
    const dispatch = useDispatch();


    const start = () => dispatch(startGame())
    const reset = () => dispatch(resetGame(players))

    return {
        rounds,
        flags,
        start,
        reset,
        currentRound,
        maxRounds,
    }
}


const PickerTrack = (props) => {
    const { rounds, flags, start, reset, currentRound, maxRounds, } = usePickerTrack();



    return (
        <Container>
            <Explanation>
                <h1>Guess the Points</h1>
                <p>You will be shown details about two players, your task is to decide which of the players has the higher FanDuel Points Per Game.</p>
            </Explanation>
            <Track>
                {!flags.gameStarted && 
                    <StartOverlay>
                        <StartButton onClick={start}>Start Game</StartButton>
                    </StartOverlay>
                }
                <Pairs maxRounds={maxRounds} currentRound={currentRound}>
                    {Object.keys(rounds).map(round => 
                        <Pair active={currentRound == round} key={round}>
                            <PointPicker round={round} />
                        </Pair>
                    )}
                </Pairs>
                {flags.gameStarted && flags.gameComplete && <button onClick={reset}>Restart Game</button>}
            </Track>
        </Container>
    )
}



export default PickerTrack