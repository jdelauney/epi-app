import epiLogo from '/images/EPI_logo.png';

const App = () => {
  return (
    <>
      <header className={'flex w-full h-28'}>
        <div className={'grid place-content-center bg-slate-100 w-1/3'}>
          <img src={epiLogo} alt={'EPI'} />
        </div>
        <div className={'flex items-end bg-monza-500 w-2/3 pb-3'}>
          <div className={'w-1/2 pl-3'}>
            <h1 className={'font-serif text-3xl md:text-5xl  text-slate-100'}>Création du profil</h1>
          </div>
          <div className={'flex justify-end w-1/2 pr-3'}>
            <div className={'grid place-content-center p-4 w-16 h-16 space-y-2 bg-slate-100 rounded shadow'}>
              <span className={'block w-10 h-0.5 bg-monza-500 animate-pulse'}></span>
              <span className={'block w-10 h-0.5 bg-monza-500 animate-pulse'}></span>
              <span className={'block w-10 h-0.5 bg-monza-500 animate-pulse'}></span>
            </div>
          </div>
        </div>
      </header>
      <div className={'w-full bg-slate-500 h-4'}>
        <div className={'bg-monza-600 h-4 w-1/12'}></div>
      </div>
      <section>
        <h2 className={'text-3xl md:text-5xl font-serif text-center mt-5'}>
          Bienvenue au cours
          <br />
          d’introduction
        </h2>
      </section>
    </>
  );
};

export default App;
