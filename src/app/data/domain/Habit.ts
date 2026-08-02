

export class Habit {
  constructor(
    public id: string,
    public userID: string,
    public pillarID: string,
    public name: string,
    public description: string,
    public active: boolean,
    public createdAt: Date
  ) {
  }

}