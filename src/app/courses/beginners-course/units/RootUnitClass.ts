import {setLevel} from "../../../../providers/storage/storage";

export class RootUnit {
  currentTeo = 1
  currentExc = 1;
  progress = 0;

  protected unitLevel  = '0';

  finish() {
    setLevel('level', this.unitLevel).then(() => {
      console.log(`Level set to ${this.unitLevel}`)
    })
  }

  delay(nextStep: number) {
    setTimeout(() => {
      this.currentExc = nextStep;
    }, 1000)
  }
}
