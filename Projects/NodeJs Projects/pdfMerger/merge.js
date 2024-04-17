const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  //merge all pages. parameter is the path to file and filename.
  await merger.add(p1);
  await merger.add(p2);

  // this will generate a new date everytime and willbe saved in d
  let d = new Date().getTime();
  // thus d.pdf will make a new pdf name everytime user merges pdf
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  // exporting d bcz we are going to use it in server.js file
  return d;
};

module.exports = { mergePdfs };
