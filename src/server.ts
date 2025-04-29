import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
    console.log("Entrou no end pont Hello!");
    return "Ola mundo@" 
})
app.post("/hello", () => {
    console.log("Entrou no methodo post Hello!");
    return "Post methodo Ola mundo@" 
})

//.then espera finalizar
app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando liso na 3333!!")
})