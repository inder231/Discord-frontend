import { Button, Tooltip } from "@mui/material";
import React from "react";
import Avatar from "../../shared/components/Avatar";
import * as roomHandler  from "../../realtimeCommnication/roomHandler";

const ActiveRoomButton = ({
  creatorUserName,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      // join room
      roomHandler.joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUserName}. Connected: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          disabled={activeRoomButtonDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            margin: "0",
            padding: "0",
            minWidth: "0",
            marginTop: "10px",
            color: "white",
            backgroundColor: "#5865F2",
          }}
        >
          <Avatar username={creatorUserName} />
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
