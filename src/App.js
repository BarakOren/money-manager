import styled, { createGlobalStyle } from 'styled-components';
import OverView from './components/overview/overview.tsx';
import { Routes } from 'react-router';
import { Route } from 'react-router';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:  #262626;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }
`;

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <Container>
     <GlobalStyle />
      <Routes>
       <Route path="/overview" element={<OverView />} />
      </Routes>
    </Container>
  );
}

export default App;
