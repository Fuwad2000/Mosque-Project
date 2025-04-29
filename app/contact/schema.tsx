import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().nonempty("Please enter a valid subjec,"),
  message: z.string().nonempty("Please enter a short message"),
});
export default schema;
