# STEM Infrastructure and Ecosystem Token

The $STEM Infrastructure and Ecosystem Token is designed to enable and facilitate the creation of value, estalishment of governance and the maximizing of participant incentives through the STEM network.

The structure of the token is designed in such a way that token availability remains scarce until growth occurs, so as to avoid unnecessary circulation, as well as enabling the potential for limited increase in supply based on the growth of the network (creator_sales multipled by number of assets sold throughout the network across all entities) in order to avoid price dilution over time.

$STEM Token Specifics

Initial Circulating Supply: 77,777 $STEM (including liquidity, rewards and incentives)

Initial Minted Supply: 777,777 $STEM (80% locked for 6 months, thereafter released in accordance with our incentive protocol).

MAX Total Supply: 7,777,777 $STEM (minting is locked for 12 months post deployment and can only happen in-line with growth. Minting is based on our MintingOracle and cannot be done manually or via the ADMIN_ROLE. MintingOracle information will be publicly available to the community to be cross-referenced.

Specifics:
- The ability for ADMIN_ROLE to burn (destroy) tokens which are not in circulation
- The abiity for token holders to burn (destroy) their tokens
- A minter role that allows for restricted, programmatic token minting (creation) after 12 months and only based on growth, via our MintingOracle, to a max supply     of 7,777,777 $STEM
- The MINTER_ROLE cannot transfer/move or burn (destroy) tokens, it is restricted to minting based on specifics from our network growth (A role_based security         measure)
- A pauser role that allows all token transfers to be paused and unpaused based on specific events that may occur. Safety first for our community.
 
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles, and actions are made public for transparency.


