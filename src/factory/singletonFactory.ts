import { Contract } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
const singletonFactoryAbi = [
  "function deploy(bytes memory _initCode, bytes32 _salt) public returns (address payable createdContract)",
];
const singletonFactoryAddress = "0xce0042b868300000d44a59004da54a005ffdcf9f";

/**
 * Get the singleton factory contract (ERC-2470).
 * If it is not deployed on the newtwork, then also deploy it.
 *
 * https://eips.ethereum.org/EIPS/eip-2470
 * @param hardhat
 * @returns Singleton Factory contract
 */
export const getSingletonFactory = async (
  hardhat: HardhatRuntimeEnvironment
): Promise<Contract> => {
  const [deployer] = await hardhat.ethers.getSigners();

  const singletonDeployer = "0xBb6e024b9cFFACB947A71991E386681B1Cd1477D";
  const singletonFactory = new hardhat.ethers.Contract(
    singletonFactoryAddress,
    singletonFactoryAbi,
    deployer
  );

  // check if singleton factory is deployed.
  if (
    (await hardhat.ethers.provider.getCode(singletonFactory.address)) === "0x"
  ) {
    // fund the singleton factory deployer account
    await deployer.sendTransaction({
      to: singletonDeployer,
      value: hardhat.ethers.utils.parseEther("0.0247"),
    });

    // deploy the singleton factory
    await (
      await hardhat.ethers.provider.sendTransaction(
        "0xf9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b83247000822470"
      )
    ).wait();

    if (
      (await hardhat.ethers.provider.getCode(singletonFactory.address)) == "0x"
    ) {
      throw Error(
        "Singleton factory could not be deployed to correct address, deployment haulted."
      );
    }
  }
  return singletonFactory;
};
