import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../Navbar";

interface MembersProps {
  firstName: string;
  lastName: string;
  mobile: string;
  countryShortCode: string;
  countryCode: string;
  dateOfJoing: string;
  planId: string;
  batchId: string;
  startDate: string;
  trainingType: string;
  admissionFees: number;
  discount: number;
  discountType: string;
  gender: string;
  email: string;
  dob: string;
  address: string;
  notes: string;
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

const steps = ["Basic Detail", "Plan Detail", "Personal Details"];

const AddMember = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik<MembersProps>({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      countryShortCode: "",
      countryCode: "",
      dateOfJoing: "",
      planId: "",
      batchId: "",
      startDate: "",
      trainingType: "",
      admissionFees: 0,
      discount: 0,
      discountType: "",
      gender: "",
      email: "",
      dob: "",
      address: "",
      notes: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      countryShortCode: Yup.string()
        .required("Country Short Code is required")
        .max(10, "10 characters are required"),
      countryCode: Yup.string().required("First Name is required"),
      mobile: Yup.string().required("Mobile no is required"),
      dateOfJoing: Yup.string().required("Date is required"),
      planId: Yup.string().required("Plan Id is required"),
      batchId: Yup.string().required("batch Id is required"),
      startDate: Yup.number().required("Start Date is required"),
      trainingType: Yup.number().required("Training Type is required"),
      admissionFees: Yup.number().required("Admission Fees is required"),
      discountType: Yup.string().required("Discount Type Type is required"),
      discount: Yup.number().required("Discount is required"),
      gender: Yup.string().required("Gender is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      dob: Yup.string().required("Date Of Birth is required"),
      address: Yup.string().required("Address is required"),
      notes: Yup.string().required("Notes Type Type is required"),
    }),
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <FormikProvider value={formik}>
            <Field name="firstName">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="standard"
                  fullWidth
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="lastName">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="countryShortCode">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Country Short Code
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country Short Code"
                  >
                    <MenuItem value={"AF"}>AF</MenuItem>
                    <MenuItem value={"AU"}>AU</MenuItem>
                    <MenuItem value={"BD"}>BD</MenuItem>
                    <MenuItem value={"BR"}>BR</MenuItem>
                    <MenuItem value={"CA"}>CA</MenuItem>
                    <MenuItem value={"CN"}>CN</MenuItem>
                    <MenuItem value={"DE"}>DE</MenuItem>
                    <MenuItem value={"IS"}>IS</MenuItem>
                    <MenuItem value={"IN"}>IN</MenuItem>
                    <MenuItem value={"MY"}>MY</MenuItem>
                    <MenuItem value={"SG"}>SG</MenuItem>
                    <MenuItem value={"CH"}>CH</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>

            <Field name="countryCode">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    countryCode
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country Code"
                  >
                    <MenuItem value={"+93"}>+93</MenuItem>
                    <MenuItem value={"+61"}>+61</MenuItem>
                    <MenuItem value={"+880"}>+880</MenuItem>
                    <MenuItem value={"+55"}>+55</MenuItem>
                    <MenuItem value={"+1"}>+1</MenuItem>
                    <MenuItem value={"+86"}>+86</MenuItem>
                    <MenuItem value={"+49"}>+49</MenuItem>
                    <MenuItem value={"+354"}>+354</MenuItem>
                    <MenuItem value={"+91"}>+91</MenuItem>
                    <MenuItem value={"+60"}>+60</MenuItem>
                    <MenuItem value={"+65"}>+65</MenuItem>
                    <MenuItem value={"+41"}>+41</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="mobile">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Mobile"
                  variant="standard"
                  fullWidth
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="dateOfJoing">
              {({ field, meta }: IFieldProps) => {
                return (
                  <TextField
                    {...field}
                    label="Date Of Joining"
                    variant="standard"
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    sx={{ mx: "auto" }}
                    error={meta.touched && meta.error ? true : false}
                    helperText={meta.touched && meta.error ? meta.error : ""}
                  />
                );
              }}
            </Field>
          </FormikProvider>
        );
      case 1:
        return (
          <FormikProvider value={formik}>
            <Field name="planId">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">Plan Id</InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Plan Id"
                  >
                    <MenuItem value={"morning"}>Morning</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="batchId">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Batch Id
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Batch Id"
                  >
                    <MenuItem value={"morning"}>Morning</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="startDate">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Start Date"
                  variant="standard"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="trainingType">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Training Type
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Training Type"
                  >
                    <MenuItem value={"General Training"}>
                      General Training
                    </MenuItem>
                    <MenuItem value={"Personal Training"}>
                      Personal Training
                    </MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="admissionFees">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Admission Fees"
                  variant="standard"
                  fullWidth
                  type="number"
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="discountType">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Discount Type
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Discount Type"
                  >
                    <MenuItem value={"percent"}>Percent</MenuItem>
                    <MenuItem value={"amount"}>Amount</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="discount">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Discount"
                  variant="standard"
                  fullWidth
                  type="number"
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
          </FormikProvider>
        );
      case 2:
        return (
          <FormikProvider value={formik}>
            <Field name="gender">
              {({ field, meta }: IFieldProps) => (
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="standard"
                  fullWidth
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="dob">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Date Of Birth"
                  variant="standard"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="address">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Address"
                  variant="standard"
                  fullWidth
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="notes">
              {({ field, meta }: IFieldProps) => (
                <TextField
                  {...field}
                  label="Notes"
                  variant="standard"
                  fullWidth
                  sx={{ mx: "auto" }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
          </FormikProvider>
        );
      default:
        return null;
    }
  };

  const previousPageHandler = () => {
    handleBack();
  };

  const nextPageHandler = () => {
    handleNext();
  };

  const handlePlaceOrder = () => {
    console.log("Member data is Submitted");
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 9 }}>
      <Navbar />
      <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">Add Member</Typography>
          </Grid>
          <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/members">
                Members
              </Link>
              <Typography color="textPrimary">Add Members</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Stepper sx={{ mt: 3 }} activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={previousPageHandler} sx={{ ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={() =>
                  activeStep === steps.length - 1
                    ? handlePlaceOrder()
                    : nextPageHandler()
                }
                sx={{ ml: 1 }}
              >
                {activeStep === steps.length - 1 ? "Submit Details" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
};

export default AddMember;
