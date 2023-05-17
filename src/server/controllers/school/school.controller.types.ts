export interface ISchoolController {
  getSchools: IControlFn<never, never>;
  getSchool: IControlFn<never, { schoolId: string }>;
  addClass: IControlFn<{ className: string }, { schoolId: string }>;
}
