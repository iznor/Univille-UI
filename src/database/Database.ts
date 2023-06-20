import mongoose from 'mongoose';
import path from 'path';
import './plugins';
import { dataInitialization } from './db.utils';
import { Logger } from '../utils';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
};

export interface BaseModel extends mongoose.Model<mongoose.Document> {}

const preloadedSchemas = ['Location', 'Target', 'Hint'];

mongoose.set('strictQuery', true);

// Define a singleton class to manage Mongoose schemas and models
class Database {
  private static instance: Database;

  private connection: mongoose.Connection;

  private entitiesDir: string = path.join(__dirname, 'models');

  private constructor() {
    // Connect to the database
    mongoose.connect(process.env.DB_HOST ?? '', options);
    this.connection = mongoose.connection;

    this.connection.on('connected', () => {
      dataInitialization().then(console.log).catch(console.warn);
      Logger.info('Database connected');
    });
    // Add an event listener for the 'error' event
    this.connection.on('error', (error) => {
      Logger.error('MongoDB connection error:', error);
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public logStatus(): void {
    Logger.info('Database status:', this.connection.readyState);
  }

  public loadEntitySchema(name: string): mongoose.Schema {
    const schemaPath = path.join(this.entitiesDir, `${name}.schema.ts`);
    const schema = require(schemaPath);
    return new mongoose.Schema(schema.default);
  }

  public loadEntityModel(name: string): void {
    const schema = this.loadEntitySchema(name);
    const modelPath = path.join(this.entitiesDir, `${name}.model.ts`);
    const model = require(modelPath);
    this.connection.model(name, schema, model.default);
  }
}

export default Database.getInstance();

// Preload schemas
// preloadedSchemas.forEach((schemaName) => {
//   const schemaPath = path.join(
//     this.entitiesDir,
//     schemaName,
//     `${schemaName.toLowerCase()}.schema.ts`
//   );
//   const schema = require(schemaPath);
//   console.log(`Preloaded schema: ${schemaName}`);
// }, this);
