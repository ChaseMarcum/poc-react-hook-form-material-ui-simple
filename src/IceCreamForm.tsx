/* eslint-disable i18next/no-literal-string */
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  fullWidth: {
    width: "100%"
  },
  form: {
    width: "100%",
    marginTop: spacing(2)
  },
  textField: {
    width: "100%",
    marginTop: spacing(2)
  },
  select: {
    marginTop: spacing(2)
  },
  checkbox: {
    marginTop: spacing(2)
  },
  submit: {
    margin: spacing(3, 0, 2)
  }
}));

interface IceCreamFormFields {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
  checkbox: boolean;
}

export default function IceCreamForm(): ReactElement {
  const { control, handleSubmit } = useForm<IceCreamFormFields>();
  const classes = useStyles();

  const onSubmit = (data: IceCreamFormFields) => {
    alert(JSON.stringify(data));
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid item sm={12}>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                // Material UI TextField supports
                // `value` and `onChange`
                <TextField
                  {...field}
                  label="First Name"
                  className={classes.textField}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                // Material UI TextField supports
                // `value` and `onChange`
                <TextField
                  {...field}
                  label="Last Name"
                  className={classes.textField}
                />
              )}
              defaultValue=""
            />
          </Grid>

          <Grid item sm={12}>
            <InputLabel id="ice-cream-select-label" className={classes.select}>
              Ice Cream Preference
            </InputLabel>
            <Controller
              control={control}
              name="iceCreamType"
              render={({ field }) => (
                // Material UI TextField supports
                // `value` and `onChange`
                <Select
                  {...field}
                  labelId="ice-cream-select-label"
                  id="ice-cream-select"
                  className={classes.fullWidth}
                >
                  <MenuItem value={"chocolate"}>Chocolate</MenuItem>
                  <MenuItem value={"strawberry"}>Strawberry</MenuItem>
                  <MenuItem value={"vanilla"}>Vanilla</MenuItem>
                </Select>
              )}
              defaultValue=""
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              control={control}
              name="checkbox"
              render={({ field: { value, onChange } }) => (
                // Checkbox accepts its value as `checked`
                // so we need to connect the props here
                <FormControlLabel
                  control={<Checkbox checked={value} onChange={onChange} />}
                  label="I am a checkbox"
                  className={classes.checkbox}
                />
              )}
            />
          </Grid>

          <Grid item sm={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
