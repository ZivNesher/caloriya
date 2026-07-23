import { CompeteView } from "@/components/CompeteView";
import { PinGate } from "@/components/PinGate";

export default function CompetePage() {
  return (
    <PinGate candidates={["ziv", "mama"]} title="תחרות" subtitle="הזן/י את קוד ה-PIN שלך (של זיו או של מאמא)">
      <CompeteView />
    </PinGate>
  );
}
