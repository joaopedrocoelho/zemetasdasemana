export interface Goal {
  id: string;
  title: string;
  points: number;
  worth: number;
}

export interface WeeklyGoalsData {
  award: string;
  currentPoints: number;
  targetPoints: number;
  metas: Goal[];
}
