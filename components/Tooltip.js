import { NFT_PRICE_MATIC_COLLEC_II } from "../utils/ethers";

export const Tooltip = ({ children, name = "Nft Name" }) => {
  const price = NFT_PRICE_MATIC_COLLEC_II;

  return <div className="tooltip flex justify-center" >
    <div className="w-full m-auto flex justify-center ">
      {children}
    </div>
    <span className="tooltiptext">
      <p> <span className="font-bold">{name}</span> collection</p>
      <p> {price} MATIC </p> 
    </span>
  </div>
}