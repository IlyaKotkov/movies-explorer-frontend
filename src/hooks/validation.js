// import { useState } from "react";
// import validator from "validator";

// const deleteKeyFromObj = (object, keyName) => {
//     const result = Object.assign({}, object);
//     delete result[keyName];
  
//     return result;
//   };

// export const useCustomValidation = (currentName, currentEmail) => {
//     const [errors, setErrors] = useState({});
//     const [isFormValid, setIsFormValid] = useState(false);
  
//     const setRequiredError = (name) => {
//       setErrors({ ...errors, [name]: "Это обязательное поле" });
//     };

//     const validate = (name, value) => {
//         switch (name) {
//           case "name":
//             // сравниванием значение из инпута и значение их хранилища
//             if (value === currentName) {
//               // не отображаем ошибку, а просто отключаем кнопку, поэтому пустая строка
//               setErrors({ ...errors, [name]: "" });
//             } else if (value.length === 0) {
//               setRequiredError(name);
//             } else if (value.length < 2) {
//               setErrors({
//                 ...errors,
//                 [name]: "Минимальное количество символов — 2",
//               });
//             } else if (value.length >= 30) {
//               setErrors({
//                 ...errors,
//                 [name]: "Максимальное количество символов — 30",
//               });
//             } else if (!new RegExp(/^[а-яА-ЯёЁa-zA-Z\s/-]+$/).test(value)) {
//               setErrors({
//                 ...errors,
//                 [name]: "Используйте буквы, дефис или пробел",
//               });
//             } else {
//               const newErrors = deleteKeyFromObj(errors, name);
//               setErrors(newErrors);
//             }
//             break;
//           case "email":
//             if (value === currentEmail) {
//               setErrors({ ...errors, [name]: "" });
//             } else if (value.length === 0) {
//               setRequiredError(name);
//             } else if (!validator.isEmail(value)) {
//               setErrors({
//                 ...errors,
//                 [name]: "Некорректный адрес электронной почты",
//               });
//             } else {
//               const newObjErrors = deleteKeyFromObj(errors, name);
//               setErrors(newObjErrors);
//             }
//             break;
//           case "password":
//             if (value.length === 0) {
//               setRequiredError(name);
//             } else if (value.length < 8) {
//               setErrors({
//                 ...errors,
//                 [name]: "Минимальная длина пароля — 8 символов",
//               });
//             } else {
//               const newObj = deleteKeyFromObj(errors, name);
//               setErrors(newObj);
//             }
//             break;
//           default:
//             break;
//         }
//       };
       
//       return {
//         errors,
//         isFormValid,
//         setIsFormValid,
//       };
// }