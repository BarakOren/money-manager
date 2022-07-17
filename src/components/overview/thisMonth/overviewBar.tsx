import React, {useState, useEffect} from "react";
import styled from "styled-components";

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
    transition: 1s all;
`

const OverviewBar: React.FC<Props> = ({width, spendings}) => {

    const [widthState, setWidthState] = useState<number>(10);
    useEffect(() => {
        setTimeout(() => {
            setWidthState(width);
        }, 1000)
    }, [width, widthState, setWidthState])

    return <Bar width={widthState} spendings={spendings} />
}

export default OverviewBar;