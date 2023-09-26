import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import Form from "./Form";

export default function DetailForm() {
    const [open ,setOpen]=useState(false);

    return (
        <div>
        <Button onClick={()=>setOpen(true)} variant="text">Get Started</Button>
        <Form open={open} setOpen={setOpen}/>
        </div>
    )
}