import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Field, FormikProvider, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createNewGym, getGym } from "../api-services/createGym";
interface GymNameProps {
  name: string;
  id: string;
}

interface IFieldProps {
  field: {
    value: string;
  };
  meta: {
    touched: boolean;
    error: string;
  };
}

const CreateGym = () => {
  const [gymNameData, setGymNameData] = useState<GymNameProps[]>([]);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: async () => {
      console.log(formik.values);
      const newGymData = { ...formik.values };
      const response = await createNewGym(newGymData);
      console.log("Response Data:", response.data);

      const gymId = response.data.data.id;
      console.log(gymId);

      localStorage.setItem("GymId", gymId);

      loadGymData();
      navigate("/dashboard");
      formik.handleReset(null);
    },
  });

  const getGymData = async () => {
    try {
      const response = await getGym();
      const gymData = response.data.data;
      localStorage.setItem("gymData", JSON.stringify(gymData));
      return gymData;
    } catch (error) {
      console.error("");
      return [];
    }
  };

  const loadGymData = async () => {
    const loadData = await getGymData();
    setGymNameData(loadData);
  };

  useEffect(() => {
    loadGymData();
  }, []);
  return (
    <Container component="form" maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">
        GymBook
      </Typography>
      <Paper
        elevation={12}
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography component="h1" variant="h4">
          Add Gym Name
        </Typography>
        <FormikProvider value={formik}>
          <Field name="name">
            {({ field, meta }: IFieldProps) => (
              <TextField
                {...field}
                label="Gym Name"
                variant="standard"
                fullWidth
                autoFocus
                sx={{ mx: "auto" }}
                error={meta.touched && meta.error ? true : false}
                helperText={meta.touched && meta.error ? meta.error : ""}
              />
            )}
          </Field>

          <Button
            variant="contained"
            sx={{ mt: 4 }}
            fullWidth
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Submit
          </Button>
        </FormikProvider>
      </Paper>
    </Container>
  );
};

export default CreateGym;
