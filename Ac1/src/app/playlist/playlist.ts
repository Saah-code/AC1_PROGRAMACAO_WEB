import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  imports: [FormsModule],
  selector: 'app-playlist',
  styleUrl: './playlist.css',
  templateUrl: './playlist.html',
})
export class Playlist {

  musicas: string[] = [
    'Umbrella - Rihanna',
    'Swim - BTS',
    'Livin on a Payer - Bon Jovi',
    'Die with a Smile - Bruno Mars feat. Lady Gaga',
    'Galileu - Fernandinho'
  ]

  musicaSelecionada: string = '';
  novaMusica: string = '';
  tocando: boolean = false;
  curtida: number=0

  
selecionarMusica(musica:string){
  this.musicaSelecionada=musica;
}

adicionarMusica(){
  if(this.novaMusica.trim() !==''){
    this.musicas.push(this.novaMusica);
    this.novaMusica = '';
  }
}

reproduzindoMusica(){
  this.tocando = !this.tocando;
}

  incrementar(){this.curtida++;}
  decrementar(){this.curtida--;}



}
