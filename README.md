# 🛒 Products REST API

API RESTful para gerenciamento de produtos, construída com **Express**, **TypeScript** e **Zod** para validação de schemas.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Zod](https://img.shields.io/badge/Zod-validation-3E67B1?style=for-the-badge&logo=zod)](https://zod.dev/)
[![License](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)](LICENSE)

---

## 🚀 Tecnologias

| Tecnologia | Função |
|---|---|
| **Node.js** | Runtime |
| **TypeScript** | Tipagem estática |
| **Express** | Framework web |
| **Zod** | Validação de schemas |
| **tsx** | Execução de TS em dev |

## ✨ Funcionalidades

- ✅ Validação de schemas com **Zod** (`name`, `price`, `description`)
- ✅ Tipagem completa em todas as camadas (requests, responses, errors)
- ✅ Tratamento de erros centralizado com middleware global
- ✅ Classe de erro customizada (`AppError`)
- ✅ Parsing automático de erros de validação Zod para formato legível
- ✅ Middleware local e global configurável
- ✅ Suporte a paginação via query params

## 📡 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/products` | Listar produtos (suporta `?page=&limit=`) |
| `POST` | `/products` | Criar produto (body: `name`, `price`, `description`) |

### Exemplos

#### Criar produto

```bash
curl -X POST http://localhost:3333/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Mouse Gamer RGB","price":199.90,"description":"Mouse com 12000 DPI"}'
```

```json
{
  "name": "Mouse Gamer RGB",
  "price": 199.90,
  "description": "Mouse com 12000 DPI",
  "user_id": "123"
}
```

#### Erro de validação

```bash
curl -X POST http://localhost:3333/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Mouse"}'
```

```json
{
  "message": "Validation Error!",
  "issues": {
    "name": { "_errors": ["Name must be 6 or more characters."] },
    "price": { "_errors": ["Preço é obrigatório!"] }
  }
}
```

## 🚦 Como Rodar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor em modo development
npm run dev
```

A API estará disponível em `http://localhost:3333`.

> **Nota:** O servidor usa `tsx --watch` para hot-reload durante o desenvolvimento.

## 📁 Estrutura

```
/src
├── controllers/          # ProductsController com index e create
├── middlewares/          # Middleware customizado
├── routes/               # Rotas de products + index
├── types/                # Type declarations customizadas
├── utils/                # AppError class
└── server.ts             # Entry point + error handler global
```

## 💡 O que foi aprendido

- Uso do **Zod** para validação declarativa como alternativa a validação manual
- Tratamento centralizado de erros no Express
- Tipagem de `Request` e `Response` com TypeScript
- Diferença entre middleware global e middleware em rotas específicas

## 🔮 Melhorias Futuras

- [ ] Adicionar banco de dados (SQLite/PostgreSQL com Prisma ORM)
- [ ] Implementar rotas para `GET/:id`, `PUT/:id`, `DELETE/:id`
- [ ] Autenticação com JWT + middleware de autorização
- [ ] Adicionar testes unitários e de integração
- [ ] Documentação com Swagger/OpenAPI
- [ ] Adicionar logs com Winston ou Pino

## 👤 Autor

**Artur Ribeiro** — Desenvolvedor Full Stack em formação

- [GitHub](https://github.com/ArturRibeiroDev)
- [LinkedIn](https://www.linkedin.com/in/arturribeirodev/)
