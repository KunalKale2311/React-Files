import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material'
import React, { useState } from 'react'

const Transition = React.forwardRef(function Transition(props, ref){
    return<Slide direction= "down" ref={ref}{...props}/>
})

const MyDialog = () => {
    const [isOpen, setOpen]=useState(false)
    let openDialoge=()=> setOpen(true)
    let closeDialoge=()=> setOpen(false)
  return (
    <>
    <Button onClick={()=>openDialoge()} variant='outlined'>Open Dialog</Button>
    <Dialog 
    open={isOpen}
    TransitionComponent={Transition}
    keepMounted
    onClose={closeDialoge}>
        
        
        <DialogTitle>
            {"Hi i am Dialog"}
            <DialogContent>
                <DialogContentText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur optio nesciunt quibusdam ipsam nisi et amet, aliquam delectus eius velit! Unde omnis,
                     rem commodi est facere ea eveniet dolores. Ducimus.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained'color='error'
                onClick={()=>closeDialoge()}>
                    Cancel
                </Button>
                <Button variant='contained'color='success'>
                    Submit
                </Button>
     
            </DialogActions>
        </DialogTitle>
    </Dialog>
    </>
  )
}

export default MyDialog