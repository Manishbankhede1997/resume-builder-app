export const TYPE = {
  TemplateId: "TemplateId",
};

export const setTemplateId = (data) => {
  console.log("temp", data); // Log the data before dispatching the action

  return {
    type: TYPE.TemplateId,
    payload: data,
  };
};
