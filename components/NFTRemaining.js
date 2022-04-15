
import { useContext, useState } from 'react';

import { Btn } from '../components/Button';
import { Modal } from '../components/Modal';
import { PaymentChoice } from '../components/PaymentChoice';

import { Context } from '../utils/context';
import { MAX_NUMBER_NFT } from '../utils/ethers';


export const NFTRemaining = ({ cn = "container px-5 flex items-end" }) => {
	const { state, dispatch } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	return (
		<div className={cn}>
			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				color="pink-linear">
				{" "}
				SIDOUX
				<PaymentChoice />
			</Modal>
		</div>
	);
};