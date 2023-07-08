import { Component } from '@angular/core';
import { ITecnologies } from './interfaces/tecnologies.interface';
import { tecnologies } from 'src/data/tecnologies';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listTecnologies: Array<ITecnologies> = []

  constructor() {
    this.listTecnologies = tecnologies
  }

}
