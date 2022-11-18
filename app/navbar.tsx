"use client";

import { Input, Navbar } from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar
      variant="floating"
      containerCss={{
        bg: "linear-gradient(145deg, rgba(255,255,255,1) 20%, rgba(3,21,255,1) 50%, rgba(255,0,0,1) 80%) !important",
      }}
    >
      <Navbar.Brand css={{ mr: "$4" }}>
        <Navbar.Content hideIn="xs" variant="highlight">
          <Navbar.Link isActive href="#">
            Dashboard
          </Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Activity</Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            status="error"
            bordered
            // contentLeft={
            //   <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            // }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-wrapper": {
                bg: "rgba(255,255,255, 0.75)",
              },
              //   "& .nextui-input-placeholder": {
              //     color: "black !important",
              //   },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Поиск..."
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
