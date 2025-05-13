import { PlayArrow, History } from "@mui/icons-material";

import { Cycle } from "../../components/Cycle";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Timer } from "../../components/Timer";

export const Home = () => {
  return (
    <main>
      <Heading title="Texto">
        <History />
      </Heading>
      <Timer />
      <Input />
      <p className="categoryText">Nesse ciclo foque por 25 minutos!</p>
      <Cycle />
      <Button
        color="rgb(0, 191, 108)"
        onClick={() => null}
      >
        <PlayArrow />
      </Button>
    </main>
  );
};
