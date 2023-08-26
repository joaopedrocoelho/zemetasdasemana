import React, { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "@/context/modalContext";
import EditAward from "./modals/EditAward";
import { nougat } from "@/pages/_app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { activeWeek } from "@/firebase/models";

function formatDateFromUnixTimestamp(unixTimestamp: number): string {
  // Create a JavaScript Date object from the Unix timestamp (it should be in milliseconds)
  const date = new Date(unixTimestamp * 1000);

  // Extract the day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JS
  const year = date.getFullYear();

  // Format and return the date
  return `${day}/${month}/${year}`;
}

const Header = ({
  award,
  updatedAt,
  deadline,
}: Omit<activeWeek, "currentPoints" | "targetPoints">) => {
  const [user, loading, error] = useAuthState(auth);
  const { setModal } = useContext(ModalContext);
  const formattedUpdatedAt = formatDateFromUnixTimestamp(updatedAt);
  const formattedDeadline = formatDateFromUnixTimestamp(deadline);

  return (
    <div className="flex flex-col gap-y-2  mb-16 items-center">
      <h1 className={`font-nougat text-4xl font-bold`}>Metas da Semana</h1>
      <h5>
        de {formattedUpdatedAt} até {formattedDeadline}
      </h5>
      <h2 className="text-xl mt-4 flex gap-x-4 items-center">
        <b className="font-lilita">Prêmio:</b> {award}
        {/* parte de admin */}
        {user && (
          <Button
            color="amber"
            onClick={() => {
              setModal(<EditAward />);
            }}
            label="Editar premio"
          />
        )}
      </h2>
    </div>
  );
};

export default Header;
