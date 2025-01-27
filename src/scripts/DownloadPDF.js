// script.js o <script> en línea
window.downloadPDF = function () {
    const pdfURL = "/CV_Diego_Lopez_Niembro-english.pdf"; // Ruta al archivo en "public"
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "CV_Diego_Lopez_Niembro.pdf";
    link.click();
  };
  