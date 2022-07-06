import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  width: 320,
  [theme.breakpoints.down("sm")]: {
    padding: 40,
  },
  [theme.breakpoints.up("sm")]: {
    padding: 32,
  },
  [theme.breakpoints.up("md")]: {
    padding: 24,
  },
  [theme.breakpoints.up("lg")]: {
    padding: 16,
  },
}));

export const MUIStyledButton = () => {
  return (
    <StyledButton variant="contained" color="primary">
      Fui estilizado com mui/styled
    </StyledButton>
  );
};
