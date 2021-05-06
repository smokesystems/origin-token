# STEM Infrastructure and Ecosystem Token

The $STEM Infrastructure and Ecosystem Token is designed to enable and facilitate the creation of value, establishment of governance protocols and the maximizing of participant incentives through the STEM network.

The structure of the token is designed in such a way that token availability remains scarce until growth occurs, so as to avoid unnecessary circulation, as well as enabling the potential for limited increase in supply based on the growth of the network (creator_sales multiplied by number of assets sold throughout the network across all entities) in order to avoid price dilution over time.

$STEM Token Specifics

Initial Circulating Supply: 233,333 $STEM (30% of the Initial Minted Supply)
- Including DEX Liquidity, Ecosystem Rewards and Incentives.


Initial Minted Supply: 777,777 $STEM (70% locked and thereafter released in accordance with our incentive & vesting protocols).
- 40% Ecosystem / Community / Partners
- 20% Creator & Collector Rewards - released weekly based on our participation protocol.
- 10% Community Incentives, Marketing, Bug Bounties
- 10% Team - locked for 12 months, released incrementally over 12 months thereafter
- 12% Reserve
- 5% Early Investors 5% - locked for 12 months, released incrementally over 12 months thereafter
- 3% Initial DEX Liquity


MAX Total Supply: 7,777,777 $STEM 
- Minting is locked for 12 months post deployment and can only happen in-line with our growth protocol. 
- Minting is done by our MintingOracle - this is not accessible by the team, and is even disabled for the ADMIN_ROLE.
- Minting is focused on enabling growth andcontinuous incentivization of the network, but only based on the growth of the network to avoid dilution.
- MintingOracle information will be publicly available to the community to be cross-referenced.


Functional Specifics:
- The ability for ADMIN_ROLE to burn (destroy) tokens which are not in circulation
- The abiity for token holders to burn (destroy) their tokens
- Minting cannot be manually implemented.
- A minter role that allows for restricted, programmatic token minting (creation) after 12 months and only based on growth, via our MintingOracle, to a max supply     of 7,777,777 $STEM
- The MINTER_ROLE cannot transfer/move or burn (destroy) tokens, it is restricted to minting based on specifics from our network growth (A role_based security         measure)
- A pauser role that allows all token transfers to be paused and unpaused based on specific events that may occur. Safety first for our community.
 

 * This contract uses {AccessControl} to lock permissioned functions using the different roles - head to its documentation for details.
 * different roles, and actions are made public for transparency.
 * Details on our MintingOracle, Growth Protocol, Incentive Protocol, Vesting Protocol, Participation Protocol and Distribution Protocol to be released soon.


