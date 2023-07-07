const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(tutorials) {
  // Split the tutorial names by space and convert each word to title case
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(' ');
  });
}

// Example usage
const tutorial = ["introduction to javascript", "advanced CSS techniques", "python programming basics"];
const titleCasedTutorials = titleCased(tutorials);

console.log(titleCasedTutorials);


