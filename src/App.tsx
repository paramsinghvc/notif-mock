import React, { FC } from "react";
import { Box } from "@mollycule/lattice";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import { useOnlineStatus, Status } from "./components/useOnlineStatus";

function getStatusText(isOnline: boolean) {
  return isOnline ? Status.Online : Status.Offline;
}

function getStatusColor(isOnline: boolean) {
  return isOnline ? "darkcyan" : "salmon";
}

const App: FC = () => {
  const { onlineStatus: isOnline, renderStatusComp } = useOnlineStatus();

  return (
    <>
      <div className={isOnline ? "online" : "offline"}>
        {renderStatusComp()}
        <Box
          as="p"
          px="10vh"
          fontWeight="bold"
          color={getStatusColor(isOnline)}
          data-testid="status-text"
        >
          {getStatusText(isOnline)}
        </Box>
        <NotificationContainer />
      </div>
    </>
  );
};

export default App;
