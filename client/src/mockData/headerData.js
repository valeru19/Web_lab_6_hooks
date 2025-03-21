export const menuData = [
  {
    type: "link",
    title: "Главная",
    href: "#",
  },
  {
    type: "button",
    title: "Что такое GPT?",
    href: "#",
  },
  {
    type: "button",
    title: "Open AI",
    href: "#",
  },
  {
    type: "link",
    title: "Кейсы",
    href: "#",
  },
  {
    type: "link",
    title: "Библиотека",
    href: "#",
  },
];

export const buttonsData = [
  {
    title: "Войти",
    href: "#",
    isPrimary: false,
  },
  {
    title: "Регистрация",
    href: "#",
    isPrimary: true,
  },
];

export const logoData = {
  alt: "logo",
  src: "./assets/img/logo.svg",
  href: "#",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
