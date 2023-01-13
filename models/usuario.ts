import {DataTypes} from 'sequelize'
import db from "../db/connection";

const Usuario = db.define('users', {
   name: {
      type: DataTypes.STRING,
   },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
   role: {
      type: DataTypes.STRING,
   },
   phoneNumber: {
      type: DataTypes.STRING,
   },
   referralCode: {
      type: DataTypes.STRING,
   }
},);

export default Usuario;