import axios, { AxiosError } from "axios";
import { GET_LEGAL_NOTES_ROUTE } from "./constants";

export const fetchLegalNotes = async (): Promise<{
  status: boolean;
  message: string;
  legalNotes?: LegalNotes;
}> => {
  try {
    const res = await axios.get<LegalNotes>(GET_LEGAL_NOTES_ROUTE, {
      headers: {
        Accept: "application/json",
      },
    });
    if (res.status === 200) {
      return {
        status: true,
        message: "Legal Notes Fetched Successfully",
        legalNotes: res.data,
      };
    } else {
      return { status: false, message: "Failed to load legal notes" };
    }
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response
          ? error.response.data.message
          : error.message
        : error instanceof Error
        ? error.message
        : "Failed to load legal notes";
    return { status: false, message };
  }
};
