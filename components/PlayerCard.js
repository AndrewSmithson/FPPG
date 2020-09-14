import { useSelector, } from 'react-redux'
import styled from 'styled-components'




const Card = styled.div`
    display: grid;
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

    
    opacity: ${props => props.disabled ? 0.5 : 1};
    transition: all .5s ease;
    background-color: #1493ff;
    
    color: #FFF;

    box-shadow: 0 4px 6px ${props => {
        switch(props.selected) {
            case 'correct':
                return 'rgba(0, 255, 0, 0.4)'
            case 'incorrect':
                return 'rgba(255, 0, 0, 0.4)'
            default:
                return 'rgba(31, 55, 91, 0.4)'
        }
    }};
    
    border: 6px solid ${props => {
        switch(props.selected) {
            case 'correct':
                return 'green'
            case 'incorrect':
                return 'red'
            default:
                return '#1f375b'
        }
    }};
    border-radius: 6px;
    box-sizing: border-box;
    transform: scale(1);


    ${props => {
        if(!props.disabled)
            return `
                cursor: pointer;
                &:hover {
                    transform: scale(1.05);
                }
            `
    }}
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

const DetailValue = styled.div``


const Injury = styled.div`
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    padding: .25rem 0;
    background-color: red;
    text-align: center;
    text-transform: uppercase;
`


const Detail = ({label, value}) => (
    <DetailRow>
        <DetailLabel>{label}</DetailLabel>
        <DetailValue>{value}</DetailValue>
    </DetailRow>
)



const usePlayerCard = (playerId) => {
    const {players, teams} = useSelector(state => state.data);
    const player = players[playerId]

    return {
        player,
        team: teams[player.team]
    }
}


const PickerTrack = (props) => {
    const { player, team } = usePlayerCard(props.player);

    const { thumbnail, first_name, last_name, played, position, injury, salary } = player;

    return (
        <Card onClick={() => {if(!props.disabled) props.choose(props.player)}} selected={props.selected} disabled={props.disabled}>
            <Name><h3>{first_name} {last_name}</h3></Name>
            <Thumb image={thumbnail.url}>
                {injury &&
                    <Injury>{injury.detail} injury</Injury>
                } 
            </Thumb>
            <Details>
                <Detail label={"Games Played"} value={played} />
                <Detail label={"Position"} value={position} />
                <Detail label={"Weekly Salary"} value={`$${salary}`} />
                <Detail label={"Team"} value={team.full_name} />
                {/* <Detail label={"N"} value={`$${salary}`} /> */}
            </Details>
        </Card>
    )
}



export default PickerTrack