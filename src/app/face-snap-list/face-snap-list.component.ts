import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {interval, tap, take, Subject, takeUntil} from "rxjs"

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit, OnDestroy{
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>

  constructor (private faceSnapsServices : FaceSnapsService) {

  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>()
    this.faceSnaps = this.faceSnapsServices.getAllFaceSnaps();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      take(3),
      tap(  console.log)
    ).subscribe()
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}

