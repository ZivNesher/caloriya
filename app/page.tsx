import { CalorieApp } from "@/components/CalorieApp";
import { PinGate } from "@/components/PinGate";

export default function Home() {
  return (
    <PinGate candidates={["ziv"]} title="זיו" subtitle="הזן/י את קוד ה-PIN שלך כדי להיכנס">
      <CalorieApp user="ziv" label="זיו" />
    </PinGate>
  );
}
