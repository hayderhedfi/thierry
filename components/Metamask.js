// import { useContext, useEffect, useState } from 'react'
// import { Btn } from '../components/Button'
// import { Context } from '../utils/context';
// import { getAccount, handleAccountsChanged, sliceAcc, SwitchNetwork } from '../utils/ethers';
// import { Modal } from './Modal';


// export const ConnectMetamask = () => {

//   const [showModal, setShowModal] = useState(false);
//   const [account, setAccount] = useState('Connect a wallet');
//   const { state, dispatch } = useContext(Context);

//   useEffect(async () => {
//     if (state.account) {
//       setAccount(sliceAcc(state.account));
//     } else {
//       await getAccount(setAccount, dispatch);
//     }
//   })

//   return (
//     <div className='align-center ml-4'>
//       <Btn text={account} cb={() => getAccount(setAccount, dispatch)} cn="pink-linear py-2 px-3" />
//       <Modal
//         onClose={() => setShowModal(false)}
//         show={showModal}
//         color="pink-linear-2"
//       >
//         <h3 className='white pb-5 '>Wrong network</h3>
//         <Btn cb={() => SwitchNetwork(account)} text="Switch to Polygon" p="py-2 px-12 violet payment-choice-item" bg="violet payment-choice-item" />
//       </Modal>
//     </div>
//   );
// }
