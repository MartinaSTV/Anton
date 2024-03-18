import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Startsida</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Gå till logga in
      </button>
    </section>
  );
};
export default Landingpage;
