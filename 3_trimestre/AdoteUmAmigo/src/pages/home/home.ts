import { Component } from '@angular/core';
import { NavController, ToastController, AlertController} from 'ionic-angular';

import { DetalhesPage } from '../detalhes/detalhes';

import { ListaAnimais } from '../../model/ListaAnimais';
// import { EditarListaAnimaisPage } from '../editar-listaAnimais/editar-listaAnimais';
import { ListaAnimaisService } from '../../service/ListaAnimais.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animal;
  animais;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public alertCtrl: AlertController, private listaAnimaisService: ListaAnimaisService ) {
    this.items = this.listaAnimaisService.getListaAnimais().valueChanges();
    this.animal = {especie:'',nome:'',idade:'',sexo:'',porte:''};
    this.animais = [];

  }

      cadastrar(){
          this.animais.push(this.animal);

          this.toastCtrl.create({
            message: 'Animal '+this.animal.nome +" adicionado!!",
            duration: 3000
          }).present();

          this.animal = {especie:'',nome:'',idade:'',sexo:'',porte:''};
          console.log(this.animais);
      }

      mostrarAnimais(){
        this.navCtrl.push(DetalhesPage, {'animais':this.animais});
      }

  chamarTelaPaginaDetalhes(){

    this.navCtrl.push(DetalhesPage);
  }
      private listaAnimais: ListaAnimais = new ListaAnimais();

    items: Observable<ListaAnimais[]>


    converterNumber(numero): number {
      return parseFloat(numero);
    }

    cadastrarListaAnimais() {
      this.listaAnimaisService.addListaAnimais(this.listaAnimais);
    }

    editarRemover(listaAnimaisEditarRemover: ListaAnimais) {
      // this.navCtrl.push(EditarListaAnimais, { listaAnimais: listaAnimaisEditarRemover });
    }
}
