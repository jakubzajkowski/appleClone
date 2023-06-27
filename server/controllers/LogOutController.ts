import express from "express"

export const LogOutController=async (req:express.Request,res:express.Response)=>{
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");
    res.status(200).json({logged: false})
}