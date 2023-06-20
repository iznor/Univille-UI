export interface ISchoolController {
  getMeta: IControlFn<never, never>;
  getSchools: IControlFn<never, never>;
  getSchool: IControlFn<never, { schoolId: string }>;
  getPlayers: IControlFn<never, { schoolId: string }>;
  addClass: IControlFn<{ className: string }, { schoolId: string }>;
}
