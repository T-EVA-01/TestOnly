import styled from "styled-components";
import Logo from "../Logo/Index";
import NavBar from "../NavBar/Index";
import MenuBurger from "../MenuBurger/Index"
import breackpoints from "../../styles/breackpoints";
import { getAdaptiveSize } from "../../styles/helpers";

const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    max-width: 1920px;
    display: flex;
    padding: 30px 0 0 0;

    .menu-burger {
        display: none;
    }

    @media(max-width: ${breackpoints.xga}) {
        
        justify-content: space-between;
        
        .menu-burger {
            display: block;
            padding-right: ${getAdaptiveSize(30, 80)};
        }
    }

`
const Index = ({logo, links, className}) => {

    return (
        <Header className={className}>
            <Logo logo={logo}/>
            <NavBar links={links}/>
            <MenuBurger 
                isTextVisible={false}
                className={"menu-burger"}
            />
        </Header>
    )

}

export default Index