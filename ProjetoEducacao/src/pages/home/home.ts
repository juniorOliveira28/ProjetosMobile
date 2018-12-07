import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aluno;
  alunos;
  constructor(public navCtrl: NavController,
      public toastCtrl: ToastController,
      public alertCtrl: AlertController) {
    this.aluno = {nome:'',nota1:'',nota2:'',nota3:'',media:''};
    this.alunos = [];
  }

  cadastrarComDialog(){
    this.alertCtrl.create({
      title: 'Cadastro',
      message: "Aluno",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Aluno'
        },
          {
            name: 'nota1',
            placeholder: 'Nota 1° Trimestre'
          },
          {
            name: 'nota2',
            placeholder: 'Nota 2° Trimestre'
          },

        {
            name: 'nota3',
            placeholder: 'Nota 3° Trimestre'
          },

      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.aluno.nome = data.nome;
            this.aluno.nota1 = data.nota1;
            this.aluno.nota2 = data.nota2;
            this.aluno.nota3 = data.nota3;

            this.aluno.media =
             (Number.parseFloat(data.nota1) +
          Number.parseFloat(data.nota2) +
            Number.parseFloat(data.nota3)) / 3;
          //   this.aluno.media = (Float.parseFloat(this.aluno.nota1) +
          // Float.parseFloat(this.aluno.nota2) +
          //   Float.parsefloat(this.aluno.nota1)) / 3;

            // this.aluno.trimestre = data.trimestre;
            this.alunos.push(this.aluno);
            this.toastCtrl.create({
              message: 'Aluno '+this.aluno.nome +" adicionado!!",
              duration: 3000
            }).present();
            this.aluno = {nome:'',nota1:'', nota2:'', nota3:'', media:''};
            console.log('Saved clicked');
          }
        }
      ]
    }).present();

  }


  mostrarAlunos(){
    this.navCtrl.push(DetalhesPage, {'alunos':this.alunos});
  }


}
