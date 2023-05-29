# Desafio RealTimeChat

Projeto com o objetivo de criar um chat em tempo real, com login, registro e criação de mensagens.

Requerimentos: 
- Node.js
- PostgresSQL

Utilize o comando abaixo para instalar as dependências:

````
npm install
````
<br>

Para rodar as migrations utilize o comando:

```
npm typeorm migration:run -d src/data-source.ts
```

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local


Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
npm run dev
````

<br>
Link da documentação da API: https://api-realtimechat.vercel.app/
