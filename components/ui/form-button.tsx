import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Loader } from "lucide-react";

interface FormButtonProps {
  text: string;
  className?: string;
}

const FormButton = ({ text, className }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={className}>
      {text}
      {pending && <Loader className="animate-spin" />}
    </Button>
  );
};

export default FormButton;
