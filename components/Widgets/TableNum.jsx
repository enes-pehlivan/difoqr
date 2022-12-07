import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TableNum() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>FRAGEN SIE NACH EINEM KELLNER</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="flex flex-col justify-center items-center rounded-lg "
          sx={style}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-2xl font-bold"
          >
            Bitte geben Sie Ihre Tischnummer ein.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="text-xl font-headFont font-semibold">Tisch: </span>
            <input
              type="number"
              className="border-[2px] border-black rounded-lg py-2"
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
