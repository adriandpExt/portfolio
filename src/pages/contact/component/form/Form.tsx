import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Form = () => {
  const validationSchema = yup.object({
    names: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });

  const bookTestForm = useFormik({
    initialValues: {
      names: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={`bg-white w-96 p-10`}>
      <form onSubmit={bookTestForm.handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          id="names"
          name="names"
          placeholder="names"
          variant="outlined"
          value={bookTestForm.values.names}
          onChange={bookTestForm.handleChange}
          error={
            bookTestForm.touched.names && Boolean(bookTestForm.errors.names)
          }
          helperText={bookTestForm.touched.names && bookTestForm.errors.names}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          placeholder="email"
          variant="outlined"
          value={bookTestForm.values.email}
          onChange={bookTestForm.handleChange}
          error={
            bookTestForm.touched.email && Boolean(bookTestForm.errors.email)
          }
          helperText={bookTestForm.touched.email && bookTestForm.errors.email}
        />

        <TextField
          fullWidth
          id="subject"
          name="subject"
          placeholder="subject"
          variant="outlined"
          value={bookTestForm.values.subject}
          onChange={bookTestForm.handleChange}
          error={
            bookTestForm.touched.subject && Boolean(bookTestForm.errors.subject)
          }
          helperText={
            bookTestForm.touched.subject && bookTestForm.errors.subject
          }
        />

        <TextField
          fullWidth
          multiline
          rows={5}
          id="message"
          name="message"
          placeholder="message"
          variant="outlined"
          value={bookTestForm.values.message}
          onChange={bookTestForm.handleChange}
          error={
            bookTestForm.touched.message && Boolean(bookTestForm.errors.message)
          }
          helperText={
            bookTestForm.touched.message && bookTestForm.errors.message
          }
        />

        <Button color="primary" variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
