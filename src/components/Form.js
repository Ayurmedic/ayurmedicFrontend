import {useState} from 'react';
import { TextField, Button, Grid, IconButton, FormControl } from "@mui/material";
import { FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogTitle, Autocomplete } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useStyles } from "./DetailFormCss";
import symp from "./SympList";

export default function Form(props) {
    var classes=useStyles();
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleClose= ()=>{
        props.setOpen(false);
    }

  return (
    <Dialog
                open={props.open}
                onClose={handleClose}
                sx={{
                    justifyContent: "center",
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: '40%',
                }}
            >
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                Get Started
            </Button> */}
                {/* <select>Symptoms
                {symp.map((i) => {
                    return (
                        <option value={i}>{i}</option>
                    )
                })}
            </select> */}
                <DialogTitle id="alert-dialog-title">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className={classes.heading}>Patient Details</div>
                        <div onClick={handleClose} style={{ cursor: "pointer" }}><IconButton><Close /></IconButton></div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth value={name} variant="outlined" label="Patient's Name" onChange={(event) => setName(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth value={emailAddress} variant="outlined" label="Email Address" onChange={(event) => setEmailAddress(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth value={mobileNumber} variant="outlined" label="Mobile Number" onChange={(event) => setMobileNumber(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth value={age} variant="outlined" label="Age" onChange={(event) => setAge(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth value={dob} variant="outlined" label="Date of Birth" onChange={(event) => setDob(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth value={height} variant="outlined" label="Height" onChange={(event) => setHeight(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth value={weight} variant="outlined" label="Weight" onChange={(event) => setWeight(event.target.value)} />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Do you have any Allery?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={symp}
                                // getOptionLabel={(option) => option.title}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="filterSelectedOptions"
                                        placeholder="Favorites"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleClose} fullWidth variant="contained" color="success">Submit</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Cancel</Button> */}
                </DialogActions>
            </Dialog>
  )
}
