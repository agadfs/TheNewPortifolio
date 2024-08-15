"use client";

import { useContext, useState } from "react";
import ButtonTextAnimator from "../ButtonAnimator";
import { AppContext } from "../context";

export default function HeaderPc1({
  links,
  texts,
  textOnHovers,
  colorBorder,
  colorText,
  colorBackground,
}) {
  const handleClick = (link) => {
    window.location.href = `/${link}`;
  };
  const handleClickMobile = () => {
    setOpenMenu(!openMenu);
  };
  const { state, setState } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);
  if (state.mobile)
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "2%",
            paddingRight: "3%",
          }}
        >
          <div
            onClick={() => {
              handleClickMobile();
            }}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                filter: "drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))",
                backgroundColor: "rgba(102, 252, 241, 1)",
                height: "1vh",
                width: "50px",
                borderRadius: "50px",
              }}
            />
            <div
              style={{
                filter: "drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))",
                backgroundColor: "rgba(102, 252, 241, 1)",
                height: "1vh",
                width: "50px",
                borderRadius: "50px",
              }}
            />
            <div
              style={{
                filter: "drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))",
                backgroundColor: "rgba(102, 252, 241, 1)",
                height: "1vh",
                width: "50px",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              display:"flex",
              flexWrap: "nowrap",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgb(15, 15, 15, 1)",
              padding: "0px",
              borderEndEndRadius: "30px",
              borderEndStartRadius: "30px",
              alignItems: "center",
              gap: "1vh",
              position: "absolute",
              zIndex: "100",
              right: !openMenu ? "110%" : "0%",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {texts?.map((text, index) => {
              const [isHovered, setIsHovered] = useState(false);
              const textOnHover = textOnHovers[index];

              return (
                <div
                  key={index}
                  className={`button ${isHovered ? "hovered" : ""}`}
                  style={{
                    border: `2px solid ${colorBorder}`,
                    width: !isHovered ? `${80}%` : `${80}%`,
                    minWidth: "180px",
                    textAlign: "center",
                    padding: "20px",
                    fontWeight: "500",
                    fontSize: "1.3vw",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    color: !isHovered ? colorText : "#1F2833",
                    backgroundColor: !isHovered ? colorBackground : colorBorder,
                    cursor: "pointer",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    filter: "drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))",
                    transition:
                      "filter 0.4s ease-in-out, color 0.4s ease-in-out, background-color 0.4s ease-in-out, width 0.4s ease-in-out, transform 0.4s ease-in-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => handleClick(links[index])}
                >
                  {!isHovered ? (
                    <ButtonTextAnimator
                      backgroundColor={colorBackground}
                      text={text}
                    />
                  ) : (
                    <ButtonTextAnimator
                      text={textOnHover}
                      backgroundColor={colorBorder}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        width: "auto",
        justifyContent: "center",
        marginBottom: "2vh",
        backgroundColor: "rgb(15, 15, 15, 0.1)",
        padding: "20px",
        borderEndEndRadius: "30px",
        borderEndStartRadius: "30px",
        gap: "2%",
      }}
    >
      {texts?.map((text, index) => {
        const [isHovered, setIsHovered] = useState(false);
        const textOnHover = textOnHovers[index];

        return (
          <div
            key={index}
            className={`button ${isHovered ? "hovered" : ""}`}
            style={{
              border: `2px solid ${colorBorder}`,
              width: !isHovered ? `${10}%` : `${25}%`,
              minWidth: "180px",
              textAlign: "center",
              padding: "20px",
              fontWeight: "500",
              fontSize: "1.3vw",
              whiteSpace: "nowrap",
              overflow: "hidden",
              color: !isHovered ? colorText : "#1F2833",
              backgroundColor: !isHovered ? colorBackground : colorBorder,
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "10px",
              filter: "drop-shadow(0 0 10px rgba(102, 252, 241, 0.8))",
              transition:
                "filter 0.4s ease-in-out, color 0.4s ease-in-out, background-color 0.4s ease-in-out, width 0.4s ease-in-out, transform 0.4s ease-in-out",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleClick(links[index])}
          >
            {!isHovered ? (
              <ButtonTextAnimator
                backgroundColor={colorBackground}
                text={text}
              />
            ) : (
              <ButtonTextAnimator
                text={textOnHover}
                backgroundColor={colorBorder}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
