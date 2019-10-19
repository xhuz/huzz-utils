export const matchEmail = /([A-Za-z0-9_\-.]+@[A-Za-z0-9_\-]+\.[A-Za-z._\-]+)/; // 匹配邮箱地址
export const matchPhoneNum = /^(13[0-9]{1}|14[5|7|9]{1}|15[0-3|5-9]{1}|166|17[0-3|5-8]{1}|18[0-9]{1}|19[8-9]{1}){1}\d{8}$/; // 匹配手机号
export const matchLastForwardSlash = /[^/]+(?!.*\/)/; // 匹配最后一个/后面的
export const matchComma = /(?!,)(.+?)(?=,|$)/;  // 从逗号隔开的字符串中提取字符
