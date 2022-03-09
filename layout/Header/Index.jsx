import styled from "styled-components";
import Logo from '../Logo/Index';
import NavBar from '../NavBar/Index';
import MenuBurger from '../MenuBurger/Index'
import breackpoints from "../../styles/breackpoints";

const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    max-width: 1920px;
    display: flex;
    padding: 30px 0 0 0;

    ${MenuBurger} {
        display: none;
    }

    @media(max-width: ${breackpoints.xga}) {
        justify-content: space-between;
        ${MenuBurger} {
            display: block;
        }
    }

`

const Index = ({logo, links, className}) => {

    return (
        <Header className={className}>
            <Logo logo={logo}/>
            <NavBar links={links}/>
            <MenuBurger isTextVisible={false}/>
        </Header>
    )

}

export default Index