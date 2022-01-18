import React from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import { Grid, IconButton } from "@mui/material";
import DatePicker from "react-datepicker";

export function DateSelector(props) {
    const enableMechanism = () => {
        props.enable ? props.setEnable(false) : props.setEnable(true);
    }
    return (
        <Grid container direction="row">
            <Grid container direction="row">
                <IconButton aria-label="like" onClick={() => enableMechanism()}>
                    {props.enable ? 
                    <CheckCircle sx={{ color: "white"}}/>
                    :
                    <RadioButtonUnchecked sx={{ color: "white"}}/>
                    }
                </IconButton>
                <p style={{color: "white"}}>{props.title}</p>
            </Grid>
            <DatePicker selected={props.date} onChange={(d) => props.setDate(d)}/>
        </Grid>
    );
}