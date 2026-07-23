import { CalorieApp } from "@/components/CalorieApp";
import { PinGate } from "@/components/PinGate";

export default function MamaPage() {
  return (
    <PinGate candidates={["mama"]} title="מאמא" subtitle="הזן/י את קוד ה-PIN כדי להיכנס">
      <CalorieApp user="mama" label="מאמא" />
    </PinGate>
  );
}
