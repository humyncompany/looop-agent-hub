import { Topbar } from "@/components/layout/Topbar";
import { IsccChat } from "@/components/chat/IsccChat";

export default function IsccPage() {
  return (
    <>
      <Topbar title="ISCC Adviseur" />
      <IsccChat />
    </>
  );
}
