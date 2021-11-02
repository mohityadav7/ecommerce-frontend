export const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

export const getCookie = (name: string) => {
  const cookies = document.cookie.split(';');
  const result = cookies.find((cookie) => cookie.includes(name));
  return result ? result.split('=')[1] : '';
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
