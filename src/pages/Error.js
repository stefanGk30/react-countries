import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <section className="section-center">
        <div className="error">
          <h1>Page not Found</h1>
          <Link to="/">Back Home</Link>
        </div>
      </section>
    </>
  );
};

export default Error;
