import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalkOutlined";
import DraftsIcon from "@mui/icons-material/DraftsOutlined";

export const Cta = () => {
  return (
    <div className="center gap-12 text-para text-[14px] pt-4 font-semibold">
      <p>
        <PhoneInTalkIcon /> Mon-Fri: 8am-5pm +44 1111 222 333
      </p>
      <p>
        <DraftsIcon /> info@johncarter@email.com
      </p>
    </div>
  );
};
