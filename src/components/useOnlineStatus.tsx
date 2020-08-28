import React, { useState, useEffect, useCallback } from "react";
import { NotificationManager } from "react-notifications";

import OnlineStatusMock from "./OnlineStatusMock";
import { throttle } from "../shared/utils";

export const NOTIFICATION_TIME_DELAY = 2000;

export enum Status {
  Online = "Online",
  Offline = "Offline",
}

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  const handleStatusChange = useCallback(
    (isOnline: boolean) => {
      if (onlineStatus !== isOnline) {
        setOnlineStatus(isOnline);
      }
    },
    [onlineStatus]
  );

  const triggerNotification = useCallback((isOnline: boolean) => {
    NotificationManager.info(isOnline ? Status.Online : Status.Offline);
  }, []);

  const trottledTriggerNotification = useCallback(
    throttle(triggerNotification, NOTIFICATION_TIME_DELAY),
    [triggerNotification]
  );

  useEffect(() => {
    trottledTriggerNotification(onlineStatus);
  }, [onlineStatus, trottledTriggerNotification]);

  return {
    renderStatusComp: () => (
      <OnlineStatusMock onIsOnlineChange={handleStatusChange} />
    ),
    onlineStatus,
    triggerNotification,
  };
};
