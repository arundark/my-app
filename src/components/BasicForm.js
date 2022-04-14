import { useFormik } from "formik";
import * as yup from "yup";

export function BasicForm() {
  const formValidationSchema = yup.object({
    email: yup
      .string()
      .min(5)
      .required()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid Email Address"
      ),
    password: yup.string().min(8, "password must 8 char ").required().max(12),
  });
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
