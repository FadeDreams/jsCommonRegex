export function IsInt(num) {
  return Number.isInteger(num);
}

export function IsPositiveInt(s) {
  var re = /^\d+$/;
  return re.test(s);
}

export function IsDecimalNum(s) {
  var re = new RegExp(/^\d*(\.\d+)?$/);
  return re.test(s);
}

export function IsNum(s) {
  let re = /^-?\d*(\.\d+)?$/;
  return re.test(s);
}

export function IsAlphaNumeric(s) {
  let re = /^[a-zA-Z0-9]*$/;
  return re.test(s);
}

export function IsAlphaNumericWithSpace(s) {
  let re = /^[a-zA-Z0-9 ]*$/;
  return re.test(s);
}

export function IsEmail(email) {
  let re = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
  return re.test(email);
}

// At least 1 lowercase letter
// At least 1 uppercase letter
// At least 1 number
// At least 1 special character
// At least 8 characters long
export function IsGoodPassword(password) {
  let re1 = /[A-Z]/;
  let re2 = /[a-z]/;
  let re3 = /[0-9]/;
  let re4 = /[^\w\s]/;
  return (
    password.length >= 8 &&
    re1.test(password) &&
    re2.test(password) &&
    re3.test(password) &&
    re4.test(password)
  );
}

export function IsUsername(username) {
  let re = /^(?![-_]*$)[A-Za-z0-9][A-Za-z0-9-_]{3,20}[A-Za-z0-9]$/;
  return re.test(username);
}

export function IsURL(url) {
  let re =
    /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-F\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;
  return re.test(url);
}

export function IsIPv4(IPv4) {
  let re =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/;
  return re.test(IPv4);
}

export function IsIPv6(IPv6) {
  let re =
    /^([0-9A-Fa-f]{0,4}:){2,7}([0-9A-Fa-f]{1,4}$|((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4})$/;
  return re.test(IPv6);
}

export function IsDate_yyyy_mm_dd(date) {
  let re = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
  return re.test(date);
}

export function IsDate_dd_mm_yyyy(date) {
  let re = /^((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})$/;
  return re.test(date);
}

export function IsTime_hh_mm_12h(time) {
  let re = /^(1[0-2]|0?[1-9]):[0-5][0-9] ?[AaPp][Mm]$/;
  return re.test(time);
}

export function IsTime_hh_mm_24h(time) {
  let re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return re.test(time);
}

//check if time is in 24h format or 12h format
export function IsTime_hh_mm(time) {
  let re = /^(1[0-2]|0?[1-9]):[0-5][0-9] ?[AaPp][Mm]$/;
  let re2 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return re.test(time) || re2.test(time);
}

export function IsHtmlTag(html) {
  let re = /<\/?[a-z][^>]*>/;
  return re.test(html);
}

export function IsSlug(slug) {
  let re = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return re.test(slug);
}

export function IsTel(tel) {
  let re =
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
  return re.test(tel);
}

//export isInt function with es6 syntax
//export { IsInt };
