import { Box, Menu } from "@mantine/core";
import { CMS_NAME } from "../lib/constants";
import Avatar from "./avatar";
import { useEffect, useState } from "react";
import { CookieValueTypes, deleteCookie, getCookie } from "cookies-next";

const Intro = () => {
  const [opened, setOpened] = useState(false);
  const [jwt, setJwt] = useState<CookieValueTypes>(undefined);
  useEffect(() => {
    setJwt(getCookie("jwt"));
  }, []);

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
      {/* user has a jwt (AKA they're logged in) show their avatar */}

      {jwt ? (
        <Menu opened={opened} onChange={setOpened} width={200} trigger="hover">
          <Menu.Target>
            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: 10,
                padding: "0.5%",
              }}
              onMouseEnter={() => setOpened(true)}
              onMouseLeave={() => setOpened(false)}
            >
              <Avatar
                name="Joe"
                picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              />
            </Box>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item color="red" onClick={() => deleteCookie("jwt")}>
              Log out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : null}
    </section>
  );
};

export default Intro;
