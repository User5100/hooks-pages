const getFormFields = (elements: any): any =>
  Array.from(elements).reduce((accumulator: any, current: any) => {
    if (!current.name) return accumulator;

    if (current.type === "text") {
      return { ...accumulator, [current.name]: current.value };
    }

    if (current.type === "radio" || current.type === "checkbox") {
      return { ...accumulator, [current.name]: current.checked };
    }

    return accumulator;
  }, {});

export { getFormFields };
