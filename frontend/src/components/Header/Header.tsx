import SearchBox from '../SearchBox/SearchBox.tsx';
import { 
    Container,
    HeaderBox,
    Nav
} from './style.js';

export default function Header() {
    return (
        <>
            <Container>
                <HeaderBox>
                    <img src='/assets/Logo.png'></img>
                    <SearchBox />
                    <Nav>
                        <a href="">Minha conta</a>
                        <a href="">Notificações</a>
                        <a href="">Carrinho</a>
                    </Nav>
                </HeaderBox>
            </Container>
        </>
    )
}