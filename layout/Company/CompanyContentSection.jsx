import styled from "styled-components";
import colors from "../../styles/colors";
import { getAdaptiveSize } from "../../styles/helpers";

const CompanyContentSection = styled.section`
    background: ${colors.color3};
    display: flex;
    flex-direction: column;
    padding-top: ${ getAdaptiveSize(120, 240)};
    width: calc(880/1920 * 100%);
    max-height: 560px;
`

export default CompanyContentSection