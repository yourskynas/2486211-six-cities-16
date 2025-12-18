const Loading = () :JSX.Element => (
  <div className="page page--favorites-empty">
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Loading</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Loading...</b>
            <p className="favorites__status-description">Please wait until the download is complete.</p>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Loading;
