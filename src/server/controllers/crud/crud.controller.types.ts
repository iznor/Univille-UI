export interface ICrudController<T> {
  filter: IControlFn<Partial<T>>;
  create: IControlFn<T>;
  edit: IControlFn<Partial<T>, { identity: string }>;
  delete: IControlFn<never, { identity: string }>;
}
