import fetch from 'isomorphic-unfetch';
import * as React from "react";
import Buscador from '../components/buscador';
import Card from '../components/card'
import styled, { createGlobalStyle } from 'styled-components';
import FilmeInfo from '../components/filmeInfo';
import Router from 'next/router'

interface PropsBuscaFilmes {
	fullFilme: any;
	status: any;
}

/* Extendendo a interface do React FC para tipar o GetInitialProps */
interface NextFuncComponent<Props> extends React.FunctionComponent<PropsBuscaFilmes> {
    getInitialProps: (ctx) => Promise<{
        fullFilme: any;
    }>;
}



export const buscaFilmes: NextFuncComponent<PropsBuscaFilmes> = ({
	fullFilme,
	children,
	...otherProps
}) => {

	const [inputValue, setInputValue] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [dataMovie, setDataMovie] = React.useState([]);
    const [fullOrCard, setfullOrCard] = React.useState(fullFilme != null ? true : false);

	


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const getTarget = e.target as HTMLInputElement
        setInputValue(getTarget.value);
    }


	const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
		if( e.key == 'Enter' ){
			searchTitle();
			setfullOrCard(false);
		}
	};

    const searchTitle = async () => { 
        const titulo = inputValue;
		setfullOrCard(false);
   		setLoading(true);
		if(window != undefined){
			window.history.pushState(`/filmes/`, `filmes`, `/filmes/`);
		}
        if((titulo.length > 3) && (titulo != undefined)) {
            const response = await fetch(`http://localhost:3000/api/filmes?titulo=${titulo}`)
            const data = await response.json()
            setDataMovie([data]);
            setLoading(false);
        }
    }

	const cardOrFull = () => {
		if((!!fullOrCard) && (fullFilme.length > 0)){
			return <FilmeInfo data={fullFilme} />
		}
		else{
			if(!loading)
				return <Card info={dataMovie[0]}/>
			else
				return null
		}
	}
 

	console.log('CHECKDATA', fullFilme, 'fullOrCard:', fullOrCard);
	return (
			<Layout>
				<GlobalStyle />
				<Buscador handleChange={handleChange} onKeyDown={keyPress} searchTitle={searchTitle}/>
				{cardOrFull()}
			</Layout>
	)
}


buscaFilmes.getInitialProps = async ({ query }) => {
//	AQUI EU PODERIA CONSULTAR DIRETO A API da OMDB
let fullFilme = [];
  if(query.titulo != undefined){
	    const response = await fetch(`http://localhost:3000/api/filmes?titulo=${query.titulo}`)
		fullFilme = await response.json();
  }
  
  return { fullFilme }
}

export default buscaFilmes;

const Layout = styled.section`
	background:#f3f3f3;
	display:flex;
	flex-flow: row wrap;
	height: 100vh;
	align-items: baseline;
    align-content: baseline;

`;

const GlobalStyle = createGlobalStyle`
	html{
		scroll-behavior: smooth;
		font-display: swap;
	}
    body {
      font-display:swap;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-feature-settings: "kern";
      -webkit-font-feature-settings: "kern";
      -moz-font-feature-settings: "kern";
      -moz-font-feature-settings: "kern=1";
      font-kerning: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
	  margin:0;
	  overscroll-behavior: contain;
	  font-family: 'Popppins', sans-serif;
    }
`
