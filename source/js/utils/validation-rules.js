export const rules = {
  text: (value) => {
    if (!value) {
      return 'Пожалуйста, заполните это поле';
    } else {
      const nameRegEx = /[A-Za-zА-Яа-я-]/;
      const result = nameRegEx.test(value);
      if (!result) {
        return 'Введите корректное имя';
      }
    }
    return true;
  },

  checkbox: (value) => {
    if (value !== 'on') {
      return 'Пожалуйста, поставьте галочку в этом поле';
    }
    return true;
  },

  email: (value) => {
    if (!value) {
      return 'Пожалуйста, заполните это поле';
    } else {
      const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      const result = mailRegEx.test(value);
      if (!result) {
        return 'Введите корректный адрес электронной почты';
      }
    }
    return true;
  },

  tel: (value) => {
    if (!value) {
      return 'Пожалуйста, укажите номер телефона';
    } else {
      const MIN_LENGTH = 17;
      if (value.length < MIN_LENGTH) {
        return 'Введите корректный номер телефона';
      }
    }
    return true;
  },
};
