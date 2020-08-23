import styled from "styled-components";
import defaultImg from "../img/room-7.jpeg";

const StyledHero = styled.header`
    min-height: calc(60vh);
    background: url(${(props) => (props.img ? props.img : defaultImg)});
    display: flex;
    align-items: center;
    justify-content: center;
    `;

  export default StyledHero;