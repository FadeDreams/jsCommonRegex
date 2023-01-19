/* eslint-disable */
import * as jscommonregex from "./index.js";

test("jscommonregex", () => {
  expect(jscommonregex.IsInt(1)).toBe(true);
  expect(jscommonregex.IsInt(1.1)).toBe(false);
  expect(jscommonregex.IsInt("1")).toBe(false);
  expect(jscommonregex.IsInt("1.1")).toBe(false);
  expect(jscommonregex.IsInt("a")).toBe(false);
  expect(jscommonregex.IsInt("")).toBe(false);
  expect(jscommonregex.IsInt(null)).toBe(false);
  expect(jscommonregex.IsInt(undefined)).toBe(false);
  expect(jscommonregex.IsInt(true)).toBe(false);
  expect(jscommonregex.IsInt(false)).toBe(false);
  expect(jscommonregex.IsInt([])).toBe(false);
  expect(jscommonregex.IsInt({})).toBe(false);
  expect(jscommonregex.IsInt(NaN)).toBe(false);
  expect(jscommonregex.IsInt(Infinity)).toBe(false);
  expect(jscommonregex.IsInt(-Infinity)).toBe(false);
  expect(jscommonregex.IsInt(0)).toBe(true);
  expect(jscommonregex.IsInt(-1)).toBe(true);
  expect(jscommonregex.IsInt(1.0)).toBe(true);
  expect(jscommonregex.IsInt(-1.0)).toBe(true);

  expect(jscommonregex.IsPositiveInt(1)).toBe(true);
  expect(jscommonregex.IsPositiveInt(1.1)).toBe(false);
  expect(jscommonregex.IsPositiveInt("1")).toBe(true);
  expect(jscommonregex.IsPositiveInt("1.1")).toBe(false);
  expect(jscommonregex.IsPositiveInt("a")).toBe(false);
  expect(jscommonregex.IsPositiveInt("")).toBe(false);
  expect(jscommonregex.IsPositiveInt(null)).toBe(false);
  expect(jscommonregex.IsPositiveInt(undefined)).toBe(false);
  expect(jscommonregex.IsPositiveInt(true)).toBe(false);
  expect(jscommonregex.IsPositiveInt(false)).toBe(false);
  expect(jscommonregex.IsPositiveInt([])).toBe(false);
  expect(jscommonregex.IsPositiveInt({})).toBe(false);
  expect(jscommonregex.IsPositiveInt(NaN)).toBe(false);
  expect(jscommonregex.IsPositiveInt(Infinity)).toBe(false);
  expect(jscommonregex.IsPositiveInt(-Infinity)).toBe(false);
  expect(jscommonregex.IsPositiveInt(-1)).toBe(false);
  expect(jscommonregex.IsPositiveInt(1.0)).toBe(true);
  expect(jscommonregex.IsPositiveInt(-1.0)).toBe(false);

  expect(jscommonregex.IsDecimalNum(1)).toBe(true);
  expect(jscommonregex.IsDecimalNum(1.1)).toBe(true);

  expect(jscommonregex.IsNum(1)).toBe(true);
  expect(jscommonregex.IsNum(1.1)).toBe(true);

  expect(jscommonregex.IsAlphaNumeric("a")).toBe(true);
  expect(jscommonregex.IsAlphaNumeric("1")).toBe(true);
  expect(jscommonregex.IsAlphaNumeric("a1")).toBe(true);
  expect(jscommonregex.IsAlphaNumeric("a1.")).toBe(false);
  expect(jscommonregex.IsAlphaNumeric("a1.1")).toBe(false);
  expect(jscommonregex.IsAlphaNumeric("a1.1a")).toBe(false);
  expect(jscommonregex.IsAlphaNumeric("a1.1a1")).toBe(false);

  expect(jscommonregex.IsAlphaNumericWithSpace("a")).toBe(true);
  expect(jscommonregex.IsAlphaNumericWithSpace("1")).toBe(true);
  expect(jscommonregex.IsAlphaNumericWithSpace("a1")).toBe(true);
  expect(jscommonregex.IsAlphaNumericWithSpace("a1.")).toBe(false);
  expect(jscommonregex.IsAlphaNumericWithSpace("a1.1")).toBe(false);
  expect(jscommonregex.IsAlphaNumericWithSpace("a1.1a")).toBe(false);
  expect(jscommonregex.IsAlphaNumericWithSpace("a1.1a1")).toBe(false);
  expect(jscommonregex.IsAlphaNumericWithSpace("a 1")).toBe(true);
  expect(jscommonregex.IsAlphaNumericWithSpace("a 1.")).toBe(false);
  expect(jscommonregex.IsAlphaNumericWithSpace("a 1.1")).toBe(false);

  expect(jscommonregex.IsEmail("x1@x1.com")).toBe(true);
  expect(jscommonregex.IsEmail("x1@x1")).toBe(false);
  expect(jscommonregex.IsEmail("x1@x1.")).toBe(false);

  expect(jscommonregex.IsURL("http://x1.com")).toBe(true);
  expect(jscommonregex.IsURL("http://x1")).toBe(false);
  expect(jscommonregex.IsURL("http://x1.")).toBe(false);

  expect(jscommonregex.IsGoodPassword("BcA#$12345678")).toBe(true);
  expect(jscommonregex.IsGoodPassword("1234567")).toBe(false);
  expect(jscommonregex.IsGoodPassword("1234567890")).toBe(false);
  expect(jscommonregex.IsGoodPassword("12345678901")).toBe(false);

  expect(jscommonregex.IsIPv4("192.168.1.1")).toBe(true);
  expect(jscommonregex.IsIPv4("0.0.0.0")).toBe(true);
  expect(jscommonregex.IsIPv4("1.111.0")).toBe(false);

  expect(jscommonregex.IsIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(
    true
  );
  expect(jscommonregex.IsIPv6("2001:db8:85a3:0:0:8a2e:370:7334")).toBe(true);
  expect(jscommonregex.IsIPv6("2001:db8:85a3::8a2e:370:7334")).toBe(true);
  expect(jscommonregex.IsIPv6("2001:db8:85a3:0:0:8a2e:370:7334")).toBe(true);
  expect(jscommonregex.IsIPv6("2001:db8:85a3:0:0:8a2e:370:7334")).toBe(true);
  expect(jscommonregex.IsIPv6("2001:db8:85a3:0:0:8a2e:370:7334")).toBe(true);
  expect(jscommonregex.IsIPv6("2001:db8:85a3:0:0:8a2e370:7334")).toBe(false);

  expect(jscommonregex.IsDate_yyyy_mm_dd("2019-01-01")).toBe(true);
  expect(jscommonregex.IsDate_yyyy_mm_dd("2019-01-01")).toBe(true);
  expect(jscommonregex.IsDate_yyyy_mm_dd("2019-01-1")).toBe(false);
  expect(jscommonregex.IsDate_yyyy_mm_dd("2019-1-01")).toBe(false);
  expect(jscommonregex.IsDate_yyyy_mm_dd("2019-01-1")).toBe(false);
  expect(jscommonregex.IsDate_yyyy_mm_dd("2019-1-01")).toBe(false);

  expect(jscommonregex.IsDate_dd_mm_yyyy("01-01-2019")).toBe(true);
  expect(jscommonregex.IsDate_dd_mm_yyyy("01-01-2019")).toBe(true);
  expect(jscommonregex.IsDate_dd_mm_yyyy("01-1-2019")).toBe(false);
  expect(jscommonregex.IsDate_dd_mm_yyyy("1-01-2019")).toBe(false);
  expect(jscommonregex.IsDate_dd_mm_yyyy("01-1-2019")).toBe(false);
  expect(jscommonregex.IsDate_dd_mm_yyyy("1-01-2019")).toBe(false);

  expect(jscommonregex.IsTime_hh_mm_12h("01:01 AM")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm_12h("01:01 PM")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm_12h("01:01 am")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm_12h("01:01 pm")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm_12h("01:01")).toBe(false);
  expect(jscommonregex.IsTime_hh_mm_12h("01:01 amm")).toBe(false);

  expect(jscommonregex.IsTime_hh_mm_24h("01:01")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm_24h("01:01 am")).toBe(false);
  expect(jscommonregex.IsTime_hh_mm_24h("01:01 pm")).toBe(false);
  expect(jscommonregex.IsTime_hh_mm_24h("01:01 amm")).toBe(false);

  expect(jscommonregex.IsTime_hh_mm("01:01")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm("01:01 am")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm("01:01 pm")).toBe(true);
  expect(jscommonregex.IsTime_hh_mm("01:01 amm")).toBe(false);

  expect(jscommonregex.IsHtmlTag("<div>")).toBe(true);
  expect(jscommonregex.IsHtmlTag("<div")).toBe(false);

  expect(jscommonregex.IsSlug("this-is-a-slug")).toBe(true);
  expect(jscommonregex.IsSlug("this-is-a-slug-")).toBe(false);
  expect(jscommonregex.IsSlug("this-is-a-slug-1")).toBe(true);
  expect(jscommonregex.IsSlug("this-is-a-slug-1-")).toBe(false);
  expect(jscommonregex.IsSlug("this-is-a-slug-1-1")).toBe(true);

  expect(jscommonregex.IsTel("+1 (555) 555-5555")).toBe(true);
  expect(jscommonregex.IsTel("555-555-5555")).toBe(true);
  expect(jscommonregex.IsTel("555 555 5555")).toBe(true);
  expect(jscommonregex.IsTel("555 555-5555 x1234")).toBe(true);
  expect(jscommonregex.IsTel("555 555-5555 ext1234")).toBe(true);
  expect(jscommonregex.IsTel("555")).toBe(true);
});
