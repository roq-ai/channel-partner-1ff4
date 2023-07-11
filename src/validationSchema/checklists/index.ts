import * as yup from 'yup';

export const checklistValidationSchema = yup.object().shape({
  name: yup.string().required(),
  company_id: yup.string().nullable(),
});
