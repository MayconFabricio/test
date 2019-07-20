// import styled from "styled-components";
import * as React from "react";
import styled from "styled-components";

interface filmeInforProps {
    data?: any;
}


export const FilmeInfo: React.FunctionComponent<filmeInforProps> = ({
    /* eslint-disable react/prop-types */
    children,
    data,
    /* eslint-enable react/prop-types */
    ...otherProps
}) => {
    console.log('data', data);
    return (
		 <FullCard>
            <h1>
              {data.Title}
              <small>{data.Year} - Avaliação:{data.imdbRating}</small> 
            </h1>
            <span>Diretor:<b>{data.Director}</b></span>
            <p>{data.Plot}</p>
            <img src={data.Poster} /> 
            <ul>
                <li>Genêro:<b>{data.Genre}</b></li>
                <li>Escritores:<b>{data.Writer}</b></li>
                <li>Atores:<b>{data.Actors}</b></li>
                <li>Idioma:<b>{data.Language}</b></li>
                <li>Prêmios:<b>{data.Awards}</b></li>
            </ul>
          </FullCard>
    );
};


export default FilmeInfo;

//   Rated: 'PG-13',
//   Released: '27 Jul 2007',
//   Runtime: '87 min',
//   Genre: 'Animation, Adventure, Comedy',
//   Director: 'David Silverman',
//   Writer:
//    'James L. Brooks (screenplay), Matt Groening (screenplay), Al Jean (screenplay), Ian Maxtone-Graham (screenplay), George Meyer (screenplay), David Mirkin (screenplay), Mike Reiss (screenplay), Mike Scully (screenplay), Matt Selman (screenplay), John Swartzwelder (screenplay), Jon Vitti (screenplay), Joel H. Cohen (consultant writer), John Frink (consultant writer), Tim Long (consultant writer), Michael Price (consultant writer)',
//   Actors:
//    'Dan Castellaneta, Julie Kavner, Nancy Cartwright, Yeardley Smith',
//   Plot:
//    'After Homer accidentally pollutes the town\'s water supply, Springfield is encased in a gigantic dome by the EPA and the family are declared fugitives.',
//   Language: 'English',
//   Country: 'USA',
//   Awards:
//    'Nominated for 1 Golden Globe. Another 5 wins & 33 nominations.',
//   Poster:
//    'https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg',
//   Ratings:
//    [ { Source: 'Internet Movie Database', Value: '7.3/10' },
//      { Source: 'Rotten Tomatoes', Value: '88%' },
//      { Source: 'Metacritic', Value: '80/100' } ],
//   Metascore: '80',
//   imdbRating: '7.3',
//   imdbVotes: '292,506',
//   imdbID: 'tt0462538',
//   Type: 'movie',
//   DVD: '18 Dec 2007',
//   BoxOffice: '$183,100,000',
//   Production: '20th Century Fox',
//   Website: 'http://www.simpsonsmovie.com/',
//   Response: 'True' }

const FullCard = styled.article`
    
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width:100%;
    padding: 6px 24px;
      @media (min-width: 1023px) {
           max-width:600px;
           margin: auto;
    }
    h1{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        color: #703cd8;
        line-height: 1.3;
  
        small{
            width:100%;
            font-size:14px;
            color: #353535;
        }
    }
    >span{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            font-size: 14px;
            color: #717171;
            border-top: solid 1px #ddd;
            padding-top: 12px;
            b {
                color: #6f3cd8;
                margin-left: 6px;
            }
    }
    p{
        width: 100%;
        display: flex;
        font-size: 14px;
        color: #717171;
        line-height:1.3;
        flex-flow: row wrap;
       
    }
    img{
        @media (min-width: 1023px) {
            width:50%;
            margin-right: 12px;
        }
    }
    ul{
        list-style: none;
        padding: 0;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        @media (min-width: 1023px) {
            width: 47%;
            margin: 0;
            height: fit-content;
        }
        li{
            margin-bottom: 6px;
            padding-bottom: 6px;
            border-bottom: solid 1px #ddd;
            width: 100%;
            font-size: 14px;
            font-weight:600;
            color: #353535;
            b{
                margin-left: 6px;
                font-weight: 500;
                color:#6f3cd8;
            }
        }
    }
`;