import { parseISO, format } from "date-fns";
import { memo } from "react";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="mt-auto">
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default memo(DateFormatter)
