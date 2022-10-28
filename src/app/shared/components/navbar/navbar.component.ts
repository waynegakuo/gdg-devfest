import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatMenuModule, MatIconModule, RouterModule, CommonModule ]
})
export class NavbarComponent implements OnInit {

  isActive = true;

  constructor() { }

  ngOnInit(): void {
  }

}
