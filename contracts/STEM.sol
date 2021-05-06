// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

/**
 * STEM Governance and Ecosystem Token
 *
 * @dev {ERC20} token, including:
 *
 *  - The ability for ADMIN_ROLE to burn (destroy) tokens not in circulation
 *  - The abiity for token holders to burn (destroy) their tokens
 *  - A minter role that allows for restricted, programmatic token minting (creation). See below.
 *  - A pauser role that allows all token transfers to be paused based on specific events
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles - head to its documentation for details.
 *
 * The account that deploys the contract will be granted the pauser
 * roles, as well as the default admin role, which will let it grant
 * the pauser roles to other accounts where applicable - looking toward
 * community safety protocols.
 */
contract STEM is Context, AccessControlEnumerable, ERC20, ERC20Pausable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    uint postponedMintingTime;
    uint maxSupply;
    bool mintingisAllowed = true;

    /**
     * @dev Grants `DEFAULT_ADMIN_ROLE` and `PAUSER_ROLE` to the
     * account that deploys the contract.
     *
     * See {ERC20-constructor}.
     */
    constructor(string memory name, string memory symbol,
                uint _postponedMintingTime,
                uint _initialSupply,
                uint _maxSupply) ERC20(name, symbol) {
        postponedMintingTime = _postponedMintingTime;
        maxSupply            = _maxSupply;
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());

        _setupRole(PAUSER_ROLE, _msgSender());
        _mint(_msgSender(), _initialSupply);
    }

    /**
     * @dev Creates `amount` new tokens for `to`.
     *
     * Requirements:
     *
     * - the caller must have the `DEFAULT_ADMIN_ROLE`.
     */
    function turnOffMint() public virtual {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "ERC20STEM: must have admin role to turn off");
        mintingisAllowed = false;
    }

    /**
     * @dev Creates `amount` new tokens for `to`.
     *
     * See {ERC20-_mint}.
     *
     * Specifics:
     *
     *  - Minting is restricted, and locked for 12 months from deployment
     *  - The admin may permanently close (destroy) the minting function, based on certain network growth metrics
     *  - Minting of new tokens is not manual, this role is specific to our MintingOracle which is designed to only
     *    mint based on the growth of the network (Creators_Sales * Asset_Sales); and distributed in accordance with
     *    our governance structure to Ecosystem participants, creators, collectors and partners.
     *    At no point will anyone, including STEM or any representatives of STEM, have the MINTER ROLE.
     *    Specifics to minted tokens will be published publicly for transparency.
     * - the caller must have the `MINTER_ROLE`.
     */
    function mint(address to, uint256 amount) public virtual {
        require(hasRole(MINTER_ROLE, _msgSender()), "ERC20STEM: must have minter role to mint");
        require(mintingisAllowed, "ERC20STEM: minting is turned off");
        require(block.timestamp > postponedMintingTime, "ERC20STEM: minting is not allowed till postponed minting time");
        require(maxSupply >= (this.totalSupply() + amount), "ERC20STEM: totalSupply cannot be more than maxSupply");
        _mint(to, amount);
    }

    /**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public virtual {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "ERC20STEM: must have admin role to burn");
        _burn(_msgSender(), amount);
    }

    /**
     * @dev Pauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_pause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function pause() public virtual {
        require(hasRole(PAUSER_ROLE, _msgSender()), "ERC20STEM: must have pauser role to pause");
        _pause();
    }

    /**
     * @dev Unpauses all token transfers.
     *
     * See {ERC20Pausable} and {Pausable-_unpause}.
     *
     * Requirements:
     *
     * - the caller must have the `PAUSER_ROLE`.
     */
    function unpause() public virtual {
        require(hasRole(PAUSER_ROLE, _msgSender()), "ERC20STEM: must have pauser role to unpause");
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override(ERC20, ERC20Pausable) {
        super._beforeTokenTransfer(from, to, amount);
    }
}
