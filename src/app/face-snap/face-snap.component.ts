import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from '../models/face-snap.model'
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,

              private router: Router) {
  }

  ngOnInit() {

    this.buttonText = 'Oh snap !';


  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }


}



