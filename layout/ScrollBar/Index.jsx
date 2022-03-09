import styled from "styled-components";
import colors from "../../styles/colors";
import breackpoints from "../../styles/breackpoints";
import MenuBurger from "../MenuBurger/Index";
import ArrowIcon from "../../public/icons/arrow.svg";

const ScrollBar = styled.div`

    position: absolute;
    right: 0;
    height: 100%;
    background: ${colors.color2};
    width: 80px;
    z-index: 2;

    .icon-wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }

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
            <div className="icon-wrapper">
                <ArrowIcon/>
            </div>         
        </ScrollBar>
    )
}

export default Index