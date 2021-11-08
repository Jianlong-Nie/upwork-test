import firestore from "@react-native-firebase/firestore";

const docs = [
  { id: "Yogurt", name: "Yogurt", count: 2, unit: "" },
  { id: "Yogurt1", name: "juice", count: 1, unit: "tablespoon" },
  { id: "Yogurt2", name: "Yogurt", count: 1, unit: "" },
  { id: "Yogurt3", name: "round cinnamon", count: 1, unit: "teaspoon" },
  { id: "Yogurt4", name: "warm water", count: 3, unit: "cups" },
  { id: "Yogurt5", name: "white sugar", count: 1, unit: "tablespoon" },
];

export async function massDelete() {
  const shoppingsQuerySnapshot = await firestore().collection("Shopping").get();

  // Create a new batch instance
  const batch = firestore().batch();

  shoppingsQuerySnapshot.forEach((documentSnapshot) => {
    batch.delete(documentSnapshot.ref);
  });

  return batch.commit();
}
export async function massAdd() {
  const batch = firestore().batch();
  docs.forEach((doc) => {
    let docRef = firestore().collection("Shopping").doc(doc.id); //automatically generate unique id
    batch.set(docRef, doc);
  });
  return batch.commit();
}
