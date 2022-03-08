import styled from "styled-components";
import { getAdaptiveSize } from "../../styles/helpers";

const AboutUsHead = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${getAdaptiveSize(30, 80)};
    padding-right: ${getAdaptiveSize(30, 160)};
    margin-bottom: ${getAdaptiveSize(30, 125)};
`

export default AboutUsHead;