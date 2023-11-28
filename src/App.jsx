import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
// import Header from "./";

function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16">
        {/* <h2 className="text-9xl">Bilal</h2> */}
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
