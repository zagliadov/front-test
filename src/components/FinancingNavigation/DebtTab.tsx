"use client";

import React, { useEffect, useState } from "react";
import { TextField } from "../TextField/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Wrapper } from "../Wrapper/Wrapper";
import { Inputs } from "@/helpers/interface";
import NavigateBackButton from "../NavigateBackButton/NavigateBackButton";

export default function DebtTab({ debtName }: { debtName: string }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [storedValue, setStoredValue] = useLocalStorage(`${debtName}`, "");
  const onSubmit: SubmitHandler<any> = (data) => {
    setStoredValue(data); //"/income-expenses")
  };
  const [lender, setLender] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(debtName);
    if (dataFromLocalStorage !== null) {
      const data = JSON.parse(dataFromLocalStorage);
      setLender(data.lender);
      setAmount(data.amount);
    } else {
      setLender("");
      setAmount("");
    }
  }, [debtName]);
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
            defaultValue={lender}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            register={register}
            errors={errors}
            label={"Loan Amount"}
            propertyName={"amount"}
            defaultValue={amount}
          />
        </Wrapper>
        <Wrapper classes={"flex justify-end"}>
          <NavigateBackButton />
          <input
            type="submit"
            className="bg-teal-950 text-white px-5 py-2 rounded-lg cursor-pointer"
            value="Continue"
          />
        </Wrapper>
      </form>
    </div>
  );
}
