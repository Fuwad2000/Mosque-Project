export interface Props {
  id: string;
  label: string;
  type: string;
  multiline: boolean;
  rows: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  errors: { [key: string]: string };
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}
