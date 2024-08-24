import mongoose, { Schema, model } from "mongoose";

const todoSchema = new mongoose.Schema(
    {
       
    }, {timestamps: true}
    )


export const User = mongoose.model("Todo", todoSchema)