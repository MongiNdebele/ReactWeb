import React, { useState } from "react";
import { useRouter} from "next/navigation";
import { Card, Row, Col } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../../services/authService";
import styles from "@/sass/app-pages/form.module.sass";
import style from "@/sass/app-pages/card.module.sass";
import sty from "@/sass/app-pages/getstarted.module.sass";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      router.push('/protected');
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className={`h-100 ${style.card}`}>
      <Card.Body className={`d-flex flex-column justify-content-center ${style.cardbody}`}>
        <Card.Title className={`${style.cardtitle}`}>Sign in</Card.Title>
        <form onSubmit={handleSubmit}>
          <div className={`mb-3`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control input-text ${styles.inputtext} ${styles.input}`} //p-3
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email.email@mail.com"
              required
            />
          </div>
          <div className={`mb-4 input-group ${styles.inputgroup}`}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control input-text ${styles.inputtext} ${styles.password}`} // p-3
              id="exampleInputPassword1"
              placeholder="*********************"
              required
            />
            <button
              type="button"
              id="toggle-password"
              className={`${styles.togglepassword} p-2`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className={`${styles.eyeicon}`}/> : <FaEye className={`${styles.eyeicon}`}/>}
            </button>
          </div>
          <button
            type="submit"
            className={`btn w-100 ${sty.custombutton}`}
          >
            Sign in
          </button>
          {error && <p className={`${styles.textdanger}`}>{error}</p>}
          {/*           <button type="submit" className="btn w-100 custom-button">
            Sign in
          </button> */}
          <div>
            <Row className={`d-flex align-items-center justify-content-between ${styles.or}`}>
              <Col>
                <hr className={`${styles.lines}`}/>
              </Col>
              <Col className={`col-1  text-nowrap ${styles.othertext}`}>
                <div className={`d-flex justify-content-center ${styles.ortext}`}>or</div>
              </Col>
              <Col>
                <hr className={`${styles.lines}`}/>
              </Col>
            </Row>
          </div>
          <Row className="mb-4">
            <Col>
              <button type="button" className={`p-2 btn w-100 ${style.button}`}>
                Google
              </button>
            </Col>
            <Col>
              <button type="button" className={`p-2 btn w-100 ${style.button}`}>
                Facebook
              </button>
            </Col>
          </Row>
          <div className={`${sty.signintext} text-center text-nowrap`}>
            Don't have an account?{" "}
            <a href="/auth/register" className={`${sty.signintext}`}>
              Sign up
            </a>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default SignIn;

//container text-center d-inline-block

{
  /* <a
            href="http://localhost:3000/landingpage"
            className="btn w-100 custom-button"
            role="button"
            aria-disabled="false"
          >
            Sign in
          </a> */
}
