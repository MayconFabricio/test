# test

O Desafio: 
descricao: criar um SPA em React, onde seja possível realizar a busca de um filme pelo seu título. Também deve ser possível visualizar mais detalhes dos filmes.
    Total: ~ 10hrs
mais
  + Concluido com adicional de um framework SSR em cima, next.js
  + Components usando React.Hooks e estilo com Styled Components
  + Fiz uma simples api middleware para tratar(se necessario) os dados a api do OMDB
  + Usei um Analyzer no webpack (aka next.config) para ver o tamanho que ficou a bundle  
menos
  - Não tive tempo de fazer com gerenciadores de estados como Redux, context API, mobX
  - Não tive tempo de aplicar os tests nos components com JEST
  - Não tive tempo de tratar excessões.



--- comandos para rodar o Projeto ---

modo dev
 - yarn
 - yarn dev (rodar modo dev)

modo production
- yarn build
- yarn start

modo analyzer
- yarn analyze: client+server
- yarn analyze:server": server
- yarn analyze:browser" client

Acessar em: 
http://localhost:3000/filmes/
ou http://localhost:3000/filmes/${titulodofilme}