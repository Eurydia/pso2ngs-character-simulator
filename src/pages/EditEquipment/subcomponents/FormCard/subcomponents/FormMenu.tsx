import { FC, ReactNode, MouseEvent as ReactMouseEvent } from "react";
import {
  Divider,
  Fade,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Slide,
} from "@mui/material";
import {
  Clear,
  ContentCopy,
  ContentPaste,
} from "@mui/icons-material";

interface CustomMenuItemProps {
  icon: ReactNode;
  label: string;
  closeWhenClicked: boolean | undefined;
  onClose: () => void;
  onClick: () => void;
}
const CustomMenuItem: FC<CustomMenuItemProps> = (props) => {
  const handleClick = (event: ReactMouseEvent<HTMLLIElement>) => {
    props.onClick();

    if (props.closeWhenClicked) {
      props.onClose();
    }
  };

  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>{props.label}</ListItemText>
    </MenuItem>
  );
};

interface FormMenuProps {
  anchorElement: HTMLElement | null;
  onClose: () => void;
  onCopy: () => void;
  onPaste: () => void;
  onClear: () => void;
}
const FormMenu: FC<FormMenuProps> = (props) => {
  const open = Boolean(props.anchorElement);
  const _anchorElement = open ? props.anchorElement : undefined;

  const handleClose = () => {
    props.onClose();
  };

  return (
    <Menu
      open={open}
      anchorEl={_anchorElement}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <MenuList variant="menu">
        <CustomMenuItem
          closeWhenClicked
          label="Copy"
          icon={<ContentCopy />}
          onClick={props.onCopy}
          onClose={handleClose}
        />
        <CustomMenuItem
          closeWhenClicked
          label="Paste"
          icon={<ContentPaste />}
          onClick={props.onPaste}
          onClose={handleClose}
        />
        <Divider flexItem />
        <CustomMenuItem
          closeWhenClicked
          label="Clear"
          icon={<Clear />}
          onClick={props.onClear}
          onClose={handleClose}
        />
      </MenuList>
    </Menu>
  );
};

export default FormMenu;
