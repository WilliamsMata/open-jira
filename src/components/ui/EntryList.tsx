import { List, Paper } from "@mui/material";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 160px)",
          paddingInline: 1,
          overflow: "auto",
          scrollbarWidth: "thin",
          backgroundColor: "transparent",
        }}
      >
        {/* Todo: cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
