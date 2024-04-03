# Angular CRUD de Usuários com Firebase e Autenticação

Este é um projeto Angular que implementa um CRUD (Create, Read, Update, Delete) de usuários utilizando Firebase para autenticação e armazenamento de dados. O armazenamento temporário dos dados do usuário é realizado através do `sessionStorage`. Para estilização, foi utilizado Bootstrap 5 e Angular Material.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- Node.js e npm (Node Package Manager): [Instalação do Node.js](https://nodejs.org/)
- Angular CLI: Você pode instalar o Angular CLI globalmente usando o seguinte comando:
  ```
  npm install -g @angular/cli
  ```

## Instalação

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:
   ```
   npm install
   ```

## Configuração do Firebase

1. Acesse o [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto.
2. No console do Firebase, adicione um aplicativo da web ao seu projeto.
3. Copie as credenciais do SDK Firebase e substitua as configurações no arquivo `src/environments/environment.ts` com as suas próprias credenciais.

## Executando o Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você fizer alterações no código-fonte.

## Funcionalidades

- **Cadastro de Usuários:** Adicione novos usuários ao sistema.
- **Listagem de Usuários:** Visualize todos os usuários cadastrados.
- **Edição de Usuários:** Atualize as informações de um usuário existente.
- **Exclusão de Usuários:** Remova usuários do sistema.

## Tecnologias Utilizadas

- Angular
- Firebase (para autenticação e armazenamento de dados)
- Bootstrap 5
- Angular Material

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
