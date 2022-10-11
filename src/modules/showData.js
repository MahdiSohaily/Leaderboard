const message = (message = 'Data Inserted successfully.') => {
  const messageBox = document.querySelector('.message');
  messageBox.innerHTML = message;
  messageBox.style.bottom = '20px';
  setTimeout(() => {
    messageBox.style.bottom = '-100px';
  }, 4000);
  console.log(message);
};

const showData = () => {};
export { message, showData };
