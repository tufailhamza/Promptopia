import { title } from "process";
import "../styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",
};
const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav/>
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
