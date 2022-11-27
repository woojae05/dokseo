import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import { AiOutlineSearch } from "react-icons/ai";
import useTheme from "hooks/useTheme";

const ThemeToggle = () => {
  const { darkThemeState, setDarkThemeState } = useTheme();
  const [props, api] = useSpring(() => {
    delay: 0.1;
  });
  return (
    <>
      {darkThemeState ? (
        <>
          <animated.span style={props}>
            <BsFillMoonFill
              size={"30px"}
              color="#fff"
              onClick={() => {
                setDarkThemeState((prev) => !prev);
                api.start({ rotateZ: 360, delay: 0.1 });
              }}
            />
          </animated.span>
        </>
      ) : (
        <>
          <animated.span style={props}>
            <BsFillSunFill
              size={"30px"}
              onClick={() => {
                setDarkThemeState((prev) => !prev);
                api.start({ rotateZ: 0, delay: 0.1 });
              }}
            />
          </animated.span>
        </>
      )}
    </>
  );
};

export default ThemeToggle;
