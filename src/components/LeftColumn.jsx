import ProfilePicture from "../components/ProfilePicture.jsx";

export default function RightColumn() {
  return (
    <div className="leftcolumn">
      <div className="card">
        <ProfilePicture />
        <h2>Tadeo Javier Cocucci</h2>
        <h5>Dr. en Ciencias de la Computación</h5>
        <p>
          <a href="mailto:tadeojcocucci@gmail.com">
            tadeojcocucci@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/tadeo-javier-cocucci-695ba697/"
            target="_blank"
          >
            linkedin
          </a>
        </p>
      </div>
    </div>
  );
}
