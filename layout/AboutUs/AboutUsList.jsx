import styled from "styled-components";
import { getAdaptiveSize } from "../../styles/helpers";

const AboutUsList = styled.ul`
    padding-left: ${ getAdaptiveSize(30, 80)};
    padding-right: ${ getAdaptiveSize(30, 160)};
`

export default AboutUsList;