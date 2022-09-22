import { Component, OnInit } from '@angular/core';
import { faPen, faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.gameBox.push("-")
    }
  }

  faPen = faPen;
  faCircle = faCircle;
  faXmark = faXmark;

  gameBox: string[] = [];

  turn: boolean = true;

  winMsg: string = "";

  game(val: number) {
    if(this.winMsg) {
      return;
    }
    if(this.gameBox[val] != '-') {
      alert("Bhai.. dusri chal ki")
      return;
    }
    if (this.turn) {
      this.gameBox[val] = "o";
      this.turn = !this.turn;
      this.isWin('o');
    } else {
      this.gameBox[val] = "x";
      this.turn = !this.turn;
      this.isWin('x');
    }
  }

  isWin(x: string) {
    if (x == 'o' || x == 'x') {
      if (this.gameBox[0] == this.gameBox[1] && this.gameBox[1] == this.gameBox[2] && this.gameBox[0] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[3] == this.gameBox[4] && this.gameBox[4] == this.gameBox[5] && this.gameBox[3] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[6] == this.gameBox[7] && this.gameBox[7] == this.gameBox[8] && this.gameBox[6] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[0] == this.gameBox[3] && this.gameBox[3] == this.gameBox[6] && this.gameBox[0] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[1] == this.gameBox[4] && this.gameBox[4] == this.gameBox[7] && this.gameBox[1] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[2] == this.gameBox[5] && this.gameBox[5] == this.gameBox[8] && this.gameBox[2] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[0] == this.gameBox[4] && this.gameBox[4] == this.gameBox[8] && this.gameBox[0] != '-') {
        this.whoWins(x)
      } else if (this.gameBox[2] == this.gameBox[4] && this.gameBox[4] == this.gameBox[6] && this.gameBox[2] != '-') {
        this.whoWins(x)
      } else {
        let x = 0;
        for (let i = 0; i < 9; i++) {
          if (this.gameBox[i] == "-") {
            x = 1;
            break;
          }
        }
        if (x == 0) {
          this.whoWins('d')
        }
      }
    }
  }

  whoWins(x: string) {
    x == 'o' ?
      this.winMsg = "Player One Wins"
      : x == 'x' ?
        this.winMsg = "Player Two Wins"
        : this.winMsg = "Draw"

  }




}
