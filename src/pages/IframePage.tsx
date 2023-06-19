import Button from "../components/ui-ux/Button";
import Box from "../components/layouts/Box";
import React, { useState } from "react";

enum DeviceType {
  Desktop = "1366px",
  IPad = "768px",
  IPhone = "375px",
}

function IframeTestPage() {
  const [device, setDevice] = useState<DeviceType>(DeviceType.Desktop);

  return (
    <div>
      <Box>
        <Button onClick={() => setDevice(DeviceType.Desktop)}>Desktop</Button>
        <Button onClick={() => setDevice(DeviceType.IPad)}>IPad</Button>
        <Button onClick={() => setDevice(DeviceType.IPhone)}>IPhone</Button>
      </Box>

      <iframe
        src="https://selflist.com"
        title="preview"
        style={{ width: device, height: "100vh" }}
      />
    </div>
  );
}

export default IframeTestPage;
