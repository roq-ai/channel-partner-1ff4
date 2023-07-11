import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  company_id: yup.string().nullable(),
});
