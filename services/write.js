import { app as Firebase } from '../firebase/config';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const WriteToFireStore = () => {
	const database = getFirestore(Firebase);

	const storeData = async () => {
		try {
			const docRef = await addDoc(collection(database, 'testing'), {
				first: 'Ada',
				last: 'Lovelace',
				born: 1815,
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (error) {
			console.error('Error adding document: ', e);
		}
	};

	return (
		<div>
			<button onClick={storeData}>send</button>
		</div>
	);
};

export default WriteToFireStore;
