import React from "react";
import styled, {keyframes} from "styled-components";

interface Props {
    width: number;
    spendings: boolean;
}

const Bar = styled.div`
    position: absolute;
    left: 0;
    bottom: ${p => p.spendings ? "25%" : "48%"};
    width: ${p => p.width}%;
    height: 20px;
    background: ${p => p.spendings ? "linear-gradient(90deg, #F451E4 0%, rgba(255, 132, 220, 0.14) 100%);":"linear-gradient(90deg, #3CECEC 0%, rgba(194, 253, 228, 0.15) 100%);"}
    box-shadow: 0px 4px 10px ${p => p.spendings ? "#7A3799" :   "#397660"};
    border-radius: 0px 6px 6px 0px;
    animation: ${p => p.animation} 2s normal forwards ease-in-out ;
    animation-delay: 1s;
`

const OverviewBar: React.FC<Props> = ({width, spendings}) => {
    const animation = keyframes`
    from {width: 10px;}
    to {width: ${width}%;}
    `;

    return <Bar animation={animation} spendings={spendings} />
}

export default OverviewBar;