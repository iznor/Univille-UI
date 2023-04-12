import { Mission } from '../pages/GameWizard/consts';
export class Game {
  private gameId: string | undefined;
  private classroomName: string | undefined;
  private timeLimitMinutes: number | undefined;
  private numberOfGroups: number | undefined;
  private missions: Mission[];
  private startTimeEpoch?: number | undefined;

  constructor(
    gameId: string,
    classroomName: string,
    timeLimitMinutes: number,
    numberOfGroups: number,
    missions: Mission[],
    startTimeEpoch?: number
  ) {
    this.gameId = gameId;
    this.classroomName = classroomName;
    this.timeLimitMinutes = timeLimitMinutes;
    this.numberOfGroups = numberOfGroups;
    this.missions = missions;
    startTimeEpoch
      ? (this.startTimeEpoch = startTimeEpoch)
      : (this.startTimeEpoch = undefined);
  }

  // Getter and setter for gameId
  getGameId(): string | undefined {
    return this.gameId;
  }
  setGameId(gameId: string): void {
    this.gameId = gameId;
  }

  // Getter and setter for classroomName
  getClassroomName(): string | undefined {
    return this.classroomName;
  }
  setClassroomName(classroomName: string): void {
    this.classroomName = classroomName;
  }

  // Getter and setter for startTimeEpoch
  getStartTimeEpoch(): number | undefined {
    return this.startTimeEpoch;
  }
  setStartTimeEpoch(startTimeEpoch: number): void {
    this.startTimeEpoch = startTimeEpoch;
  }

  // Getter and setter for timeLimitMinutes
  getTimeLimitMinutes(): number | undefined {
    return this.timeLimitMinutes;
  }
  setTimeLimitMinutes(timeLimitMinutes: number): void {
    this.timeLimitMinutes = timeLimitMinutes;
  }

  // Getter and setter for numberOfGroups
  getNumberOfGroups(): number | undefined {
    return this.numberOfGroups;
  }
  setNumberOfGroups(numberOfGroups: number): void {
    this.numberOfGroups = numberOfGroups;
  }

  // Getter and setter for missions
  getMissions(): Mission[] {
    return this.missions;
  }
  setMissions(missions: Mission[]): void {
    this.missions = missions;
  }
}
