import styled from 'styled-components'







export const Button = styled.button`
    margin: 0;
    padding: 1.5em 0;
    border-radius: 6px;
    border: 2px solid #1493ff;
    /* font-family: "Shentox-Light"; */
    font-size: .75rem;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .4);
    transition: all .2s ease;
    position: relative;
    z-index: 1;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        color: #1493ff;
    }
`