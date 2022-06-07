import { app as Firebase } from '../firebase/config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const ReadDataFromFireStore = () => {
	const database = getFirestore(Firebase);

	const readData = async () => {
		const dishesCollection = collection(database, 'dishes');
		const dishesSnapshot = await getDocs(dishesCollection);
		const dishes = dishesSnapshot.docs.map((doc) => doc.data());
		console.log(dishes);
	};

	return (
		<div>
			<button onClick={readData}>read data</button>
		</div>
	);
};

export default ReadDataFromFireStore;
