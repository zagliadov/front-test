import { SelectField } from "@/components/SelectField/SelectField";
import { TextField } from "@/components/TextField/TextField";
export default function PropertyDetailPage() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div>
      <h2 className="font-semibold text-xl text-black">Property details</h2>
      <h3 className="font-medium text-lg pt-5 text-black">Property Detail</h3>
      <TextField
        name={"Property name"}
        id={"3"}
        autoComplete={"on"}
        placeholder={"Storage A"}
        label={"Property name"}
        classes={"pt-4"}
      />
      <TextField
        name={"Address line"}
        id={"4"}
        autoComplete={"on"}
        placeholder={"3549 102nd Avenue Cranbrook, BC V1C 2R9"}
        label={"Address line"}
        classes={"pt-4"}
      />
      {/* <div className="flex w-auto h-20 border">
        <SelectField
          name="Country"
          id="selectId"
          label="Country"
          options={options}
          required
        />
      </div> */}
    </div>
  );
}
