import * as yup from 'yup';

export const dealValidationSchema = yup.object().shape({
  name: yup.string().required(),
  company_id: yup.string().nullable(),
});
