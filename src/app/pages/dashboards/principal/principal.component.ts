import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  urlMetabase: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

    if (this.urlMetabase = this.sanitizer.bypassSecurityTrustResourceUrl( `http://localhost:2000/public/dashboard/a2d73c59-4d85-427a-9f90-556fe77ff89a`)) {

    }


  }

  ngOnInit() {
  }

}
