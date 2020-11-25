import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "../atoms/Label";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { Input } from "../atoms/Input";

export const TextInput = ({ label, name, fieldRef }) => {
  const { errors } = useFormContext();
  return (
    <div>
      <Label name={name}>{label}</Label>
      <Input type="text" fieldRef={fieldRef} name={name} />
      {errors[name] && (
        <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>
      )}
    </div>
  );
};
