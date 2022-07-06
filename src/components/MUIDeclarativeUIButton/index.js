import Button from "@mui/material/Button";

export const MUIDeclarativeUIButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        padding: {
          xs: 5,
          sm: 4,
          md: 3,
          lg: 2,
        },
        width: 320,
      }}
    >
      Fui estilizado por material UI
    </Button>
  );
};
