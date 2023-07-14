"use client";

import { Box, Modal, Typography } from "@mui/material";
import Style from "./BasicModal.module.css";

const BasicModal: React.FC<{
  children?: React.ReactNode | null;
  title?: string | null;
  content?: string | null;
  open: boolean;
  setOpen: (open: boolean) => void;
}> = (props) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    height: "fit-content",
    bgcolor: "background.paper",
    border: "2px solid #A6D5FF",
    outline: 0,
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal keepMounted open={props.open} onClose={() => props.setOpen(false)}>
      <Box sx={style}>
        <div className={Style.modal}>
          {props.title && <h3>{props.title}</h3>}
          {props.content && <p>{props.content}</p>}
          {props.children && (
            <div style={{ margin: "0", padding: "0" }}>{props.children}</div>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default BasicModal;
