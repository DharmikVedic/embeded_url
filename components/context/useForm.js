import { useContext } from "react";
import { FormContext } from "./formContext";

const useForm = () => {
  const context = useContext(FormContext);
  return {
    ...context,
  };
};

export default useForm;
