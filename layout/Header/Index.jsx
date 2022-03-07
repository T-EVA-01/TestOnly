import styled from "styled-components";
import colors from '../../styles/colors';
import Logo from '../Logo/Index';
import NavBar from '../NavBar/Index';

const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    max-width: 1920px;
    display: flex;
    padding: 30px 0 0 0;
`

const Index = ({logo, links}) => {

    return (
        <Header>
            <Logo logo={logo}/>
            <NavBar links={links}/>
        </Header>
    )

}

export default Index