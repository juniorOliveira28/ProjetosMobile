import { Injectable } from '@angular/core';

import { ListaAnimais } from '../model/ListaAnimais';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ListaAnimaisService {

  itemsCollection: AngularFirestoreCollection<ListaAnimais> = this.afs.collection<ListaAnimais>('listaAnimais');

  constructor(private afs: AngularFirestore) { }
  getListaAnimais() {
    return this.itemsCollection;
  }
  addListaAnimais(listaAnimais: ListaAnimais) {
    const id = this.afs.createId();
    listaAnimais.key = id;
    this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(listaAnimais)));
  }
  updateListaAnimais(listaAnimais: ListaAnimais) {
    return this.itemsCollection.doc(listaAnimais.key).update(listaAnimais);
  }
  removeListaAnimais(listaAnimais: ListaAnimais) {
    // return this.itemsCollection.doc(listaAnimais.key).delete();
  }
}
