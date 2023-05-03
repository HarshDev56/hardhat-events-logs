const { hre, ethers } = require("hardhat")

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying Contract.... ")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(simpleStorage.address);
    const transactionResponse = await simpleStorage.store(999)
    const transactionRecipt = await transactionResponse.wait(1)

    console.log(transactionRecipt)
    console.log(transactionRecipt.events[0].args.oldNumber.toString())
    console.log(transactionRecipt.events[0].args.newNumber.toString())
    console.log(transactionRecipt.events[0].args.addedNumber.toString())
    console.log(transactionRecipt.events[0].args.sender)
    console.log(transactionRecipt.events)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
