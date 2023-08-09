import styled from 'styled-components';
import color from '@/src/styles/Colors';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 595px;
    height: 66px;
    justify-content: center;
    align-items: center;
    color: ${color.white};
`;

export const SearchInput = styled.input`
    display: flex;
    min-width: 595px;
    background-color: ${color.white};
    padding: 12px 24px;
    border-radius: 99px;
    font-size: 0.875rem;
    
    &::placeholder {
        color: #aaa;
    }
`

export const Spacer = styled.div`
    position: absolute;
    right: 30px;
    width: 2px;
    height: 25px;
    background-color: #000;
`

export const Image = styled.img`
    right: -10px;
    position: absolute;
    width: 30px;
    height: 30px;
`