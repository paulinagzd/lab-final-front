export const actionService = currentEvent => {
    fetch("/action", {
      method: "POST",
      body: currentEvent
    })
      .then(() => {
        console.log("done");
      })
      .catch(() => {
        console.error("error");
      });
  };
  