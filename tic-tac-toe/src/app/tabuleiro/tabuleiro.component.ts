import { Component, OnInit } from '@angular/core';
import { espacoEnum } from '../espaco/espacoEnum';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent implements OnInit {
    private currentPlayer:espacoEnum;
    public tabuleiro:espacoEnum[][];
    private isGameOver: boolean;
    public statusMessage;

  constructor() {
    this.currentPlayer = espacoEnum.X
    this.tabuleiro = []
    this.isGameOver = false;
    this.statusMessage = ''
   }

  ngOnInit(): void {
    this.newGame();
  }
  get gameOver():boolean {
    return this.isGameOver;
  }
  newTabuleiro(){

  }
  newGame(){
    this.tabuleiro=[];
    for(let row = 0; row<3; row++){
      this.tabuleiro[row]=[];
      for(let col=0; col<3;col++){
        this.tabuleiro[row][col]=espacoEnum.EMPTY;
      }
    }
    this.currentPlayer = espacoEnum.X;
    this.isGameOver = false;
    this.statusMessage = `Player ${this.currentPlayer}'s turn`;

  }
  jogada(row:number, col:number):void{
    if(!this.isGameOver && this.tabuleiro[row][col] === espacoEnum.EMPTY){
      this.tabuleiro[row][col] = this.currentPlayer;
      if(this.isDraw()){
        this.statusMessage='Empate';
        this.isGameOver = true;
      }
      else if(this.isWin()){
        this.statusMessage=`Player ${this.currentPlayer} venceu`;
        this.isGameOver=true;
      }
      else{
        this.currentPlayer = this.currentPlayer === espacoEnum.X ? espacoEnum.O: espacoEnum.X
      }
    }
  }
  isDraw():boolean{
    for(const colunas of this.tabuleiro){
      for(const cols of colunas){
        if(cols=== espacoEnum.EMPTY){
          return false;
        }
      }
    }
    return !this.isWin();
  }
  isWin(): boolean{
    for(const colunas of this.tabuleiro){
      if(colunas[0] === colunas[1]&& colunas[0] === colunas[2] && colunas[0]!== espacoEnum.EMPTY){
        return true;
      }
    }
    for(let x = 0; x<this.tabuleiro[0].length;x++){
      if(this.tabuleiro[0][x]=== this.tabuleiro[1][x] && this.tabuleiro[0][x] === this.tabuleiro[2][x]&& this.tabuleiro[0][x] !== espacoEnum.EMPTY){
        return true;
      }
    }
    if(this.tabuleiro[0][0]===this.tabuleiro[1][1]&&this.tabuleiro[0][0]===this.tabuleiro[2][2]&&this.tabuleiro[0][0]!==espacoEnum.EMPTY){
      return true
    }
    if(this.tabuleiro[0][2]===this.tabuleiro[1][1]&&this.tabuleiro[0][2]===this.tabuleiro[2][0]&&this.tabuleiro[0][2]!==espacoEnum.EMPTY){
      return true
    }
    return false;
  }

}
