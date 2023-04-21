import Layout from "@/components/layout";
import "@/styles/globals.css";
import "../styles/main.css";
import FormContextProvider from "@/components/context/formContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <FormContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FormContextProvider>
    </>
  );
}
