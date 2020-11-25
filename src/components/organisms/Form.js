import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TextInput } from "../molecules/TextInput";
import { NumberInput } from "../molecules/NumberInput";

export const Form = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInput
          name="name"
          label="Je naam"
          fieldRef={methods.register({
            required: true
          })}
        />
        <NumberInput
          name="age"
          label="Je leeftijd"
          fieldRef={methods.register({
            required: true,
            min: {
              value: 18,
              message: "Alleen voor volwassenen"
            }
          })}
        />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
