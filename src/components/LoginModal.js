import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  border: "none"
};

function LoginModal() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <LoginForm callback={() => {}} />
      </Box>
    </Modal>
  );
}
export default LoginModal;
