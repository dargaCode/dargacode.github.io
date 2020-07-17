import { Resource } from "./ResourcesUtils";
import pdfResume from "../../resumes/Darga_SWE_Resume.pdf";
import docxResume from "../../resumes/Darga_SWE_Resume.docx";

const githubUri = "https://github.com/dargaCode";
const linkedinUri = "https://www.linkedin.com/in/dargaCode";
const emailUri = "mailto:resume@dargaCode.com";
const blogUri = "https://blog.dargacode.com/tagged/highlights";

export const RESUME_RESOURCES: Resource[] = [
  {
    href: pdfResume.toString(),
    displayName: "PDF Resume",
    iconClass: "iconPdf"
  },
  {
    href: docxResume.toString(),
    displayName: "Simple Resume",
    iconClass: "iconDocx"
  }
];

export const CONTACT_RESOURCES: Resource[] = [
  { href: githubUri, displayName: "GitHub", iconClass: "iconGithub" },
  { href: linkedinUri, displayName: "LinkedIn", iconClass: "iconLinkedin" },
  { href: emailUri, displayName: "Email", iconClass: "iconEnvelope" },
  { href: blogUri, displayName: "Blog", iconClass: "iconRss" }
];
