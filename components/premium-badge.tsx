import { Badge } from "@mantine/core";
import { FaLock, FaUnlock } from "react-icons/fa";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const PremiumArticleBadge = () => {
  const [jwt, setJwt] = useState<string>();

  useEffect(() => {
    // fetch it on client-side so we maintain consistency with client and server HTML code in SSR
    setJwt(getCookie("jwt"));
  }, []);

  return (
    <Badge
      // user has a jwt (AKA they're logged in) so change icon to unlocked
      rightSection={jwt ? <FaUnlock /> : <FaLock />}
      size="lg"
      color={jwt ? "teal" : "cyan"}
      variant="filled"
    >
      Premium article
    </Badge>
  );
};

export default PremiumArticleBadge;
