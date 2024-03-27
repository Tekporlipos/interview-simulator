import { logEvent, setUserId } from "@firebase/analytics";
import analytics from "@/utlities/firebase";
import { generateUUID } from "@/utlities/functions";

export function screenView(screen: string, className: string) {
  if (analytics) {
    let userId = localStorage.getItem("userId") ?? generateUUID();
    setUserId(analytics, userId);
    localStorage.setItem("userId", userId);
    logEvent(analytics, "screen_view", {
      firebase_screen: screen,
      firebase_screen_class: className,
      user_id: userId,
    });
    logEvent(analytics, "last_seen", {
      user_id: userId,
      date: Date(),
    });
  }
}
