export enum ROUTES {
    HOME = "/",
    DASHBOARD = "/dashboard",
    SIGNIN = "/signin",
    SIGNUP = "/signup",
    MENU1 = "/menu1",
    MENU2 = "/menu2",
    MENU3 = "/menu3",
    MENU4 = "/menu4",
  }

  const menuLinks = [
    {id: 1, to: ROUTES.DASHBOARD, label: "Home"},
    {id: 2, to: ROUTES.MENU1, label: "Menu 1" },
    {id: 3, to: ROUTES.MENU2, label: "Menu 2"},
  ];
  
  export default menuLinks;