import Form from './components/Form';

function App() {
  return (
    <>
      <header className="flex h-96 flex-col items-center justify-center gap-4 bg-red-500">
        <p className="text-display text-5xl text-white">YouTube to mp3 converter </p>
        <p className="text-xl text-red-200">Enter the video link</p>
      </header>

      <main className="relative mx-auto flex h-full w-fit flex-col gap-10">
        <Form />
      </main>

      <footer className="fixed bottom-0 w-full bg-red-500 text-center text-white">
        Developer by{' '}
        <a
          className="underline"
          target="_blank"
          href="https://galencar.vercel.app/"
          rel="noreferrer"
        >
          Gabriel Alencar
        </a>
      </footer>
    </>
  );
}

export default App;
