import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import { UIContext } from "@/context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sideBarOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer open={sideBarOpen} anchor="left" onClose={closeSideMenu}>
      <Box sx={{ width: "16rem" }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((text, i) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, i) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
