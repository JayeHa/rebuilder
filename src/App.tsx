import { GlobalHeader } from "@components/GlobalHeader";
import { ScrollProgressController } from "@toss/scroll-animation";
import { ServicePage } from "./pages/servicePage";

export const App = () => {
  return (
    <div>
      <GlobalHeader theme="dark" />

      <ScrollProgressController>
        <ServicePage />
      </ScrollProgressController>
    </div>
  );
};
