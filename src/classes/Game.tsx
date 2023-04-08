import { Mission } from '../pages/GameWizard/consts';
export class Game {
  private gameId: string | undefined;
  private gameName: string | undefined;
  private startTimeEpoch: number | undefined;
  private timeLimitMinutes: number | undefined;
  private numberOfGroups: number | undefined;
  private missions: Mission[];

  constructor(
    gameId: string,
    gameName: string,
    startTimeEpoch: number,
    timeLimitMinutes: number,
    numberOfGroups: number,
    missions: Mission[]
  ) {
    this.gameId = gameId;
    this.gameName = gameName;
    this.startTimeEpoch = startTimeEpoch;
    this.timeLimitMinutes = timeLimitMinutes;
    this.numberOfGroups = numberOfGroups;
    this.missions = missions;
  }

  // Getter and setter for gameId
  getGameId(): string | undefined {
    return this.gameId;
  }
  setGameId(gameId: string): void {
    this.gameId = gameId;
  }

  // Getter and setter for gameName
  getGameName(): string | undefined {
    return this.gameName;
  }
  setGameName(gameName: string): void {
    this.gameName = gameName;
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
