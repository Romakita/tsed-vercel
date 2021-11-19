import http from "http"
import handler from "./main";

const server = http.createServer(handler);
server.listen(3001);
