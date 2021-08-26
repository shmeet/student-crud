import { Redirect, useHistory } from "react-router-dom";

export function navigateToSuccessWithMessage(history, message) {
  history.push("/success?msg=" + message);
}
