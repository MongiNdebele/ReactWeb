import { useState } from "react";
import { Registration } from "../../../services/authService";
import { Card} from "react-bootstrap";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "@/sass/app-pages/form.module.sass";
import style from "@/sass/app-pages/card.module.sass";
import sty from "@/sass/app-pages/getstarted.module.sass";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return ;
    }
    try {
      console.log("Attempting registration...");
      await Registration(email, password);
      //redirect('/landingpage')
      router.push("/landingpage"); // Redirect after registration
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Card className={`h-100 ${style.card}`}>
      <Card.Body className={`d-flex flex-column justify-content-center ${style.cardbody}`}>
        <Card.Title className={`${style.cardtitle} mb-3`}>Create Account</Card.Title>
        <form onSubmit={handleSubmit}>
          <label className={`mb-3 d-flex flex-column`}>
            Email:
            <input
              //placeholder="email.email@mail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control input-text ${styles.inputtext}`}
              required
            />
          </label>
          <label className={`d-flex flex-column`}>
            Create Password:
            <div className={`mb-4 input-group ${styles.inputgroup}`}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control input-text ${styles.inputtext} ${styles.password}`}
                required
              />
              <button
                type="button"
                id="toggle-password"
                className={`${styles.togglepassword} p-2`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className={`${styles.eyeicon}`} />
                ) : (
                  <FaEye className={`${styles.eyeicon}`} />
                )}
              </button>
            </div>
          </label>
          <label className="d-flex flex-column">
            Confirm Password:
            <div className="mb-4 input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`form-control input-text ${styles.inputtext} ${styles.password}`}
                required
              />
              <button
                type="button"
                id="toggle-password"
                className={`${styles.togglepassword} p-2`}
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className={`${styles.eyeicon}`} />
                ) : (
                  <FaEye className={`${styles.eyeicon}`} />
                )}
              </button>
            </div>
          </label>
          <button
            type="submit"
            className={`btn w-100 ${sty.custombutton}`}
            aria-disabled="false"
          >
            Register
          </button>
          {error && <p className={`${textdanger}`}>{error}</p>}
        </form>
      </Card.Body>
    </Card>
  );
}
