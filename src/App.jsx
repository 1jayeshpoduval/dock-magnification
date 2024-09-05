import Dock from "./Dock";

function App() {
  return (
    <>
      <section className="bg-tropical-indigo-700 h-screen text-white">
        <div className="mx-auto flex h-full w-[90%] max-w-screen-2xl items-center justify-center">
          <Dock />
        </div>
      </section>
    </>
  );
}

export default App;
