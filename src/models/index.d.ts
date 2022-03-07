import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GeneroNotaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class GeneroNota {
  readonly id: string;
  readonly notaID: string;
  readonly nombe_genero?: string;
  readonly Descripcion?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GeneroNota, GeneroNotaMetaData>);
  static copyOf(source: GeneroNota, mutator: (draft: MutableModel<GeneroNota, GeneroNotaMetaData>) => MutableModel<GeneroNota, GeneroNotaMetaData> | void): GeneroNota;
}

export declare class Nota {
  readonly id: string;
  readonly note: string;
  readonly GeneroNotas?: (GeneroNota | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Nota, NotaMetaData>);
  static copyOf(source: Nota, mutator: (draft: MutableModel<Nota, NotaMetaData>) => MutableModel<Nota, NotaMetaData> | void): Nota;
}