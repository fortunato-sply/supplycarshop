
import { useState } from 'react';
import {
    Container,
    SearchInput,
    Spacer,
    Image
} from './style';

export default function SearchBox() {
    const [query, setQuery] = useState('');

    return (
        <>
            <Container>
                <SearchInput 
                    placeholder="Busque por produtos, marcas, etc"
                    onChange={(e: any) => setQuery(e.target.value)}
                />
                <Spacer />
                <Image src="/assets/lupa.png"></Image>
            </Container>
        </>
    )
}