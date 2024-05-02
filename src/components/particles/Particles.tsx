import { styled } from "@mui/material/styles";
import { Particles as ReactParticles } from "react-particles";

const StyledReactParticles = styled(ReactParticles)({
  position: "fixed",
  opacity: "0.3",
});

export const Particles = () => {
  return (
    <StyledReactParticles
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Particles;
