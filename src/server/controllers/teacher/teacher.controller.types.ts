export interface ITeacherController {
  teacherSignup: IControlFn<
    {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      school: string;
    },
    never
  >;
  teacherLogin: IControlFn<{ email: string; password: string }, never>;
}
