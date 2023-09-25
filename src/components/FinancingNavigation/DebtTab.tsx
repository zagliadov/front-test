"use client";

import React from "react";
import { TextField } from "../TextField/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Wrapper } from "../Wrapper/Wrapper";
import { Inputs } from "@/helpers/interface";
import NavigateBackButton from "../NavigateBackButton/NavigateBackButton";
import ContinueButton from "../ContinueButton/ContinueButton";

export default function DebtTab({ debtName }: { debtName: string }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [storedValue, setStoredValue] = useLocalStorage(
    `financingDetail${debtName}`,
    ""
  );
  const onSubmit: SubmitHandler<any> = (data) => {
    setStoredValue(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full text-black"
      >
        <Wrapper classes={"pb-5 pt-2"}>
          <TextField
            register={register}
            errors={errors}
            label={"Lender"}
            propertyName={"lender"}
            defaultValue={storedValue?.lender}
          />
        </Wrapper>
        <Wrapper classes={"flex justify-end"}>
          <NavigateBackButton />
          <ContinueButton goRoute={"/income-expenses"} />
        </Wrapper>
      </form>
    </div>
  );
}
