import { ScrollProgressController } from "@toss/scroll-animation";
import { ServicePage } from "./pages/servicePage";

export const App = () => {
  return (
    <ScrollProgressController>
      <ServicePage />
    </ScrollProgressController>
  );
};
