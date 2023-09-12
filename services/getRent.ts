import { RentArray } from "@/app/api/rent/rent";

export const getRent = async (): Promise<RentArray> => {
  try {
    const response = await fetch("http://localhost:3000/api/rent");
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch rent");
  }
};