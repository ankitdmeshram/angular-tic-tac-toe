import { Component, Input, OnInit } from '@angular/core';

import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCircle = faCircle;
  faPen = faPen;
  faTimes = faTimes;

  @Input() iconName: string = ""

  


}
