export default function actionCreator(actionType, actionPayload) {
  if (actionType && actionPayload) {
    return {
      type: actionType,
      payload: actionPayload
    };
  } else if (actionType && !actionPayload) {
    return {
      type: actionType
    };
  } else {
    return "Error";
  }
}
