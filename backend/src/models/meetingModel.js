import mongoose from "mongoose";


const meetingSchema = new mongoose.Schema({
    user_id : {
        type  : String,
        required : true
    },
    meeting_id : {
        type : String,
        required : true,
        unique : true
    },
    date : {
        type : Date,
        default : Date.now,
        required : true
    }
})

const meeting = mongoose.model("meeting" , meetingSchema )
export {meeting};