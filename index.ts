import * as express from "express";
import { appendFile } from "fs";
const app = express();
const port = 3000;

app.get("/users/", (req, res) => {
  //req y res son 2 objetos que tienen un montón de información
  //req es el request, lo que llega al servidor de parte del cliente, navegador, postman
  //res es response, es lo que le respondo al pedido
  res.json(["todos los usuarios"]);
  //res.status(201).json(["todos los usuarios"]);
  //se pueden encadenar las funciones de express
});
app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "Hello world" });
});
app.get("/users/:pepe", (req, res) => {
  res.json({
    params: req.params,
    message: "un usuario X",
  });
});

//cualquiera de estos "app.get()" "app.post()" es un ENDPOINT

app.post("/users/", (req, res) => {
  res.status(200).json({
    id: 1,
    nombre: "usuario 1",
  });
});
app.patch("/users/:pepe", (req, res) => {
  //para indicarle a express que tiene que atajar cualquier parámetro
  //que se ingrese, le pongo :parametro
  const nuevoId = req.params.pepe;

  res.status(200).json({
    id: nuevoId,
    nombre: "usuario modificado",
  });
});
app.delete("/users/:pepe", (req, res) => {
  res.status(204);
});

app.listen(port, () => {
  console.log("ejemplo app escuchando puerto 3000");
});

// video de dev web simplified
// https://www.youtube.com/watch?v=SccSCuHhOw0&t=716s

// https://expressjs.com/en/guide/routing.html
//los pasos básicos para usar express es:

// 1) importas el paquete de express
// 2) lo instanciás [ hacés const app = express() ]
// (opcional) le indicás el puerto con una variable number (const port = 3000;)
// 3) hacés la configuración del server, las rutas, la lógica, y después le decís que arranque
// con app.listen(port, ()=>{ console.log("ejemplo app escuchando puerto 3000") })

// como regla general, cada vez que alguien use nuestra API, vamos a exponer
// la menor cantidad de datos posibles, sólo lo justo y necesario para la acción
// que se necesita realizar
