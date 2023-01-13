import { Sequelize } from 'sequelize'

const db = new Sequelize('sommos', 'postgres', 'root', {
  host: '127.0.0.1',
  dialect: 'postgres',
   //loggin: false
})

export default db