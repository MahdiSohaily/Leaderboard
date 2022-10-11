/**
 * A function to display a toast
 * message when data is inserted successfully
 * @param {string} message 
 */
const message = (msg = 'Data Inserted successfully.') => {
  const messageBox = document.querySelector('.message');
  messageBox.innerHTML = msg;
  messageBox.style.bottom = '20px';
  setTimeout(() => {
    messageBox.style.bottom = '-100px';
  }, 4000);
};

/**
 * A function to loop over
 * an array of objects and set
 * them inside HTML elements
 * and return a collection of 
 * HTML element
 * @param {Array} data 
 * @returns 
 */
const showData = (data) => {
  let pattern = '';
  for (let index = 0; index < data.length; index += 1) {
    pattern += `
    <tr>
      <td>${Number(index) + 1}</td>
      <td>${data[index].user}</td>
      <td>${data[index].score}</td>
    </tr>`;
  }
  return pattern;
};
export { message, showData };
