import React from "react";
import { Button } from "@material-ui/core";
import { sandboxMode } from "../actions";
import { useDispatch } from "react-redux";

const Sandbox = () => {
    const dispatch = useDispatch();
    return (
        <Button className="sandbox" color="primary" variant="contained" onClick={() => dispatch(sandboxMode())}>
            Sandbox
        </Button>
    );
};

export default Sandbox;
