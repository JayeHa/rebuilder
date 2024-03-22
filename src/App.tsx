import { GlobalHeader } from "@components/GlobalHeader";
import { ServicePage } from "./pages/servicePage";

export const App = () => {
  return (
    <div>
      <GlobalHeader theme="dark" />
      <ServicePage />
    </div>
  );
};
