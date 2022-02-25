import nodemailer from "nodemailer";
import hbs, {
  NodemailerExpressHandlebarsOptions,
} from "nodemailer-express-handlebars";
import path from "path";

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e907245410fc36",
    pass: "de51e7681ed24f",
  },
});

const handlebarsOption: NodemailerExpressHandlebarsOptions = {
  viewEngine: {
    partialsDir: path.resolve(__dirname, "../../../src", "templates"),
    defaultLayout: undefined,
  },
  viewPath: path.resolve(__dirname, "../../../src", "templates"),
};

transport.use("compile", hbs(handlebarsOption));

export const mailOptions = (to: string, subject: string, text: string) => {
  return {
    from: "no-reply@icarrying.com.br",
    to,
    subject,
    text,
  };
};

export const mailTemplateOptions = (
  to: string,
  subject: string,
  template: string,
  context: any
) => {
  return {
    from: "no-reply@icarrying.com.br",
    to,
    subject,
    template,
    context,
  };
};
