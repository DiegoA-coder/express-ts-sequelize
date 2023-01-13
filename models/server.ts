import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from "../db/connection";

export class Server {

   private app: Application;
   private port: string;
   private apiPaths = {
      usuarios: '/api/usuarios'
   }

   constructor(  ) {
      this.app = express();
      this.port = process.env.PORT || '8000';
      this.dbConnection()
      this.middlewares()
      this.routes()
      //html estaticos
      this.app.use(express.static('public'));
   }

   async dbConnection() {
      try {
         await db.authenticate();
         console.log('Database online');

      } catch (error: any) {
         throw new Error(error);
      }
   }

   //estos son funciones que van a ejecutarse antes de las rutas
   middlewares() {
      //cors config
      this.app.use(cors());

      //lectura del body
      this.app.use(express.json());


   }

   routes() {
      this.app.use(this.apiPaths.usuarios, userRoutes);
   }

   //levantar el servidor
   listen() {
      this.app.listen(this.port, () => {
          console.log('Server running on port ' + this.port);
      })
   }
}
