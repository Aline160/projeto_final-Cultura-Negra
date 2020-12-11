# Projeto_final

# Valorização da Cultura Negra



![Cultura Negra](https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?cs=srgb&dl=pexels-bestbe-models-2170387.jpg&fm=jpg)

> Projeto final do bootcamp da @Reprograma em Parceria com o M.i.n.a.s do Porto Digital- Recife. 

# Introdução


## Objetivos

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
| get|"/moda"|Visualiza todos os dados do banco de dados;|
| get|"/:Tipo"|Visualiza todos os dados que possue o tipo de profissional que você deseja|
|post|"/"|Adicionar novos profissionais|
|post|"/login"|Realiza login dos profissionais|
|delete|"/:id"|Remove um profissional através do ID|
|put|:id"|Atualiza um profissional atraves do ID|

#### **Lugares**

|Método|Recurso|Utilização|
|:------:|:-------:|----------|
| get|"/"|Visualiza o index|
| get|"/lugares"|Visualiza todos os dados cadastrado do banco;|
| get|"/tipo/:Tipo"|Visualiza todos os dados que são cadastrado no tipo que você deseja|
|get|"/:id"|Busca o lugar pelo ID cadastrado|
|get|"/cidade/:cidade"|Busca o lugar pelo ID cadastrado|
|post|"/"|Adicionar novos locais|
|delete|"/:id"|Remove um lugar através do ID|
|put|:id"|Atualiza um lugar atraves do ID|


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

Created by *Aline Pereira* :woman_technologist:
 
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https:/https://www.linkedin.com/in/aline-pereira-70276161/)](https://www.linkedin.com/in/aline-pereira-70276161/) 



