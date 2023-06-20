import { model } from 'mongoose';
import type { ISchoolDocument, ISchoolModel } from './school.types';
import { SchoolSchema } from './school.schema';

const SchoolModel = model<ISchoolDocument, ISchoolModel>(
  'School',
  SchoolSchema,
  'schools'
);

export { SchoolModel };
