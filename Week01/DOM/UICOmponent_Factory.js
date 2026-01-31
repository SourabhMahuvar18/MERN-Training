// creating the factory which create ui components based on the condtion
console.log("JS Loaded Successfully"); // just for check

function UIComponentFactory(type, options) {
  switch (type) {
    case "button":
      return createButton(options); //options will be a object conatining all required data
    case "input":
      return createInput(options);
    case "card":
      return createCard(options);
    default:
      throw new Error("Invalid UI Components");
  }
}

const createButton = ({ text, onclick }) => {
  const btn = document.createElement("button");
  btn.innerText = text || "click me!";

  if (onclick) {
    btn.addEventListener("click", onclick);
  }
  return btn;
};

const createInput = ({ placeholder, type = "text" }) => {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;

  return input;
};

const createCard = ({ title, content }) => {
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.margin = "10px";
  card.style.borderRadius = "8px";

  card.innerHTML = `
        <h3>${title}</h3>
        <p> ${content}</p>
    `;
  return card;
};

const button = UIComponentFactory("button", {
  text: "Save",
  onclick: () => alert("Saved successfully"),
});

const input = UIComponentFactory("input", {
  placeholder: "Enter your name",
});

const card = UIComponentFactory("card", {
  title: "User Profile",
  content: "Factory pattern is created this card component",
});

// rendering the created component into the app div
const app = document.querySelector("#app");

app.append(button, input, card);

// document.body.append(button,input,card);
