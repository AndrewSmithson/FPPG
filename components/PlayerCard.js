import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import PointPicker from './PointPicker'
import { Button } from './_styled/Button'

import { startGame, resetGame, } from '../_actions'



const Card = styled.div`
    display: grid;
    /* grid-template-areas:
        "name name name"
        ". . ."
        ". thumb ."
        ". . ."
        ". details .";
    grid-template-columns: 1rem 1fr 1rem;
    grid-template-rows:
        auto
        1rem
        auto
        1rem
        auto; */
    grid-template-areas:
        "name"
        "thumb"
        "details";
    grid-template-columns: 1fr;
    grid-template-rows:
        auto
        auto
        auto;
    width: 100%;

    
    box-shadow: 0 4px 6px rgba(0, 0, 0, .4);

    opacity: ${props => props.disabled ? 0.5 : 1};
    background-color: #1493ff;
    
    color: #FFF;

    
    border: 4px solid ${props => {
        switch(props.selected) {
            case 'correct':
                return 'green'
            case 'incorrect':
                return 'red'
            default:
                return '#1f375b'
        }
    }};
`

const Name = styled.div`
    grid-area: name;
    background-color: #1f375b;
    text-align: center;
`

const Thumb = styled.div`
    grid-area: thumb;
    position: relative;
    width: 100%;

    background-image: url(${props => props.image});
    background-color: #FFF;
    background-position: center;
    background-size: cover;

    &:after {
        content: "";
        position: relative;
        display: block;
        width: 100%;
        padding-bottom: 100%;
    }
`

const Details = styled.div`
    grid-area: details;
    padding: .5rem 1rem;
`

const DetailRow = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;

    margin-top: .25rem;
    border-bottom: 1px solid rgba(0,0,0,0.5);

    &::first-of-type {
        margin-top: 0;
    }
`

const DetailLabel = styled.div``

const Detail = styled.div``




const usePlayerCard = (player) => {
    const players = useSelector(state => state.data.players);


    return {
        player: players[player]
    }
}


const PickerTrack = (props) => {
    const { player } = usePlayerCard(props.player);

    const { thumbnail, first_name, last_name, played, position } = player;

    return (
        <Card onClick={() => props.choose(props.player)} selected={props.selected} disabled={props.disabled}>
            <Name><h3>{first_name} {last_name}</h3></Name>
            <Thumb image={thumbnail.url} />
            <Details>
                <DetailRow>
                    <DetailLabel>Games played</DetailLabel>
                    <Detail>{played}</Detail>
                </DetailRow>
                <DetailRow>
                    <DetailLabel>Position</DetailLabel>
                    <Detail>{position}</Detail>
                </DetailRow>
            </Details>
        </Card>
    )
}



export default PickerTrack