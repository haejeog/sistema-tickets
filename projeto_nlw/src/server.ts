import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => console.log("server is running in port 3333"));
