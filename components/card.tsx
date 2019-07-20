/* 
OBS:
devido a falta de tempo nesse fds, 
poderia ter feito um component para receber 
todas as informacoes tanto do lado do cliente
como da página(SSR), evitando duplicacao de código.
*/

import * as React from "react";
import styled from "styled-components";
import FilmeInfo from './filmeInfo';
//Tipar corretamente.
interface CardProps {
  info?: any;
}


export const Card: React.FunctionComponent<CardProps> = ({
    children,
    info,
    ...otherProps
}) => {
    const [loadFull, setLoadFull] = React.useState(false);

    const {Actors, Awards, BoxOffice, Country, DVD, Director, Genre, Writer, Title,Poster, Year, Plot  } = info;
    console.log(info,'info');

    const ShowInfo = (e: React.MouseEvent) =>  {
      e.preventDefault();
      setLoadFull(true);
      //MUDA A ROTA PARA SSR 
      if(window != undefined){
          window.history.pushState(`/filmes/${Title}`, `${Title}`, `/filmes/${Title}`);
      }

    }

    return (
      <React.Fragment>
        {!loadFull ?
          <MainCard>
            <a onClick={ShowInfo} href={`/filmes/${Title}/`}>
              <img src={Poster} />
              <span>ver mais informações</span>
            </a> 
          </MainCard> : 
          <FilmeInfo data={info} />
        }
        
      </React.Fragment>
    );
};

export default Card;




const MainCard = styled.article`
    margin: 6px 12px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width:100%;
    a{
      padding: 12px;
      box-sizing: border-box;
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      max-width: 370px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.22);
      border: solid 1px #ddd;
      align-items: center;
      justify-content: center;
      position:relative;
          margin: auto;
    overflow: hidden;

      img{
        width:100%;
        object-fit: contain;
      }
      span{
            position: absolute;
            bottom: 0;
            background: rgb(255, 255, 255);
            width: 100%;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #5415d4;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 14px;
      }
    }

`;
// Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy"
// Awards: "Won 4 Oscars. Another 152 wins & 204 nominations."
// BoxOffice: "$292,568,851"
// Country: "USA, UK"
// DVD: "07 Dec 2010"
// Director: "Christopher Nolan"
// Genre: "Action, Adventure, Sci-Fi, Thriller"
// Language: "English, Japanese, French"
// Metascore: "74"
// Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
// Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
// Production: "Warner Bros. Pictures"
// Rated: "PG-13"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "16 Jul 2010"
// Response: "True"
// Runtime: "148 min"
// Title: "Inception"
// Type: "movie"
// Website: "http://inceptionmovie.warnerbros.com/"
// Writer: "Christopher Nolan"
// Year: "2010"
// imdbID: "tt1375666"
// imdbRating: "8.8"
// imdbVotes: "1,850,558"