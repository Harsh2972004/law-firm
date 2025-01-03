import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalkOutlined";
import DraftsIcon from "@mui/icons-material/DraftsOutlined";

export const Cta = () => {
  return (
    <div className="center gap-12 text-para lgl:text-[13px] md:text-[12px] pt-4 font-semibold hide">
      <p>
        <PhoneInTalkIcon /> Mon-Fri: 8am-5pm +44 1111 222 333
      </p>
      <p>
        <DraftsIcon /> info@johncarter@email.com
      </p>
    </div>
  );
};
