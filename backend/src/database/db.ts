import { connect } from 'mongoose';
import dotenv from 'dotenv';
import { addPages } from '../seeder';
dotenv.config();
/*
----------------
  DB Connection
----------------
*/
declare var process: {
  env: {
    DB_URL: string;
  };
};

export const db = connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Database connected successfully!!!');
    addPages(); // seed pages
  })
  .catch((error: any) => {
    console.log('Error in database connection', error.message);
  });
