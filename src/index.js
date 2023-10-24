import { Elysia } from 'elysia';

const port = 3000;
const app = new Elysia();

app.get('/', () => 'Hello Elysia').listen(port);

console.log(`Example app listening on port ${app.server.port}!`);
