import styled from "styled-components";
import colors from "../../styles/colors";
import breackpoints from "../../styles/breackpoints";
import MenuBurger from "../MenuBurger/Index";

const ScrollBar = styled.div`

    position: absolute;
    right: 0;
    height: 100%;
    background: ${colors.color2};
    width: 80px;
    z-index: 2;

    @media(max-width: ${breackpoints.xga}) {
        display: none;
    }


`

const Index = ({ className }) => {

    return(
        <ScrollBar className={className}>
            <MenuBurger
                isTextVisible={true}
            />
        </ScrollBar>
    )
}

export default Index