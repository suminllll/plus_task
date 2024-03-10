abstract class Work {
  constructor(private _indicator = 0) {}

  start() {
    setInterval(() => {
      this._indicator += 10;
      this._draw();
    }, 1000);
  }

  abstract _draw(): void;
}

class WorkA extends Work {
  _draw(): void {
    /* linear progress drawing logic */
  }
}

class WorkB extends Work {
  constructor() {
    super(10);
  }

  _draw(): void {
    /* circular progress drawing logic */
  }
}

const workA = new WorkA();
const workB = new WorkB();

workA.start();
workB.start();
