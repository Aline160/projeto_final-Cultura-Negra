# Projeto_final

# Valorização da Cultura Negra

<p align="center">
<img src="./imgs/cultura_negra.jpg" width="50%" height="50%"/>
</p>

> Projeto final do bootcamp da @Reprograma em Parceria com o M.i.n.a.s do Porto Digital- Recife. 

# Introdução

<p style= 'text-align: justify'> Falar de cultura negra vai muito além de falar de arte, remete-nos a questionar sobre impactos sociais, que surgem ao longo do tempo formando concepções de mundo. </p>


>São construções de valores, posturas, hábitos, conceitos, lugares, dentre outras coisas. *Macedo (2008, p.91)*


 <p style= 'text-align: justify'>No brasil fundamentado no mito da democracia racial, o racismo foi sistematicamente usado como instrumento de segregação, opressão e dominação inclusive através da linguagem. Através deste houve a tentativa de destruição da identidade do sujeito negro a partir de uma política de branqueamento social. Oprimindo-os para suprimir suas crenças. Atacando sua cultura, tirando sua identidade. E assim o negro teve que se adaptar a costumes, e a uma identidade que não era sua. </p>


<p style= 'text-align: justify'>Por isso faz-se muito importante resgatar essa cultura, através desse processo de redescoberta da cultura da identidade do negro e valorizá-la.  Pôs assumir a identidade negra no Brasil ainda é um processo difícil e até mesmo doloroso, por estar sempre ligada a algo negativo, sexualizado, folclorizado ou até mesmo “demoníaco”. </p>



## Objetivos

<p style= 'text-align: justify'> Este projeto consiste na criação de uma API gerenciadora de um banco de dados com o objetivo da valorização da cultura negra. 
O proposito é reunir informaçoes que nos levem a reconhecer as particularidades da beleza e a historia de resistencia do nosso povo.
Ele é composto por profissionais relacionados a beleza/estetica da população negra, locais historicos e projetos ligados ao tema. </p>

## Estrutura de Arquivos da API:

```
├── src
│   ├── controllers
|   |  ├── expressoes_CulturaisController.js
|   |  ├── lugaresController.js
|   |  ├── modaController.js
│   ├── models
|   |  ├── expressoes_Culturais.js
|   |  ├── lugares.js
|   |  ├── moda.js
│   ├── routes 
│   |  ├── expressoes_CulturaisRouter.js
|   |  ├── index.js
│   |  ├── lugaresRoute.js
|   |  ├── modaRoute.js
|   ├── app.js
├── .env.example
├── package.json
├── server.js
```

## Pré- requisitos

**Instalar:**
1. Node.js;
- Gerenciador de pacotes node npm;
- Dependencias:
    - `Express`;
    - `Mongoose`;
    - `Dotenv-safe`;
    - `Body-parser`;
    - `Nodemon`;
    - `bcrypt`;
    - `jsonwebtoben`; 

2. MongoDB Atlas Banco de dados utilizado;
3. Postman para testar as funcionalidades das Rotas;
4. Um editor de Codigo (Usei o *Visual Studio Code* );

## Instalação
- ` Git Clone` na sua maquina ;
- `cd projeto-final-aline` ;
- No Prompt digite o comando `npm install`;
- Ronomeie o arquivo `.env.exemple` para `.env` e insira as variaveis pedidas; 
- Para iniciar o server digite o comando `node server`;

### Rotas

**Postman:**

A API está será executada na `porta 8080` quando executada localmente.

Ou

Se utilizar o heroku  o link do projeto é https://projeto-final-aline.herokuapp.com/ 

#### **Moda**

|Método|Recurso|Utilização|
|:------:|:-------:|----------|
| get|"/"|Visualiza o index|
| get|"/moda"|Visualiza todos os dados do banco de dados|
| get|"/:Tipo"|Visualiza todos os dados que possue o tipo de profissional que você deseja|
|post|"/"|Adicionar novos profissionais|
|post|"/login"|Realiza login dos profissionais|
|delete|"/:id"|Remove um profissional através do ID|
|put|:id"|Atualiza um profissional atraves do ID|

#### **Lugares**

|Método|Recurso|Utilização|
|:------:|:-------:|----------|
| get|"/"|Visualiza o index|
| get|"/lugares"|Visualiza todos os dados cadastrado do banco|
| get|"/tipo/:Tipo"|Visualiza todos os dados que são cadastrado no tipo que você deseja|
|get|"/:id"|Busca o lugar pelo ID cadastrado|
|get|"/cidade/:cidade"|Busca o lugar pelo ID cadastrado|
|post|"/"|Adicionar novos locais|
|delete|"/:id"|Remove um lugar através do ID|
|put|:id"|Atualiza um lugar atraves do ID|

#### **Expressões Culturais**

|Método|Recurso|Utilização|
|:------:|:-------:|----------|
| get|"/"|Visualiza o index|
| get|"/expressoes_Culturais"|Visualiza todos os dados cadastrado do banco|
| get|"/tipo/:Tipo"|Visualiza todos os dados que são cadastrado no tipo que você deseja|
|get|"/nome/:nome_do_projeto"|Busca o lugar pelo nome do projeto cadastrado|
|post|"/"|Adicionar novos projetos|
|delete|"/:id"|Remove um projeto através do ID|
|put|:id"|Atualiza um projeto atraves do ID|


## Contribuindo com o projeto
1. Faça o fork do projeto
https://github.com/Aline160/projeto_final.git

2. Faça o checkout na branch main
`git checkout main`

3. Crie uma branch para realizar suas modificações
`git checkout -b feature/nome-da-sua-branch`

4. Após realizar as modificações, use o comando`git add .`

5. Faça o commit `git commit -m 'mensagem aqui'`

6. Faça o push `git push --set-upstream origin feature/nome-da-sua-branch`

7. Crie um novo Pull Request para a branch `feature/staging`


### Agradecimentos

A todos que se fizeram que ajudaram de forma direta e indireta na conclusão do bootcamp. A todas as professora, monitoras, a minha familia e a aquele que sempre me apoiou em cada decisão e em cada escolha. 

Created by *Aline Pereira* :woman_technologist:
 
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https:/https://www.linkedin.com/in/aline-pereira-70276161/)](https://www.linkedin.com/in/aline-pereira-70276161/) 



