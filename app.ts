import express from 'express';
import * as http from 'http';

import { CommonRoutesConfig } from './common/common.routes.config';
import { TypeRoutes } from './type/type.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// Middleware para procesar JSON
app.use(express.json());

// Configuración de rutas
routes.push(new TypeRoutes(app));

// Mensaje de ejecución
const runningMsg = `Server running at http://localhost:${port}`;

// Ruta raíz
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMsg);
});

// Inicia el servidor solo si no está en modo de prueba
if (process.env.NODE_ENV !== 'test') {
    server.listen(port, () => {
        routes.forEach((route: CommonRoutesConfig) => {
            debugLog(`Routes configured for ${route.getName()}`);
        });
        console.log(runningMsg);
    });
}

// Exportar la app para pruebas
export default app;
