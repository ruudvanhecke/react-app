import "firebase/compat/firestore";
import {firestoreDatabase} from "./firestore";


const COLLECTION_PERSONS = "persons";

export async function getPersonsFromDb() {
    if (!firestoreDatabase) return [];

    const result = await firestoreDatabase.collection(COLLECTION_PERSONS).get();
    if (result.empty) return [];

    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}