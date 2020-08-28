import React, { FC } from "react";
import { Grid } from "@mollycule/lattice";
import styled from "styled-components";

const Button = styled.button`
  padding: 20px;
  cursor: pointer;
`;

type OnlineStatusMockProps = {
  onIsOnlineChange: (status: boolean) => void;
};

const OnlineStatusMock: FC<OnlineStatusMockProps> = ({ onIsOnlineChange }) => (
  <Grid flow="column" cols={12} columnGap="20px" p="10vh">
    <Button data-testid="online-btn" onClick={() => onIsOnlineChange(true)}>
      Online
    </Button>
    <Button data-testid="offline-btn" onClick={() => onIsOnlineChange(false)}>
      Offline
    </Button>
  </Grid>
);

export default OnlineStatusMock;
