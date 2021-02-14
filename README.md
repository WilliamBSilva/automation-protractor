# curso-protractor-tat
![Lint and tests](https://github.com/WilliamBSilva/curso-protractor/workflows/Lint%20and%20tests/badge.svg)

Projeto para o curso de Protractor da Escola TAT

## Pré-resisitos

É nescessário que os seguintes sistemas  estejam instalados para a execução do projeto.

- Node.js (`12.16.3`) e NPM (`6.14.5`)
- Navegadores Google Chrome (`88.0.4324.150`) e Mozila Firefox (`85.0.2`)

## Instalação

Após ao clonar o projeto acesse o diretório do mesmo e execute `npm install` para instalar as dependências de desenvolvimeto.

## Executando os testes

Execute `npm rum pretest:local && npm test` para executar os testes em modo _headless_ em ambos navegadores Chrome e Firefox.

### Executando os testes em navegador especifico

#### Chrome

Execute `npm rum pretest:local && npm run test:chrome` para executar os testes em modo _headless_ somente no navegador Chrome.

#### Firefox

Execute `npm rum pretest:local && npm run test:firefox` para executar os testes em modo _headless_ somente no navegador Firefox.

_________

Um projeto da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).
