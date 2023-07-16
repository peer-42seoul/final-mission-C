import { Button } from "@/components/common/BasicButton";
import BasicModal from "@/components/common/BasicModal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const PasswordModal: React.FC<{
  modalOpen: boolean;
  setModalOpen: (state: boolean) => void;
  setPassword: (password: string) => void;
  buttonText: string;
}> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>();
  return (
    <BasicModal
      open={props.modalOpen}
      setOpen={props.setModalOpen}
      title={"password?"}
    >
      <form onSubmit={handleSubmit((data) => props.setPassword(data.password))}>
        <TextField
          type="password"
          size="small"
          style={{ margin: "5px 0" }}
          label="password"
          required
          inputProps={{ pattern: "[a-zA-Z0-9]+" }}
          {...register("password", {
            minLength: {
              value: 4,
              message: "The min length of password is 4",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "You can only use alphabet or number for password",
            },
          })}
          error={errors.password ? true : false}
          helperText={errors.password ? errors.password.message : ""}
        />
        <Button style={{ width: "50%" }}>
          <p>{props.buttonText}</p>
        </Button>
      </form>
    </BasicModal>
  );
};

export default PasswordModal;
