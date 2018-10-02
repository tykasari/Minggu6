import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  status = false;
  tulisan = '';
  servers = ['TesServer', 'TesServer 2'];
  showPar = false;
  hallo = [];

  constructor() { }

  ngOnInit() {
  }
  onCreationStatus(){
    if(this.status==false){
        this.tulisan='Tyka Amelia Sari';
        this.status= true;
    } else {
        this.tulisan='';
        this.status= false;
    }
    this.hallo.push(this.hallo.length+1);
  }
}
