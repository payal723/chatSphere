import React, { useContext, useState } from "react";
import withAuth from "../utills/withAuth";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/1200x/2a/dd/dc/2adddcff2d3ce226c98e5b6b1ab9f3f1.jpg"
            alt="ChatSphere"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
          />
          <h2 className="text-xl md:text-2xl font-bold text-purple-600">ChatSphere</h2>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <IconButton onClick={() => navigate("/history")} aria-label="history">
            <RestoreIcon />
          </IconButton>
          <span className="hidden sm:inline text-sm text-gray-700">History</span>

          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="min-h-[calc(100vh-65px)] flex items-center justify-center px-4 py-8 md:px-12">
        <div className="w-full max-w-xl flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Providing Quality Video Call Just Like Quality Education
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <TextField
              fullWidth
              size="small"
              label="Meeting Code"
              variant="outlined"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleJoinVideoCall()}
            />
            <Button
              size="large"
              variant="contained"
              onClick={handleJoinVideoCall}
              className="w-full sm:w-auto"
            >
              Join
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuth(HomeComponent);