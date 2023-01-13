import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async ( req: Request, res: Response) => {
   const usuarios = await Usuario.findAll();
   res.json({ usuarios });
}

export const getUsuario = async ( req: Request, res: Response) => {
   const { id } = req.params;

   const usuario = await Usuario.findByPk( id );

   if ( usuario ) {
      res.json({ usuario });
   }else {
      res.status(404).json({
         msg: `No existe un usuario con el id ${ id }`
      });
   }

}

export const postUsuario = async ( req: Request, res: Response) => {
   const { body } = req;
   console.log("body",body);
   res.json({
      msg: 'postUsuario',
      body
   })
}

export const putUsuario = async ( req: Request, res: Response) => {
   const { id } = req.params;
   const { body } = req.params;

   res.json({
      msg: 'getUsuario',
      id
   })
}

export const deleteUsuario = async ( req: Request, res: Response) => {
   const { id } = req.params;

   res.json({
      msg: 'deleteUsuario',
      id
   })
}