import styled from 'styled-components';
import color from '@/src/styles/Colors';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 66px;
    background-color: #000;
    justify-content: center;
    align-items: center;
    color: ${color.white};
`;

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 80%;
    height: 100%;
`;

export const Nav = styled.div`
    display: flex;
    gap: 48px;
    align-items: center;

    a {
        text-decoration: none;
        color: ${color.white};
    }
`