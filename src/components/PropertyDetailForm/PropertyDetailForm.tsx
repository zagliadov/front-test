"use client";

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from "../Wrapper/Wrapper";
import { TextField } from "../TextField/TextField";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { SelectLocation } from "../SelectLocation/SelectLocation";
import { CustomDateInput } from "../CustomDateInput/CustomDateInput";
import { ICitiesByCountry, ICity, ICountry, Inputs } from "@/helpers/interface";
import * as _ from "lodash";
import ContinueButton from "../ContinueButton/ContinueButton";
import PageTitle from "../PageTitle/PageTitle";

const countries: ICountry[] = [
  { label: "USA", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
];

const cities: ICitiesByCountry = {
  us: [
    { label: "New York", value: "nyc" },
    { label: "Los Angeles", value: "la" },
  ],
  ca: [
    { label: "Toronto", value: "toronto" },
    { label: "Vancouver", value: "vancouver" },
  ],
  uk: [
    { label: "London", value: "london" },
    { label: "Manchester", value: "manchester" },
  ],
};

export default function PropertyDetailForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [storedValue, setStoredValue] = useLocalStorage("propertyDetail", "");
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    setStoredValue(data);
  };
  let selectedCountry = storedValue?.country;
  const city: ICity[] = _.values(
    _.pick(cities, watch("country") || selectedCountry)
  )[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-full text-black"
    >
      <Wrapper>
        <Wrapper classes={"pb-5 pt-2"}>
          <TextField
            register={register}
            errors={errors}
            label={"Property name"}
            propertyName={"propertyName"}
            defaultValue={storedValue?.propertyName}
          />
        </Wrapper>
        <Wrapper classes={"pb-5 pt-2"}>
          <TextField
            register={register}
            errors={errors}
            label={"Address Line"}
            propertyName={"addressLine"}
            defaultValue={storedValue?.addressLine}
          />
        </Wrapper>
        <Wrapper classes={"pb-5 pt-2 flex justify-around"}>
          <SelectLocation
            register={register}
            label={"Country"}
            propertyName={"country"}
            errors={errors}
            option={countries}
            defaultValue={storedValue?.country}
          />

          <SelectLocation
            register={register}
            label={"City"}
            propertyName={"city"}
            errors={errors}
            option={city}
            defaultValue={storedValue?.city}
          />

          <TextField
            register={register}
            errors={errors}
            label={"ZIP/Postal Code"}
            propertyName={"postalCode"}
            defaultValue={storedValue?.postalCode}
          />
        </Wrapper>
        <Wrapper>
          <Controller
            control={control}
            name="closeDate"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className="flex flex-col relative rounded-lg shadow-sm text-gray-500 pt-5">
                <label className="text-gray-400 text-sm">Close Date</label>
                <ReactDatePicker
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  customInput={
                    <div className="relative">
                      <CustomDateInput
                        register={register}
                        value={value || storedValue?.closeDate}
                        propertyName={"closeDate"}
                      />
                    </div>
                  }
                />
              </div>
            )}
          />
        </Wrapper>
      </Wrapper>
      <Wrapper classes={"flex justify-end"}>
        <ContinueButton goRoute={"/unit-mix"} />
      </Wrapper>
    </form>
  );
}
