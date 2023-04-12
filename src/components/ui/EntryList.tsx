import { FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";

import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import { EntryCard } from "./";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const { isAddingEntry } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  return (
    <div>
      <Paper
        sx={{
          height:
            status === "pending"
              ? isAddingEntry
                ? "calc(100vh - 258px)"
                : "calc(100vh - 210px)"
              : "calc(100vh - 165px)",
          paddingInline: 1,
          overflow: "auto",
          scrollbarWidth: "thin",
          backgroundColor: "transparent",
        }}
      >
        {/* Todo: cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
