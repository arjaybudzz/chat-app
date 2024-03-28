"use client"

import React from 'react'
import { CircularProgress } from '@mui/material'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending? true : false} className="w-full h-14 font-bold text-white bg-black">{pending? <CircularProgress sx={{color: "white", scale: "70%"}}/> : "SUBMIT"}</button>
  )
}

export default SubmitButton