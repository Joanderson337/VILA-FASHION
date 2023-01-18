import styled from 'styled-components'

export const ContainerCategories = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentCategories = styled.div`
  height: 100%;
  width: 192rem;
  display: grid;
  grid-template-areas:
    'a b'
    'c c'
    'd e';
  grid-gap: 15px;
  padding: 30px;

> div:nth-child(1) {
  grid-area: a;
}

> div:nth-child(2) {
  grid-area: b;
}

> div:nth-child(3) {
  grid-area: c;
}

> div:nth-child(4) {
  grid-area: d;
}

> div:nth-child(5) {
  grid-area: e;
}
`
