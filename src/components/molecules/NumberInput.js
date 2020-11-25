import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "../atoms/Label";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { Input } from "../atoms/Input";

export const NumberInput = ({ label, name, fieldRef }) => {
  const { errors } = useFormContext();
  return (
    <div>
      <Label HTMLfor={name}>{label}</Label>
      <Input type="number" fieldRef={fieldRef} name={name} />
      {errors[name] && (
        <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>
      )}
    </div>
  );
};
