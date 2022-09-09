import {
  FC,
  Fragment,
  ReactNode,
  MouseEvent as ReactMouseEvent,
  useState,
} from "react";
import {
  IconButton,
  Card,
  CardHeader,
  Divider,
  Grid,
  Tooltip,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { BarChart, MoreVert } from "@mui/icons-material";
import FormMenu from "./subcomponents/FormMenu";

interface IconButtonTooltipProps {
  children: ReactNode;
  tooltip: string;
  onClick: (event: ReactMouseEvent<HTMLButtonElement>) => void;
}
const IconButtonTooltip: FC<IconButtonTooltipProps> = (props) => {
  return (
    <Tooltip title={props.tooltip} placement="top">
      <IconButton onClick={props.onClick}>
        {props.children}
      </IconButton>
    </Tooltip>
  );
};

interface FormCardProps {
  cardTitle: ReactNode;
  cardContent: ReactNode;
  onCopy: () => void;
  onPaste: () => void;
  onClear: () => void;
}
const FormCard: FC<FormCardProps> = (props) => {
  const [anchorElement, setAnchorElement] =
    useState<HTMLElement | null>(null);

  const [dialogState, setDialogState] = useState(false);

  const handleMenuOpen = (
    event: ReactMouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElement(null);
  };

  const handleDialogOpen = () => {
    setDialogState(true);
  };

  const handleDialogClose = () => {
    setDialogState(false);
  };

  return (
    <Fragment>
      <Card raised sx={{ borderRadius: "1.25rem" }}>
        <CardHeader
          title={props.cardTitle}
          action={
            <Fragment>
              <IconButtonTooltip
                tooltip="Stats"
                onClick={handleDialogOpen}
              >
                <BarChart />
              </IconButtonTooltip>
              <IconButtonTooltip
                tooltip="More"
                onClick={handleMenuOpen}
              >
                <MoreVert />
              </IconButtonTooltip>
            </Fragment>
          }
        />
        <CardContent>{props.cardContent}</CardContent>
      </Card>
      <FormMenu
        anchorElement={anchorElement}
        onClose={handleMenuClose}
        onCopy={props.onCopy}
        onPaste={props.onPaste}
        onClear={props.onClear}
      />
      <Dialog
        open={dialogState}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>{props.cardTitle}'s stats</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>got it!</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormCard;
