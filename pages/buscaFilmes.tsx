import fetch from 'isomorphic-unfetch'
import * as React from "react";
import Header from '../components/header';

interface PropsBuscaFilmes {
	data: any;
	status: any;
}

/* Extendendo a interface do React FC para tipar o GetInitialProps */
interface NextFuncComponent<Props> extends React.FunctionComponent<PropsBuscaFilmes> {
    getInitialProps: (ctx) => Promise<{
        data: any;
		status: any; 
    }>;
}



export const buscaFilmes: NextFuncComponent<PropsBuscaFilmes> = ({
	data,
	status,
	children,
	...otherProps
}) => {

	// const [loading, setLoading] = React.useState(true);
	// React.useEffect(() => setLoading(false));

	return (
			<React.Fragment>
				<Header />
			</React.Fragment>
	)
}


buscaFilmes.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:3000/api/filmes/${query.id}`)

  const data = await response.json()
  return { data, status: response.status }
}

export default buscaFilmes;

// const buscaFilmes = React.Functionaal({ data, status }) =>
//   status === 200 ? (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Height</th>
//           <th>Mass</th>
//           <th>Hair color</th>
//           <th>Skin color</th>
//           <th>Eye color</th>
//           <th>Gender</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{data.name}</td>
//           <td>{data.height}</td>
//           <td>{data.mass}</td>
//           <td>{data.hair_color}</td>
//           <td>{data.skin_color}</td>
//           <td>{data.eye_color}</td>
//           <td>{data.gender}</td>
//         </tr>
//       </tbody>
//     </table>
//   ) : (
//     <p>{data.message}</p>
//   )

// buscaFilmes.getInitialProps = async ({ query }) => {
//   const response = await fetch(`http://localhost:3000/api/people/${query.id}`)

//   const data = await response.json()
//   return { data, status: response.status }
// }

// export default buscaFilmes