import { DigitransitService } from './../services/digitransit.service';
import { Response } from '@angular/http';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  private images: any = [];
  private images2: string;
  private route: any = [];

  constructor(private mediaService:MediaService, private digitransit:DigitransitService) {}

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(
      (res) => {
        this.images = res.json();
        console.log(this.images);
        this.images2 = JSON.stringify(this.images);
      }
    );

    this.digitransit.fetchRoutes('Gransinmäki').subscribe(
      (res) => {

        this.route = res.data.stops;
        console.log(this.route);
      }
    )
  }

}
