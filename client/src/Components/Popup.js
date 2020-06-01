import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import Slide from "@material-ui/core/Slide";
import { withTheme } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={1000} />;
});

export default function Popup(props) {
  const [open, setOpen] = React.useState(true);

  const goToLogin = () => {
    props.history.push("/AdminLogIn");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        BackdropProps={{
          style: {
            backgroundColor: "rgba(153, 188, 189, 0.6)",
          },
        }}
        PaperProps={{
          style: {
            backgroundColor: "rgba(74, 97, 242, 6)",
          },
        }}
      >
        <div
          style={{
            width: "600px",
            height: "400px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white", fontWeight: 600 }}>
            Welcome to Quizzaro-
          </h1>

          <Button
            onClick={goToLogin}
            size="large"
            color="primary"
            variant="contained"
            style={{
              backgroundColor: "rgba(74, 97, 242, 1)",
              border: "1px solid white",
              width: "170px",
              height: "50px",
              color: "white",
              marginTop: "20%",
              marginRight: "15px",
            }}
          >
            Admin
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "rgba(74, 97, 242, 1)",
              width: "170px",
              height: "50px",
              marginTop: "20%",
            }}
          >
            User
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
