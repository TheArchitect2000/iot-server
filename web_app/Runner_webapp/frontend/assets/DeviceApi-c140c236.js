import{ag as a}from"./index-bf8a941f.js";async function r(e){return a.fetchData({url:`https://developer.fidesinnova.io/app/v1/device/get-devices-by-user-id/${e}`,method:"get"})}async function n(){return a.fetchData({url:"https://developer.fidesinnova.io/app/v1/device/get-all-shared-devices",method:"get"})}async function c(e,t){const i=new URLSearchParams({deviceEncryptedId:e,fieldName:"",daysBefore:t});return a.fetchData({url:`https://developer.fidesinnova.io/app/v1/device-log/get-device-log-by-encrypted-deviceid-and-field-name-and-number-of-days-before?${i.toString()}`,method:"get"})}export{r as a,c as b,n as c};
