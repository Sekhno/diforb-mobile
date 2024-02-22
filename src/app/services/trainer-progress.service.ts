import { Injectable } from '@angular/core';

type ProgressType = { id: number, completed: boolean };

@Injectable({
  providedIn: 'root'
})
export class TrainerProgressService {

  private _progress = new Map<number, boolean>();

  constructor() {
    const progress = localStorage.getItem('progress');

    if (progress) {
      const parsedProgress: number[] = JSON.parse(progress);
      parsedProgress.forEach((id) => {
        this._progress.set(id, true);
      });

      console.log(...this._progress.keys())
    }
  }

  addProgress(id: number, completed: boolean) {
    this._progress.set(id, completed);

    this._saveProgress();
  }

  isProgressCompleted(id: number): boolean {
    return this._progress.get(id) || false;
  }

  private _saveProgress() {
    localStorage.setItem('progress', JSON.stringify([...this._progress.keys()]));
  }
}
