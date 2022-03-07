// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GeneroNota, Nota } = initSchema(schema);

export {
  GeneroNota,
  Nota
};