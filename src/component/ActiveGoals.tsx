import React from "react";
import Goal from "./Goal";
import AdminBtns from "./AdminBtns";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ActiveGoals = () => {
  const [user] = useAuthState(auth);
  const [value, loading, error] = useCollection(collection(db, "activeGoals"));

  return (
    <div className="flex flex-col gap-y-8 w-full items-center">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Carregando metas...</span>}
      {value && (
        <>
          {!!value.docs.length &&
            value.docs.map((doc) => {
              return (
                <Goal
                  key={doc.id}
                  id={doc.id}
                  title={doc.data().title}
                  points={doc.data().points}
                  worth={doc.data().worth}
                />
              );
            })}
          {user && <AdminBtns />}
        </>
      )}
    </div>
  );
};

export default ActiveGoals;
