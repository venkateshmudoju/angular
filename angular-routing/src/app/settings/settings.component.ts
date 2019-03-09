import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  routes = [
    {linkName: 'Profile', url: 'profile'},
    {linkName: 'Contact Info', url: 'contact'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
