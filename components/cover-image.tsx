import { useState } from "react";
import {
  Button,
  Overlay,
  Image,
  AspectRatio,
  Center,
  Title,
  Box,
} from "@mantine/core";

import cn from "classnames";
import Link from "next/link";
import LoginModal from "./login";
import { useDisclosure } from "@mantine/hooks";
import { getCookie } from "cookies-next";

type Props = {
  title: string;
  src: string;
  slug?: string;
  premium: boolean;
};

const CoverImage = ({ title, src, slug, premium }: Props) => {
  const [overLayIsVisible, setOverLayIsVisible] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );

  return (
    <AspectRatio
      className="shadow hover:shadow-md"
      onMouseEnter={() => setOverLayIsVisible(true)}
      onMouseLeave={() => setOverLayIsVisible(false)}
      ratio={2}
    >
      <div className="sm:mx-0">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
      {overLayIsVisible && premium && !getCookie("jwt") && (
        <Overlay fixed center opacity={0.35}>
          <div className="flex justify-center flex-col">
            <p className="text-xl font-semibold text-white">Premium article</p>
            <Button
              mt={5}
              variant="gradient"
              gradient={{ from: "black", to: "gray" }}
              radius="xl"
              onClick={() => open()}
            >
              Login to view
            </Button>
          </div>
        </Overlay>
      )}
      <LoginModal opened={opened} close={close} />
    </AspectRatio>
  );
};

export default CoverImage;
