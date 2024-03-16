const validation = () => ({
  email: {
    presence: {
      allowEmpty: false,
      message: 'Please enter Email',
    },
    email: {
      message: 'Please enter valid Email',
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: 'Please enter Password',
    },
  },
  firstName: {
    presence: {
      allowEmpty: false,
      message: 'Please enter First Name',
    },
    // format: {
    //   pattern: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ.\s_-]+$/,
    //   message: `^${Constant.INVALID_FIRSTNAME}`,
    // },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: 'Please enter Last Name',
    },
    // format: {
    //   pattern: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ.\s_-]+$/,
    //   message: `^${Constant.INVALID_LASTNAME}`,
    // },
  },
 });

export default validation;
