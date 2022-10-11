const message = (message = 'Data Inserted successfully.') => {
  const messageBox = document.querySelector('.message');
  messageBox.innerHTML = message;
  messageBox.style.bottom = '20px';
  setTimeout(() => {
    messageBox.style.bottom = '-100px';
  }, 4000);
  console.log(message);
};

const showData = (data) => {
  let pattern = '';
  for (let item in data) {
    pattern += `
    <tr>
      <td>${Number(item) + 1}</td>
      <td>${data[item].user}</td>
      <td>${data[item].score}</td>
    </tr>`;
  }
  return pattern;
};
export { message, showData };
