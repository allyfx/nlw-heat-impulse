import 'dotenv/config';
import express from 'express';
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import { router } from './routes';


const app = express();
app.use(cors());
app.use(express.json());

const serveHttp = http.createServer(app);

const io = new Server(serveHttp, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log("Usuário conectado no socket: ", socket.id);
})

app.use(router);

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_OAUTH_URL =
  `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;

app.get("/github", (req, res) => res.redirect(GITHUB_OAUTH_URL));

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;

  return res.json(code);
});

export { serveHttp, io };
