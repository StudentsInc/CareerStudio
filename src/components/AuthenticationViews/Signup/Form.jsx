import { useState, useReducer } from "react";
import SignUpOptions from "./SignUpOptions";
import { Link } from "react-router-dom";
import "../../../pages/pagesStyle.css";
const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;

// Email validation & setter
const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.val,
      isValid: regEx.test(action.val) ? true : false,
    };
  } else if (action.type === "EMAIL_BLUR") {
    return {
      value: state.value,
      isValid: regEx.test(state.value) ? true : false,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

// Password validation & setter
const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 8,
    };
  }
  if (action.type === "PASSWORD_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 8,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const fullNameReducer = (state, action) => {
  if (action.type === "FULLNAME_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "FULLNAME_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const userNameReducer = (state, action) => {
  if (action.type === "USERNAME_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "USERNAME_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Form = (props) => {
  const [fullNameState, dispatchFullName] = useReducer(fullNameReducer, {
    value: "",
    isValid: null,
  });
  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(null);
  const validateForm = () => {
    setFormIsValid(
      emailState.isValid &&
        passwordState.isValid &&
        fullNameState.isValid &&
        userNameState.isValid
    );
  };
  const handlechangeFullName = (e) => {
    dispatchFullName({ type: "FULLNAME_INPUT", val: e.target.value });
    validateForm();
  };

  const handlechangeUserName = (e) => {
    dispatchUserName({ type: "USERNAME_INPUT", val: e.target.value });
    validateForm();
  };

  const handleChangeEmail = (e) => {
    dispatchEmail({
      type: "EMAIL_INPUT",
      val: e.target.value,
    });
  };

  const validateEmail = () => {
    dispatchEmail({
      type: "EMAIL_BLUR",
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    dispatchPassword({ type: "PASSWORD_INPUT", val: e.target.value });
    validateForm();
  };

  const validatePassword = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
    validateForm();
  };

  const validateFullName = () => {
    dispatchFullName({ type: "FULLNAME_BLUR" });
    validateForm();
  };

  const validateUserName = () => {
    dispatchPassword({ type: "USERNAME_BLUR" });
    validateForm();
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const userInfo = {
        fullName: fullNameState,
        userName: userNameState,
        email: emailState,
        password: passwordState,
      };

      props.submitForm(userInfo);
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <form className="mt-10" onSubmit={submitHandle}>
      <div className="sm:flex">
        <div className="sm:w-1/2 flex flex-col">
          <label
            className="text-gray-color relative input__label w-fit"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className={`sm:mr-5 mt-3 text-white px-[20px] py-[16px] border-1 ${
              fullNameState.isValid ? "border-green-500" : ""
            } outline-none bg-transparent rounded-md border border-gray-300`}
            placeholder="Jhon Snow"
            required
            onChange={handlechangeFullName}
            onBlur={validateFullName}
            value={fullNameState.value}
          />
        </div>
        <div className="sm:w-1/2 flex flex-col min-[200px]:mt-3 sm:mt-0">
          <label
            className="text-gray-color relative input__label w-fit"
            htmlFor="user-name"
          >
            User Name
          </label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            className={`mt-3 text-white pr-5 border-1 px-[20px] py-[16px] ${
              userNameState.isValid ? "border-green-500" : ""
            } outline-none bg-transparent rounded-md border border-gray-300`}
            placeholder="Jhon Snow"
            required
            onChange={handlechangeUserName}
            onBlur={validateUserName}
            value={userNameState.value}
          />
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <label
          className="text-gray-color relative input__label w-fit"
          htmlFor="email-address"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          className={`mt-3 text-white pr-5 border-1 px-[20px] py-[16px] ${
            emailState.isValid ? "border-green-500" : ""
          } outline-none bg-transparent rounded-md border border-gray-300`}
          placeholder="WinterIsComing@gmail.com"
          onChange={handleChangeEmail}
          onBlur={validateEmail}
          value={emailState.value}
        />
      </div>
      <div className="flex flex-col mt-3">
        <label
          className="text-gray-color relative input__label w-fit"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={`mt-3 text-white pr-5 border-1 px-[20px] py-[16px] ${
            passwordState.isValid ? "border-green-500" : ""
          } outline-none bg-transparent rounded-md border border-gray-300`}
          placeholder="Contains 8 characters atleast"
          onChange={handleChangePassword}
          onBlur={validatePassword}
          value={passwordState.value}
        />
      </div>

      <div className="mt-3">
        <div className="checkboxes__item">
          <label className="checkbox style-d text-gray-color flex relative cursor-pointer select-none">
            <div>
              <input
                type="checkbox"
                className="opacity-0 cursor-pointer absolute"
                name="newsletter"
              />
              <div className="checkbox__checkmark relative mr-4 top-1 left-0 h-[22px] w-[22px] bg-transparent border-2 border-gray-300 transition ease-in-out duration-250 rounded-full"></div>
            </div>
            <div>I would like to receive newsletter</div>
          </label>
        </div>

        <div className="checkboxes__item mt-3">
          <label className="checkbox style-d text-gray-color flex items-start relative cursor-pointer select-none">
            <div>
              <input
                type="checkbox"
                className="opacity-0 cursor-pointer absolute"
                name="agreement"
              />
              <div className="checkbox__checkmark relative mr-4 top-1 left-0 h-[22px] w-[22px] bg-transparent border-2 border-gray-300 transition ease-in-out duration-250 rounded-full"></div>
            </div>
            <div>
              By continuing, you agree to our
              <span className="text-blue-dark">
                <a href="#"> Terms of Service</a>
              </span>{" "}
              and have read our
              <span className="text-blue-dark">
                <a href="#"> Privacy Policy</a>
              </span>
              .
            </div>
          </label>
        </div>
      </div>
      <SignUpOptions onSubmitHandler={submitHandle} />
    </form>
  );
};
export default Form;
