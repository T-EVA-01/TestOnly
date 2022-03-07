import styled from "styled-components";
import colors from "../../styles/colors";
import { getAdaptiveSize } from "../../styles/helpers";

const CompanyList = styled.ul`

    display: flex;
    margin-bottom: 20px;
    padding-left: ${getAdaptiveSize(30, 80)};

    li:first-child:after {
        content: ">";
        margin: 0 10px;
        color: ${colors.color4};
    } 

    a {
        font-family: Gilroy;
        font-weight: 300;
        font-size: ${getAdaptiveSize(12, 14)};
        line-height: 160%;
        color: ${colors.color1};
        opacity: 0.5;
        text-decoration: none;
    }   

`

export default CompanyList