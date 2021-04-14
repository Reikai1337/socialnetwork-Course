import style from "./login.module.css";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {email,password,rememberMe} = data
    props.login(email,password,rememberMe)
  };

  return (
    <div className={style.wrapper}>
      <div className={style.inputMenu}>
        <span>Login</span>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className={style.inputArea}
            placeholder="Email"
            {...register("email", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.email && (
            <div className={style.errorMessage}>You need to specify mail</div>
          )}

          <input
            type="password"
            className={style.inputArea}
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
          />
          {errors.password && (
            <div className={style.errorMessage}>
              You need to specify password
            </div>
          )}
          <div className={style.checkbox}>
            Remember me
            <input type="checkbox" {...register('rememberMe')}/>
          </div>
          <input type="submit" value="Login" className={style.submit} />
        </form>
      </div>
    </div>
  );
};
export default Login;
