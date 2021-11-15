export default (text = "Hello, Ninah!") => {
  const element = document.createElement("h1");

  element.innerHTML = text;

  return element;
};