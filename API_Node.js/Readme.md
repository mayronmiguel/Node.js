# 📚 API de Livraria

Esta é uma API para gerenciamento de livros em uma livraria, construída com **Node.js**, **Express** e **MongoDB**. A API permite operações como cadastro, listagem, atualização e remoção de livros.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose** (ORM para MongoDB)
- **Dotenv** (Gerenciamento de variáveis de ambiente)
- **Nodemon** (Monitoramento do servidor durante o desenvolvimento)

## 📌 Funcionalidades

- Criar, listar, atualizar e deletar livros.
- Integração com banco de dados MongoDB.
- Estrutura baseada nos princípios de API REST.

## 📂 Estrutura do Projeto

```
📁 api-livraria
│-- 📁 src
│   ├── 📁 config       # Configuração do banco de dados
│   ├── 📁 controllers  # Controladores para manipular as requisições
│   ├── 📁 models       # Modelos para representar os dados no MongoDB
│   ├── 📁 routes       # Definição das rotas
│   ├── 📁 services     # Lógica de negócios (opcional)
│   ├── index.js       # Ponto de entrada da aplicação
│-- 📄 .env             # Variáveis de ambiente
│-- 📄 package.json     # Configuração do projeto
│-- 📄 README.md        # Documentação do projeto
```

## 🔧 Instalação

1. Clone este repositório:
```sh
   git clone https://github.com/seu-usuario/api-livraria.git
```

2. Acesse a pasta do projeto:
```sh
   cd api-livraria
```

3. Instale as dependências:
```sh
   npm install
```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione suas configurações do banco de dados.

5. Inicie o servidor:
```sh
   npm start
```

## 📡 Rotas da API

| Método | Rota           | Descrição                        |
|--------|---------------|--------------------------------|
| GET    | `/books`      | Lista todos os livros         |
| GET    | `/books/:id`  | Retorna um livro específico   |
| POST   | `/books`      | Adiciona um novo livro        |
| PUT    | `/books/:id`  | Atualiza um livro existente   |
| DELETE | `/books/:id`  | Remove um livro               |

## 📌 Contribuição

Sinta-se à vontade para contribuir! Abra uma issue ou faça um fork do repositório.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

💡 *Desenvolvido com Node.js, Express e MongoDB.*
