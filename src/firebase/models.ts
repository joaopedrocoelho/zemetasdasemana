export interface Goal {
  title: string;
  points: number;
  worth: number;
}

export interface activeWeek {
  award: string;
  currentPoints: number;
  targetPoints: number;
  updatedAt: number;
  deadline: number;
}
