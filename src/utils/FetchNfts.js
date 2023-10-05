//Created at (12:40): https://youtu.be/YehktV6LSqw?si=DVLmT49N0xDGyu-1&t=760
//Built out at (13:15): https://youtu.be/YehktV6LSqw?si=0KEZegXs7YMrBOuw&t=795

//From: https://github.com/alchemyplatform/Build-Your-NFT-Explorer/blob/main/src/utils/fetchNFTs.js


const apiKey = "RVakgtAN1cOw89v5ZlSrVJ1jSFQyzRug";
const endpoint = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

// Owner wallet address
// optional retryAttempt (call in recursive way)

export const fetchNFTs = async (owner, contractAddress, setNFTs, retryAttempt) => {
    if (retryAttempt === 5) {
        return;
    }
    if (owner) {
        let data;
        try {
            if (contractAddress) {
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())
            } else {
                //return ALL NFTs that belong to the owner. 
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json())
            }
        } catch (e) {
            fetchNFTs(endpoint, owner, contractAddress, setNFTs, retryAttempt+1)
        }

        setNFTs(data.ownedNfts)
        return data
    }
}

//Original functions in tutorial: 
const getAddressNFTs = async (owner, contractAddress, retryAttempt) => {
    if (retryAttempt === 5) {
        return; 
    }
    if (owner) {
        let data;
        try{
            if (contractAddress){
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())
            }else{
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json())
            }
        }catch(e){
            getAddressNFTs(endpoint, owner, contractAddress, retryAttempt+1)
            console.log("error in FetchNfts.js utils caught: ",e)
        }
        // NFT token IDs basically
        return data
    }
}


// Get Metadata
const getNFTsMetadata = async (NFTS) => {
    const getNFTsMetadata = await Promise.allSettled(NFTS.map(async (NFT) => {
        const metadata = await fetch(`${endpoint}/getNFTMetadata?contractAddress=${NFT.contract.address}&token`)
        let imageUrl; 
        console.log("metadata from getNFTsMetadata in FetchNFTs utils function was: ",metadata)
            if (metadata.media[0].uri.gateway.length){
                imageUrl = metadata.media[0].uri.gateway
            } else {
                imageUrl = "https://via.placeholder.com/500"
            }
        return {
            id: NFT.id.tokenId,
            contractAddress: NFT.contract.address,
            image: imageUrl,
            title: metadata.metadata.name,
            description: metadata.metadata.description,
            attributes: metadata.metadata.attributes
        }
    }))
}

//RESUME AT (15:30): https://youtu.be/YehktV6LSqw?si=A5VUPx8TdNmHLs9n&t=930