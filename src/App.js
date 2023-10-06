import Layout from "./components/layout/layout";
import UseGeo from "./utils/hooks/useGEO";

function App() {

    UseGeo();

  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
