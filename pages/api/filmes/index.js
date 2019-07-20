/* jshint esversion: 6 */
/* MIDDLEWARE API Caso tenha um elastic ou similar que queira esconder o link original da requisição e tratamentos de dado. */
import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
 
  const {titulo} = req.query;
  console.log('titulo', titulo);
  
  const response = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=90a5eb6f&Type=movie`);
  const data = await response.json()


  return res.status(response.status).json(data);
}