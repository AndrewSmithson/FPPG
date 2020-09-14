import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated, config as springConfig } from 'react-spring'
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
`

const Track = styled.div`
    grid-area: track;
    background-color: #FFF ;
    position: relative;
    overflow: hidden;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-areas:
        "."
        "message"
        "button"
        ".";
    grid-template-rows:
        1fr
        min-content
        min-content
        1fr;
    
    grid-gap: 2rem;
    background-color: rgba(0,0,0,0.5);
`;

const OverlayButton = styled(Button)`
    grid-area: button;
    width: 50%;
`;

const Pairs = styled(animated.div)`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
`

const MovingPairs = (props) => {
    const scroll = useSpring({
        to: {
            transform: ((100 / props.maxRounds) * props.currentRound) + ((100 / props.maxRounds) / 2)
        },
        consfig: springConfig.slow
    })

    return <Pairs style={{transform: scroll.transform.interpolate(v => `translateY(-${v}%)`)}}>{props.children}</Pairs>
}

const Pair = styled.div`
    display: grid;
    grid-template-areas:
        ". left . right .";
    grid-template-rows: 1fr;
    grid-template-columns: 1rem 1fr 1rem 1fr 1rem;
    width: 100%;

    transform: scale(${props => props.active ? 1 : 0.8});
    transition: transform .5s ease;

    > *:first-child {
        grid-area: left;
    }
    > *:last-child {
        grid-area: right;
    }
`

const ScoreCard = styled.div`
    grid-area: message;
    width: 70%;
    border-radius: 6px;
    border: 2px solid #1493ff;
    background-color: #FFF;
    text-align: center;
    padding: .5rem 1rem;
`


const usePickerTrack = () => {
    const players = useSelector(state => state.data.players);
    const { rounds, flags, currentRound, roundsCorrect, maxRounds } = useSelector(state => state.game);
    const dispatch = useDispatch();


    const start = () => dispatch(startGame())
    const reset = () => dispatch(resetGame(players))

    return {
        rounds,
        flags,
        start,
        reset,
        currentRound,
        roundsCorrect,
        maxRounds,
    }
}


const PickerTrack = (props) => {
    const { rounds, flags, start, reset, currentRound, roundsCorrect, maxRounds, } = usePickerTrack();



    return (
        <Container>
            <Explanation>
                <h1>Guess the Points</h1>
                <p>You will be shown details about two players, your task is to decide which of the players has the higher FanDuel Points Per Game.</p>
            </Explanation>
            <Track>
                {!flags.gameStarted && 
                    <Overlay>
                        <OverlayButton onClick={start}>Start Game</OverlayButton>
                    </Overlay>
                }
                <MovingPairs maxRounds={maxRounds} currentRound={currentRound}>
                    {Object.keys(rounds).map(round => 
                        <Pair active={currentRound == round} key={round}>
                            <PointPicker round={round} />
                        </Pair>
                    )}
                </MovingPairs>
                {flags.gameStarted && flags.gameComplete && 
                    <Overlay>
                        <ScoreCard>
                            <h2>Game Over</h2>
                            <p>You managed to guess {roundsCorrect} out of {maxRounds} correctly.</p>
                        </ScoreCard>
                        <OverlayButton onClick={reset}>Play Again</OverlayButton>
                    </Overlay>
                }
            </Track>
        </Container>
    )
}



export default PickerTrack