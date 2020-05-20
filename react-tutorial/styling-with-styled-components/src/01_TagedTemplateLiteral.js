const red = 'RED';
const blue = 'BLUE';

function favColor(text, ...values) {
  console.log(text);
  console.log(values);
}

favColor`제가 좋아하는 색은 ${red}와 ${blue}입니다.`

function favColor(texts, ...values) {
  return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
}

favColor`제가 좋아하는 색은 ${red}와 ${blue}입니다.`