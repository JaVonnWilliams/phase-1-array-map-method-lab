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

// const titleCased = () => {
//   return tutorials.map(text) => {
//     const sentances = text.split(' ');
//     const capitalizedSentences = sentances.map(
//       (sentances) => sentances.charAt(0).toUpperCase() + sentances.slice(1)
//       );
    
//   };
//   const  response = capitalizedSentences.join(" ");
//   return response
// };


const titleCased = () => {
  return tutorials.map((line) => {
    const tokens = line.split(" ");
    const capitalizedTokens = tokens.map(
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    );
    const response = capitalizedTokens.join(" ");
    return response;
  });
};