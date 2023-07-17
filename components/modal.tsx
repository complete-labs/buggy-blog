import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSession, signIn } from "next-auth/react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PromptModal() {
  return (
    <div>
      <Modal
        keepMounted
        open={true}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="grid place-items-center text-center">
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              You must be signed in to view this content.
            </Typography>
            <button
              className="h-16 mt-4 w-32 border-2 border-purple-700 rounded-sm font-bold"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
