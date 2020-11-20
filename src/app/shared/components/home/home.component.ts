import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCar = faCar;
  faMotorcycle = faMotorcycle;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
