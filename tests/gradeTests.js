// linking to the exported book from grades
// .. go up one directory from the test directory
var book = require('../lib/grades').book;

// setUp environment for each test we have
// i.e Clear any data which was initially in the gradeBook
exports["setUp"] = function(callback) {
  book.reset();
  callback();

};

exports["Can compute letter grade of A"] = function(test){
  book.addGrade(100);
  book.addGrade(90);

  var result = book.getLetterGrade();

  test.equal(result, 'A');
  test.done();
};

exports["Can average grades"] = function(test) {
  book.addGrade(100);
  book.addGrade(50);

  var average = book.getAverage();
  test.equal(average, 75);
  test.done()

};

// exporting to nodeunit
// Adding smt to the export objects
exports["Can add a new grade"] = function(test) {
  book.addGrade(90);
  var count = book.getCountOfGrades();

  // Assertion that count produced a specific result ,1 else it has a problem
  test.equal(count,1);
  test.done();
};

// Another test
