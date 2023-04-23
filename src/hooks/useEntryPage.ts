import { useContext, useState, useMemo, ChangeEvent } from "react";
import { useRouter } from "next/router";

import { EntriesContext } from "@/context/entries";
import { EntryStatus, Entry } from "@/interfaces";

export const useEntryPage = (entry: Entry) => {
  const { updateEntry, deleteEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState<string>(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState<boolean>(false);

  const router = useRouter();

  const isNotValidForm = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };

    updateEntry(updatedEntry, true);

    router.push("/");
  };

  const onDelete = () => {
    deleteEntry(entry._id);

    router.push("/");
  };

  return {
    status,
    inputValue,
    isNotValidForm,

    setTouched,
    onInputValueChanged,
    onStatusChanged,
    onSave,
    onDelete,
  };
};
