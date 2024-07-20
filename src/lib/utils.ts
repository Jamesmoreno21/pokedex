export const capitialize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

export const parseIdToFourDigits = (id: number) => {
    return "#" + id.toString().padStart(4, "0");
  };