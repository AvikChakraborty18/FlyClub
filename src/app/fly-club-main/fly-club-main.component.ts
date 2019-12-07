import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fly-club-main',
  templateUrl: './fly-club-main.component.html',
  styleUrls: ['./fly-club-main.component.css']
})
export class FlyClubMainComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['myprofile'],{relativeTo: this.activatedRoute})
  }

}
