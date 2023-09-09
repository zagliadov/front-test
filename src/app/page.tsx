import { TextField } from "@/components/TextField/TextField";
export default function PropertyDetailPage() {
  return (
    <div>
      <h2 className="font-semibold text-xl">Property details</h2>
      <h3 className="font-medium text-lg pt-5">Property Detail</h3>
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
        id={"3"}
        autoComplete={"on"}
        placeholder={"3549 102nd Avenue Cranbrook, BC V1C 2R9"}
        label={"Address line"}
        classes={"pt-4"}
      />
    </div>
  );
}
