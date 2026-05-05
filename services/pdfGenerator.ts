import { jsPDF } from "jspdf";
import { portfolioData } from "../data/portfolioData";


export const generatePDF = () => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const contentWidth = 170;
  const leftMargin = 20;
  let y = 20;

  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const addHeading = (text: string) => {
    checkPageBreak(15);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(6, 182, 212); // Primary color
    doc.text(text.toUpperCase(), leftMargin, y);
    y += 2;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, leftMargin + contentWidth, y);
    doc.setTextColor(0, 0, 0); // Reset color
    y += 6;
  };

  const addSubHeading = (text: string, rightText?: string) => {
    checkPageBreak(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(text, leftMargin, y);
    if (rightText) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(rightText, leftMargin + contentWidth, y, { align: "right" });
      doc.setTextColor(0, 0, 0);
    }
    y += 5;
  };

  const addBody = (text: string, indent = 0, fontSize = 10) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    const height = lines.length * (fontSize * 0.45);
    checkPageBreak(height);
    doc.text(lines, leftMargin + indent, y);
    y += height + 2;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, contentWidth - 5);
    const height = lines.length * 4.5;
    checkPageBreak(height);
    doc.text("•", leftMargin, y);
    doc.text(lines, leftMargin + 5, y);
    y += height + 2;
  };

    // --- HEADER ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text(portfolioData.header.name, 105, y, { align: "center" });
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`${portfolioData.header.location} | ${portfolioData.header.phone}`, 105, y, { align: "center" });
  y += 5;
  doc.text(`${portfolioData.header.email} | ${portfolioData.header.linkedin}`, 105, y, { align: "center" });
  y += 5;
  doc.text(portfolioData.header.github, 105, y, { align: "center" });
  y += 10;

  // --- ABOUT ME ---
  addHeading("About Me");
  addBody(portfolioData.about);

  // --- RESEARCH INTERESTS ---
  addHeading("Research Interests");
  addBody(portfolioData.researchInterests);

  // --- EDUCATION ---
  addHeading("Education & Training");
  portfolioData.education.forEach(edu => {
    addSubHeading(edu.degree, edu.duration);
    addBody(edu.institution);
    edu.details.forEach(detail => addBody(detail));
  });

  // --- EXPERIENCE ---
  addHeading("Work Experience");
  portfolioData.experience.forEach(exp => {
    addSubHeading(exp.title, exp.duration);
    addBody(exp.company, 0, 10);
    y += 2;
    exp.bullets.forEach(bullet => addBullet(bullet));
  });

  // --- PROJECTS ---
  addHeading("Projects");
  portfolioData.projects.forEach(proj => {
    addSubHeading(proj.title);
    addBody(proj.description);
  });

  // --- SKILLS ---
  addHeading("Skills");
  portfolioData.skills.forEach(skill => {
    addSubHeading(skill.category);
    addBody(skill.details);
    y += 2;
  });

  // --- CERTIFICATIONS ---
  addHeading("Certifications");
  portfolioData.certifications.forEach(cert => {
    addBullet(cert);
  });

  // --- LANGUAGES ---
  addHeading("Languages");
  addBody(portfolioData.languages);


  doc.save("Abdul_Qahir_Jalali_CV.pdf");
};
