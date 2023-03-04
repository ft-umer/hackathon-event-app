import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { eventTypes } from "@/types/eventTypes";

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [event, setEvent] = useState<eventTypes | null>(null);

  useEffect(() => {
    if (id) {
      getEvent(id as string);
    }
  }, [id]);

  const getEvent = async (id: string) => {
    try {
      const eventRef = doc(db, "addEvent", id);
      const eventDoc = await getDoc(eventRef);
      if (eventDoc.exists()) {
        const eventData = eventDoc.data() as eventTypes;
        setEvent({
          id: eventDoc.id,
          title: eventData.title,
          date: eventData.date,
          time: eventData.time,
          location: eventData.location,
          description: eventData.description,
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("================catch====================");
      console.log(error);
      console.log("====================================");
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
    </div>
  );
}
